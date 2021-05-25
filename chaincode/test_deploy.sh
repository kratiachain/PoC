#cd ./../test-network
#./network.sh down
./network.sh up createChannel -c votenet -ca
#./../commercial-paper/organization/magnetocorp/configuration/cli/monitordocker.sh
./network.sh deployCC -c votenet -ccn votecontract -ccp ./../PoC/chaincode -ccl javascript
