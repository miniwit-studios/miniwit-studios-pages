#!/bin/bash

set -e

ENV=${NODE_ENV:-development}
if [[ $ENV != "development" ]]; then
    echo "webpack-dev-server is a development server. Try running it again with NODE_ENV=development"
    exit 1
fi

NODE_ENV=development webpack-dev-server --config ./config/webpack/development.js --colors --progress --port 8080 --host 0.0.0.0 --content-base public

exit 0
