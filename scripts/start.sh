#!/bin/bash

set -e

ENV=${NODE_ENV:-development}
if [[ $ENV == "development" ]]; then
    npm run dev-server --silent
else
    echo Unknown environment
    exit 1
fi

exit 0
