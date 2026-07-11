#!/usr/bin/env bash
# Regenerate site imagery with a cohesive warm/editorial style (Pollinations Flux).
# Keeps the same seed filenames so no code changes are needed.
set -u
DIR="C:/Projeler/Claude Code Website Yeni 1/public/generated"
STYLE="cinematic warm natural lighting, soft muted earthy tones, editorial minimal composition, realistic professional photography, shallow depth of field, ultra detailed, no text, no watermark"

declare -A P=(
  ["vertexstarter-studio-team"]="a small modern creative technology studio team collaborating around a laptop in a bright airy loft office with plants"
  ["nexora-shopify-store"]="minimal ecommerce product studio, a laptop showing a clean online store, neat product boxes on a warm wooden table"
  ["nexora-b2b-outreach"]="a professional at a laptop reviewing a sales pipeline on screen in a bright modern office by a window"
  ["nexora-ads-performance"]="a laptop screen showing marketing growth charts and analytics on a tidy minimal desk with coffee"
  ["nexora-automation-ops"]="an abstract workflow automation concept, connected glowing nodes and flow lines on a screen in a clean modern workspace"
  ["nexora-voice-agent"]="a friendly professional wearing a headset taking a call at a bright modern desk, warm daylight"
  ["nexora-content-pipeline"]="a content creator desk with a camera, notebook and laptop, warm editorial light, minimal"
  ["vertexstarter-ecommerce"]="a modern ecommerce fulfillment corner with neatly packaged parcels and a laptop, warm light"
  ["vertexstarter-healthcare"]="a bright modern clinic reception with a friendly healthcare professional, warm calm light"
  ["vertexstarter-realestate"]="a modern real estate office desk with an architectural house model and keys by a sunny window"
  ["vertexstarter-restaurant"]="a warm modern restaurant interior with a staff member using a tablet at the counter"
  ["vertexstarter-education"]="a modern online learning workspace, a student at a laptop in a bright room with books, warm light"
  ["vertexstarter-manufacturing"]="a clean modern manufacturing facility interior with tidy machinery, warm industrial daylight"
  ["vertexstarter-logistics"]="a modern logistics warehouse aisle with organized shelves and a forklift, warm light"
  ["vertexstarter-blog-data-systems"]="clean data dashboards and analytics charts on desktop screens in a calm modern office, warm light"
  ["vertexstarter-blog-lead-recovery"]="a CRM sales funnel on a laptop screen at a warm minimal desk, realistic"
  ["vertexstarter-blog-ai-agents"]="an abstract AI assistant concept, a sleek humanoid robot figure at a modern desk, warm soft light, professional"
)

ok=0; fail=0
for seed in "${!P[@]}"; do
  prompt="${P[$seed]}, ${STYLE}"
  enc=$(printf '%s' "$prompt" | sed 's/ /%20/g; s/,/%2C/g')
  done=0
  for combo in "flux:7" "flux:21" "turbo:42" "turbo:88" "flux:100"; do
    model="${combo%%:*}"; s="${combo##*:}"
    curl -s -L --max-time 160 "https://image.pollinations.ai/prompt/${enc}?width=1200&height=750&nologo=true&model=${model}&seed=${s}" -o "$DIR/$seed.jpg.tmp"
    sz=$(wc -c < "$DIR/$seed.jpg.tmp" 2>/dev/null || echo 0)
    if [ "$sz" -gt 25000 ]; then mv "$DIR/$seed.jpg.tmp" "$DIR/$seed.jpg"; echo "OK   $seed ($sz, $model/$s)"; done=1; ok=$((ok+1)); break; fi
  done
  if [ "$done" = 0 ]; then rm -f "$DIR/$seed.jpg.tmp"; echo "FAIL $seed"; fail=$((fail+1)); fi
done
echo "=== DONE ok=$ok fail=$fail ==="
