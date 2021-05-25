'use strict';

// Fabric smart contract classes
const { Contract, Context } = require('fabric-contract-api');


// VoteNet classes
const Vote = require('./vote.js');
const VoteList = require('./votelist.js');

// Contexto que contiene la lista de los votos
class VoteContext extends Context {

    constructor() {
        super();
        this.votelist = new VoteList(this);
    }
}

class VoteContract extends Contract {

    constructor() {
        //Identificador del contrato dentro del chaincode
        super('org.votenet.vote');
    }

    createContext() {
        return new VoteContext();
    }

    async instantiate(ctx) {
        // No implementation required with this example
        // It could be where data migration is performed, if necessary
        console.log('Instantiate the contract');
    }

    /**
     * Registrar el voto a un candidato
     */
    async Vote(ctx, candidate, voteToken){
        //Busca el voto para verificar si el candidato ya voto
        let voteKey = Vote.makeKey([voteToken]);
        let vote = await ctx.votelist.getVote(voteKey);
        if (vote) {
            throw new Error('\nVote for token: ' + voteToken + ' Already exist');
        }
        //Crea una instancia del voto
        let newVote = Vote.createInstance(candidate, voteToken);
        //Registra el voto agregandolo a la lista de votos
        await ctx.votelist.addVote(newVote);
        //Devuelve el voto serializado (para probar)
        return newVote;
    }

    async Exists(ctx, voteToken){
        //Verifica si existe un voto con cierto token
        let voteKey = Vote.makeKey([voteToken]);
        let vote = await ctx.votelist.getVote(voteKey);
        return vote !== null;
    }

    // GetAllAssets returns all assets found in the world state.
    async GetAllAssets(ctx) {
        const allResults = [];
        // range query with empty string for startKey and endKey does an open-ended query of all assets in the chaincode namespace.
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: result.value.key, Record: record });
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }
}

module.exports = VoteContract;