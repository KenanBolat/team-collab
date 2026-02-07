#!/bin/bash

# =============================================================================
# Download Excalidraw Libraries for Offline/Air-Gapped Use
# =============================================================================
# 
# Run this on a machine WITH internet access, then transfer to air-gapped server
#
# Usage: ./download-libraries.sh
#
# =============================================================================

set -e

OUTPUT_DIR="../libraries"
REPO_URL="https://github.com/excalidraw/excalidraw-libraries"

echo "=============================================="
echo "  Downloading Excalidraw Libraries"
echo "=============================================="
echo ""

# Method 1: Clone the GitHub repository (recommended)
echo "Cloning excalidraw-libraries repository..."
echo ""

if command -v git &> /dev/null; then
    rm -rf "$OUTPUT_DIR"
    git clone --depth 1 "$REPO_URL" "$OUTPUT_DIR"
    
    # Remove git metadata
    rm -rf "$OUTPUT_DIR/.git"
    rm -rf "$OUTPUT_DIR/.github"
    rm -f "$OUTPUT_DIR/.gitignore"
    rm -f "$OUTPUT_DIR/README"
    
    echo ""
    echo "✓ Libraries downloaded successfully!"
else
    echo "Git not found. Trying alternative method..."
    
    # Method 2: Download as ZIP
    mkdir -p "$OUTPUT_DIR"
    curl -L "${REPO_URL}/archive/refs/heads/main.zip" -o libraries.zip
    unzip -q libraries.zip -d "$OUTPUT_DIR"
    mv "$OUTPUT_DIR/excalidraw-libraries-main/"* "$OUTPUT_DIR/"
    rm -rf "$OUTPUT_DIR/excalidraw-libraries-main"
    rm libraries.zip
    
    echo ""
    echo "✓ Libraries downloaded successfully!"
fi

echo ""
echo "=============================================="
echo "  Download Complete"
echo "=============================================="
echo ""
echo "Libraries saved to: $OUTPUT_DIR"
echo ""
echo "Contents:"
ls -la "$OUTPUT_DIR"
echo ""
echo "Library count:"
find "$OUTPUT_DIR" -name "*.excalidrawlib" 2>/dev/null | wc -l
echo " library files found"
echo ""
echo "=============================================="
echo "  Next Steps"
echo "=============================================="
echo ""
echo "1. Copy the '$OUTPUT_DIR' folder to your air-gapped server"
echo ""
echo "2. Place it in your excalidraw-alswl directory:"
echo "   excalidraw-alswl/"
echo "   ├── docker-compose.yml"
echo "   ├── nginx.conf"
echo "   ├── certs/"
echo "   └── libraries/    <-- HERE"
echo ""
echo "3. The docker-compose volume mount will serve them automatically"
echo ""
