#!/bin/bash

# Generate blog cover images matching the existing style:
# - 1536x1024 PNG
# - Dark navy background (#0a0b14)
# - Category badge top-left with accent line
# - Title in white bold text
# - "PostEngage AI" branding bottom-right

BLOG_DIR="app/blog"
OUTPUT_DIR="public/blog"
WIDTH=1536
HEIGHT=1024

mkdir -p "$OUTPUT_DIR"

generated=0
skipped=0

for page in "$BLOG_DIR"/*/page.tsx; do
  slug=$(echo "$page" | sed "s|${BLOG_DIR}/||;s|/page.tsx||")
  [ "$slug" = "[slug]" ] && continue

  # Skip if blog already has an image reference
  if grep -q "src='/blog/" "$page" 2>/dev/null || grep -q 'src="/blog/' "$page" 2>/dev/null; then
    skipped=$((skipped + 1))
    continue
  fi

  # Extract title from metadata
  title=$(grep -A2 "title:" "$page" | head -3 | sed "s/.*title:[[:space:]]*['\"]//;s/['\"].*//" | tr '\n' ' ' | sed 's/[[:space:]]*$//' | head -c 120)

  # If title extraction failed, derive from slug
  if [ -z "$title" ] || [ ${#title} -lt 5 ]; then
    title=$(echo "$slug" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1')
  fi

  # Extract category from Badge component
  category=$(grep -A1 "Badge" "$page" | grep -v "Badge\|import\|variant" | head -1 | sed 's/[<>]//g;s/^[[:space:]]*//' | head -c 30)
  if [ -z "$category" ] || [ ${#category} -lt 2 ]; then
    # Try extracting from metadata keywords or slug
    if echo "$slug" | grep -qi "automation"; then
      category="Automation"
    elif echo "$slug" | grep -qi "dm"; then
      category="DM Strategy"
    elif echo "$slug" | grep -qi "ai"; then
      category="AI Technology"
    elif echo "$slug" | grep -qi "growth"; then
      category="Growth"
    elif echo "$slug" | grep -qi "ecommerce\|e-commerce"; then
      category="E-commerce"
    elif echo "$slug" | grep -qi "lead"; then
      category="Lead Generation"
    elif echo "$slug" | grep -qi "brand"; then
      category="Branding"
    elif echo "$slug" | grep -qi "content"; then
      category="Content Strategy"
    elif echo "$slug" | grep -qi "instagram"; then
      category="Instagram"
    else
      category="Strategy"
    fi
  fi

  # Generate cover image name from slug
  cover_name=$(echo "$slug" | sed 's/$/-cover.png/')
  output_path="${OUTPUT_DIR}/${cover_name}"

  if [ -f "$output_path" ]; then
    skipped=$((skipped + 1))
    continue
  fi

  # Truncate title for display (max ~60 chars with word boundary)
  display_title="$title"
  if [ ${#display_title} -gt 80 ]; then
    display_title=$(echo "$display_title" | cut -c1-77 | sed 's/ [^ ]*$//')
    display_title="${display_title}..."
  fi

  # Generate the image with ImageMagick
  convert -size ${WIDTH}x${HEIGHT} \
    xc:'#0a0b14' \
    -fill '#12132a' -draw "rectangle 0,0 ${WIDTH},${HEIGHT}" \
    \( -size $((WIDTH - 200))x1 xc:none \
       -fill '#6366f1' -draw "line 0,0 80,0" \
       -filter point -resize $((WIDTH - 200))x2! \) \
    -geometry +100+320 -composite \
    -font "Helvetica-Bold" -pointsize 28 \
    -fill '#a5b4fc' \
    -annotate +100+305 "$category" \
    -font "Helvetica-Bold" -pointsize 58 \
    -fill white \
    -size 1200x300 \
    -gravity NorthWest \
    caption:"$display_title" \
    -geometry +100+360 -composite \
    -font "Helvetica" -pointsize 26 \
    -fill '#64748b' \
    -gravity SouthEast \
    -annotate +80+60 "PostEngage AI" \
    -quality 95 \
    "$output_path" 2>/dev/null

  if [ $? -eq 0 ]; then
    echo "✅ $cover_name"
    generated=$((generated + 1))
  else
    echo "❌ Failed: $slug"
  fi
done

echo ""
echo "================================"
echo "✅ Generated: $generated"
echo "⏭️  Skipped: $skipped"
echo "================================"
