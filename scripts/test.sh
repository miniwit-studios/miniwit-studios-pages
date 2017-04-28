

set -e

RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

ENV=${NODE_ENV:-test}
if [[ $ENV != "test" ]]; then
    echo -e "${RED}ERROR${NC}: Cannot run unit tests out of the test environment"
    exit 1
fi

STATUS_RESPONSE=$(git status)
NOT_STAGED_FOR_COMMIT="^.*not staged for commit.*$"
UNTRACKED_FILES="^.*Untracked files.*$"
if [[ $STATUS_RESPONSE =~ $NOT_STAGED_FOR_COMMIT || $STATUS_RESPONSE =~ $UNTRACKED_FILES ]]; then
    echo -e "${YELLOW}WARNING${NC}: You have unstaged changes. These tests might not have correct results."
fi

KARMA_CONFIG="config/karma/single-run.js"

TEST_COUNT=${1:-}
if [[ $TEST_COUNT == "watch" ]]; then
    KARMA_CONFIG="config/karma/watch.js"
fi

node_modules/.bin/karma start $KARMA_CONFIG

exit 0
