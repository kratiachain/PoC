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
        return new CommercialPaperContext();
    }

    /**
     * Registrar el voto a un candidato
     * @param {Context} ctx 
     * @param {String} candidate 
     * @param {String} voteToken 
     */
    async Vote(ctx, candidate, voteToken) {
        
        //Crea una instancia del voto
        let vote = Vote.createInstance(candidate, voteToken);
        
        //Registra el voto agregandolo a la lista de votos
        await ctx.votelist.addVote(vote);
        
        //Devuelve el voto serializado (para probar)
        return vote;
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