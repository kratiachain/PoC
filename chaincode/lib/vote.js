'use strict';

const State = require('./../ledger-api/state.js');

class Vote extends State {

    constructor(obj) {
        //Definicion de la clave
        super(Vote.getClass(), [obj.voteToken]);
        Object.assign(this, obj);
    }

    getCandidate(){
        return this.candidate;
    }

    setCandidate(newCandidate){
        this.candidate = newCandidate;
    }

    getVoteToken(){
        return this.voteToken;
    }

    setVoteToken(newVoteToken){
        this.voteToken = newVoteToken;
    }

    static fromBuffer(buffer) {
        return Vote.deserialize(buffer);
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this));
    }


    static deserialize(data) {
        return State.deserializeClass(data, Vote);
    }
    /**
     * Factory method
     */
    static createInstance(candidate, voteToken) {
        return new Vote({candidate, voteToken});
    }

    //Obtiene el nombre de la clase
    static getClass() {
        return 'org.votenet.vote';
    }
}

module.exports = Vote;