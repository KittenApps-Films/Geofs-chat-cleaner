#!/usr/bin/env bash
# bash boilerplate
set -euo pipefail # strict mode
readonly SCRIPT_NAME="$(basename "$0")"
readonly SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
function l { # Log a message to the terminal.
    echo
    echo -e "[$SCRIPT_NAME] ${1:-}"
}

# File to copy from Notehub
OPENAPI_FILE=./notehub/api/openapi.yaml

# if the file exists in Notehub, copy it to Notehub-JS repo
if [ -f "$OPENAPI_FILE" ]; then
    echo "Copying $OPENAPI_FILE"
    cp -R ./notehub/api/openapi.yaml $DESTINATION_PATH
fi

echo "OpenAPI file copied to $DESTINATION_PATH"
