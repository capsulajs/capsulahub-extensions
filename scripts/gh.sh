#!/usr/bin/env bash
SERVICE=$1
URL=$2
COMMENTS_URL="https://api.github.com/repos/$TRAVIS_REPO_SLUG/issues/$TRAVIS_PULL_REQUEST/comments"

link="[**S3**](${URL})"


comment(){

    COMMENT_TEXT="**Travis-CI**<table><TR><TD>![image](https://user-images.githubusercontent.com/1706296/28703438-ba525cc8-736c-11e7-918e-ec980b1a1e4f.png)<br />Team Reactive</TD><TD><h2>$SERVICE</h2><br />[bundle size report](${URL}report.html)<br />$link</TD></TR></TABLE>"

    echo $COMMENT_TEXT
    curl -d '{"body":"'"$COMMENT_TEXT"'"}' -u "$GH_USER:$GT_ACCESS_TOKEN" -X POST https://api.github.com/repos/$TRAVIS_REPO_SLUG/issues/$TRAVIS_PULL_REQUEST/comments
    echo "done."
}

if [ ! -z "$link" ]; then
    comment
fi;
