#!/usr/bin/env bash
# Launches `npm run dev` with the right Node.js binary available on PATH.
# Used by .claude/launch.json so the Preview MCP can spawn the dev server
# from a non-interactive shell (where PATH does not include nvm).
export PATH="/Users/ElioHarfouche/.nvm/versions/node/v24.14.1/bin:$PATH"
cd "$(dirname "$0")/.."
exec npm run dev
