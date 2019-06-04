#!/usr/bin/env bash
S3_PATH="s3://$S3_BUCKET"
SERVICE=$1

# PR
if [[ "$TRAVIS_PULL_REQUEST" != "false" ]]; then
    SLUG="/PR/$TRAVIS_PULL_REQUEST_BRANCH"
# master # develop
elif [[ "$TRAVIS_BRANCH" == "develop" ]]; then
    SLUG="/$TRAVIS_BRANCH"
elif [[ "$TRAVIS_BRANCH" == "master" ]]; then
    SLUG="/rc"
fi;

SERVICE_PATH="$SLUG/$SERVICE/"
FINAL_URL="$CF_BASE_URL$SERVICE_PATH"

echo "current branch: $TRAVIS_BRANCH $TRAVIS_PULL_REQUEST_BRANCH is pull request: $TRAVIS_PULL_REQUEST"
echo "S3 Path: $S3_PATH"
echo "travis event type: $TRAVIS_EVENT_TYPE"
echo "S3 URL: $FINAL_URL"
echo "SERVICE_PATH: $SERVICE_PATH"

[[ -z $SERVICE_PATH ]] && echo "Error: Empty SERVICE_PATH" && exit 1

export PATH=$PATH:$HOME/.local/bin

# upload to s3
aws s3 rm $S3_PATH/$SERVICE_PATH --recursive --region $S3_REGION
aws s3 cp dist $S3_PATH$SERVICE_PATH --recursive
aws s3 cp doc $S3_PATH${SERVICE_PATH}doc --recursive

echo "application was uploaded to s3 url: $CF_URL$SERVICE_PATH"

if [ ! "$TRAVIS_PULL_REQUEST" == "false" ]; then
    # add comment on github pull request.
    source ../../scripts/gh.sh $SERVICE $FINAL_URL
    echo "comment sent to GH pull request: $TRAVIS_BRANCH $TRAVIS_PULL_REQUEST_BRANCH PR $TRAVIS_PULL_REQUEST"
else
    echo "comment was skipped not a pull request or comment already created."
fi
