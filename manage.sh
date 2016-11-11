#!/usr/bin/env bash
directory=`pwd`

function create_bucket() {
  local bucket_name=$1
  local bucket_uri="s3://${bucket_name}"
  aws s3 mb $bucket_uri
  aws s3 website \
    --index-document index.html \
    --error-document error.html \
    $bucket_uri
  local region=$(aws configure get region)
  echo "Website endpoint is: http://${1}.s3-website-${region}.amazonaws.com"
}

function deploy_s3() {
  local bucket_uri="s3://$1"
  aws s3 sync $directory/public/ $bucket_uri --acl public-read
  echo "View the site at http://${1}.s3-website-us-east-1.amazonaws.com"
}

action=${1:-"help"}

cd $root_dir

case "$action" in
  deploy)
    deploy_s3 ${2}
    ;;
  create)
    create_bucket ${2}
    ;;
esac
