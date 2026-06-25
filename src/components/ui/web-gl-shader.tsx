"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * three.js RawShaderMaterial wave shader.
 * Adapted to fill its parent container (absolute) and tinted to the brand
 * teal/cyan accent so it matches the rest of the site. Honors reduced motion.
 */
export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.OrthographicCamera | null;
    renderer: THREE.WebGLRenderer | null;
    mesh: THREE.Mesh | null;
    uniforms: {
      resolution: { value: number[] };
      time: { value: number };
      xScale: { value: number };
      yScale: { value: number };
      distortion: { value: number };
    } | null;
    animationId: number | null;
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const { current: refs } = sceneRef;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    // brand teal/cyan tint applied to the wave output
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

        // tint toward brand teal (#2dd4a7 / cyan)
        vec3 col = vec3(r, g, b) * vec3(0.18, 1.0, 0.82);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const getSize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      return { w, h };
    };

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return;
      const { w, h } = getSize();
      const pr = refs.renderer.getPixelRatio();
      refs.renderer.setSize(w, h, false);
      refs.uniforms.resolution.value = [w * pr, h * pr];
    };

    const initScene = () => {
      refs.scene = new THREE.Scene();
      refs.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      refs.renderer.setClearColor(new THREE.Color(0x000000));

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

      const { w, h } = getSize();
      refs.uniforms = {
        resolution: { value: [w, h] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.5 },
        distortion: { value: 0.05 },
      };

      const position = [
        -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0,
        1.0, 0.0, 1.0, 1.0, 0.0,
      ];

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", positions);

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      });

      refs.mesh = new THREE.Mesh(geometry, material);
      refs.scene.add(refs.mesh);

      handleResize();
    };

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value += 0.01;
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera);
      }
      if (!reduced) refs.animationId = requestAnimationFrame(animate);
    };

    initScene();
    if (reduced) {
      if (refs.uniforms) refs.uniforms.time.value = 4.0;
      if (refs.renderer && refs.scene && refs.camera)
        refs.renderer.render(refs.scene, refs.camera);
    } else {
      animate();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      window.removeEventListener("resize", handleResize);
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh);
        refs.mesh.geometry.dispose();
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose();
        }
      }
      refs.renderer?.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 block h-full w-full"
    />
  );
}
