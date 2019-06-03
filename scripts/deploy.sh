#!/usr/bin/env bash
S3_PATH="s3://$S3_BUCKET"
SERVICE=$1
SERVICE_PATH_TEST=""

define_path() {
    SLUG="/error/"

    # PR
    if [[ ! "$TRAVIS_PULL_REQUEST" == "false" ]]; then
        echo "define_path case 1"
        SLUG="/PR/$TRAVIS_PULL_REQUEST_BRANCH/"
    # master # develop
    elif [[ "$TRAVIS_BRANCH" == "develop" ]]; then
        echo "define_path case 2"
        SLUG="/$TRAVIS_BRANCH/"
    elif [[ "$TRAVIS_BRANCH" == "master" ]]; then
        echo "define_path case 3"
        SLUG="/rc/"
    fi;

    if [[ "$SLUG" == "/error/" ]]; then
        echo "define_path case 4"
        exit 1
    fi;

    SERVICE_PATH_TEST="/extensions/$SERVICE$SLUG"
}

define_path

SERVICE_PATH="/PR/enable-ci-cd/packages/$SERVICE/"

echo "current branch: $TRAVIS_BRANCH $TRAVIS_PULL_REQUEST_BRANCH is pull request: $TRAVIS_PULL_REQUEST"
echo "S3 Path: $S3_PATH"
echo "travis event type: $TRAVIS_EVENT_TYPE"
echo "S3 URL: $S3_URL"
echo "Cloudfront URL: $CF_URL"
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
    source ./gh.sh $SERVICE $CF_BASE_URL$SERVICE_PATH
    echo "comment sent to GH pull request: $TRAVIS_BRANCH $TRAVIS_PULL_REQUEST_BRANCH PR $TRAVIS_PULL_REQUEST"
else
    echo "comment was skipped not a pull request or comment already created."
fi
