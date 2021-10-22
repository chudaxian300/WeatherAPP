#!/bin/bash

set -x
PID=$(lsof -t -i:3001)
if [ -z "${PID}" ]; then
    echo "no node app runing..."
  else
    echo "stop app runing on port 3001 with PID ${PID}"
    kill -9 ${PID}
fi
set +x
