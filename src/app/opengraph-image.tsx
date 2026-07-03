import { ImageResponse } from "next/og";

export const alt = "VertexStarter - AI Workforce Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f5f4f0",
          backgroundImage:
            "radial-gradient(circle at 88% 12%, rgba(230,59,46,0.16), transparent 42%)",
          color: "#0a0a0a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#e63b2e",
            }}
          />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            VertexStarter
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              color: "#e63b2e",
              fontWeight: 600,
            }}
          >
            AI WORKFORCE INFRASTRUCTURE
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 84,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 940,
            }}
          >
            Build Your AI Workforce.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#57534e",
              maxWidth: 860,
            }}
          >
            AI employees for support, sales and operations, working 24/7.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(10,10,10,0.12)",
            paddingTop: 28,
            fontSize: 26,
            color: "#57534e",
          }}
        >
          <div style={{ display: "flex" }}>vertexstarter.com</div>
          <div style={{ display: "flex", color: "#e63b2e", fontWeight: 600 }}>
            Book a strategy call
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
