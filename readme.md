##Posts patient from OpenMRS to OpenHIM on creation/update.

docker build -t mrsmediator .
docker run --network {NETWORK NAME} --name mrsmediator --rm -p 7050:7050 mrsmediator