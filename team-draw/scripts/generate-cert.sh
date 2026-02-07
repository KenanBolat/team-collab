#!/bin/bash

# =============================================================================
# Generate Self-Signed SSL Certificate
# =============================================================================

set -e
source ../.env
CERT_DIR="../certs"
IP_ADDRESS="${1:-$STORAGE_BACKEND_HOST}"
echo $IP_ADDRESS

echo "=========================================="
echo "  Generating SSL Certificate"
echo "  IP: ${IP_ADDRESS}"
echo "=========================================="
echo ""

# Create certs directory
mkdir -p "$CERT_DIR"

# Generate private key and certificate
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout "$CERT_DIR/key.pem" \
    -out "$CERT_DIR/cert.pem" \
    -subj "/C=TR/ST=Local/L=Local/O=Self-Signed/CN=${IP_ADDRESS}" \
    -addext "subjectAltName=IP:${IP_ADDRESS},IP:127.0.0.1,DNS:localhost"

echo ""
echo "✓ Certificate generated successfully!"
echo ""
echo "Files created:"
ls -la "$CERT_DIR"
echo ""
echo "=========================================="
echo "  IMPORTANT: Browser Warning"
echo "=========================================="
echo ""
echo "When you access https://${IP_ADDRESS}:3443"
echo "your browser will show a security warning."
echo ""
echo "This is expected for self-signed certificates."
echo ""
echo "Click 'Advanced' → 'Proceed to ${IP_ADDRESS} (unsafe)'"
echo "or 'Accept the Risk and Continue' depending on your browser."
echo ""
echo "=========================================="
echo "  Next Steps"
echo "=========================================="
echo ""
echo "1. Start the stack:"
echo "   docker-compose up -d"
echo ""
echo "2. Access Excalidraw:"
echo "   https://${IP_ADDRESS}:3443"
echo ""
echo "3. Accept the certificate warning in your browser"
echo ""
echo "4. Start collaboration - it should work now!"
echo ""
