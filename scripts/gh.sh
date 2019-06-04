#!/usr/bin/env bash
EXTENSION_NAME=$1
URL=$2
DOCUMENTATION_INCLUDED=$3
echo "DOCUMENTATION_INCLUDED: $DOCUMENTATION_INCLUDED"
COMMENTS_URL="https://api.github.com/repos/$TRAVIS_REPO_SLUG/issues/$TRAVIS_PULL_REQUEST/comments"
EXTENSION_LINK="[**$EXTENSION_NAME bundle**](${URL}index.js)"
DOC_LINK="[**$EXTENSION_NAME documentation**](${URL}/doc/index.html)"

commentAlreadyExists() {
    comments=$(curl -s -u "$GH_USER:$GH_ACCESS_TOKEN" "$COMMENTS_URL" | jq -r '.[].body')
    echo "comments --> $comments"
    [[ -z "$comments" ]] && echo "no comments" && return 1
    [[ "$comments" == *"$1"* ]]
    return $?
}

comment(){
    COMMENT_TEXT="**Travis-CI** just deployed $EXTENSION_LINK"
    if [ $DOCUMENTATION_INCLUDED != "false" ]; then
        echo "included docs"
        COMMENT_TEXT="$COMMENT_TEXT and $DOC_LINK"
    fi
    echo "Links to the deployed files have been generated for PR"

    # Post comment about service if it's not posted yet
    commentAlreadyExists "$COMMENT_TEXT" && echo "Comment already posted" || \
    curl -d '{"body":"'"$COMMENT_TEXT"'"}' -u "$GH_USER:$GH_ACCESS_TOKEN" -X POST "$COMMENTS_URL"
    echo "done."
}

comment
