cd ./../../test-network
./network.sh down
./network.sh up createChannel -c votenet -ca
./network.sh deployCC -c votenet -ccn votecontract -ccp ./../PoC/chaincode -ccl javascript
