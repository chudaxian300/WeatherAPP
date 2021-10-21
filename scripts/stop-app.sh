set -x
PID=$(lsof -t -i:5000)
if [ -z "${PID}" ]; then
    echo "no node app runing..."
  else
    echo "stop app runing on port 5000 with PID ${PID}"
    kill -9 ${PID}
fi
set +x