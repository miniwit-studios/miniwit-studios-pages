#!/bin/bash

git stash -k -u -q

(
    set -e
    
    echo In pre-commit hook!
    #yarn test-once
    #yarn lint
)

__RET=$?
git stash pop -q
exit $__RET
