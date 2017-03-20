#!/bin/bash

set -e

node_modules/.bin/tslint -c "config/tslint.json" --project "tsconfig.json" -t stylish

exit 0
