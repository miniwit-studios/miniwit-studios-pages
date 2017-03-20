#!/bin/bash

git stash -k -u -q

(
    set -e
    
    #yarn test-once
    npm run lint
)

__RET=$?
git stash pop -q
exit $__RET
