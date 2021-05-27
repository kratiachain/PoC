'use strict';

/* 
Esta es una aplicación de prueba que permite mostrar como se registra un voto en la red de fabric
 */
const { Gateway, Wallets } = require('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const path = require('path');
const { buildCAClient, registerAndEnrollUser, enrollAdmin } = require('../../test-application/javascript/CAUtil.js');
const { buildCCPOrg1, buildWallet } = require('../../test-application/javascript/AppUtil.js');

const channelName = 'votenet';
const chaincodeName = 'votecontract';
const mspOrg1 = 'Org1MSP';
const walletPath = path.join(__dirname, 'wallet');
const org1UserId = 'appUser';

function prettyJSONString(inputString) {
	return JSON.stringify(JSON.parse(inputString), null, 2);
}

async function main() {
	try {
		//Creacion de certificados para la conexion de la aplicacion a la blockchain
		console.log('--> Creación de certificados:');	
		const ccp = buildCCPOrg1();
		const caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com');
		const wallet = await buildWallet(Wallets, walletPath);
		await enrollAdmin(caClient, wallet, mspOrg1);
		await registerAndEnrollUser(caClient, wallet, mspOrg1, org1UserId, 'org1.department1');
		const gateway = new Gateway();

		try {
			//Se abre una coneccion a la red de fabric
			await gateway.connect(ccp, {
				wallet,
				identity: org1UserId,
				discovery: { enabled: true, asLocalhost: true } // using asLocalhost as this gateway is using a fabric network deployed locally
			});

			//Se obtiene el canal y el contrato con los que se va a trabajar
			const network = await gateway.getNetwork(channelName);
			const contract = network.getContract(chaincodeName);

			//Evaluar si un usuario ya voto
            console.log('\n--> Transacción: Verificar si se votó');
			let exists = await contract.evaluateTransaction('Exists', 'token2');
			console.log(`Verificar si el voto existe: ${prettyJSONString(exists.toString())}`);
			
			//Emitir un voto
			try {
				console.log('\n--> Transacción: Votar');
				let vote = await contract.submitTransaction('Vote', 'Potter', 'token2');
				console.log(`Voto registrado: ${prettyJSONString(vote.toString())}`);
			} catch (error) {
				console.log("Error: ya se ha registrado un voto para este usuario")
				console.error(`Stack del error: \n${error}`);
			}
			
			//Evaluar si un usuario ya voto
            console.log('\n--> Transacción: Verificar si se votó');
			exists = await contract.evaluateTransaction('Exists', 'token2');
			console.log(`Verificar si el voto existe: ${prettyJSONString(exists.toString())}`);

			//Mostrar votos registrados
			console.log('\n--> Votos registrados:');
			let votes = await contract.evaluateTransaction('GetAllAssets');
			console.log(`Votos registrados: ${prettyJSONString(votes.toString())}`);

		} finally {
			gateway.disconnect();
		}
	} catch (error) {
		console.error(`Error al iniciar la aplicación: ${error}`);
	}
}

main();
