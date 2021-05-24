'use strict';

const StateList = require('./../ledger-api/statelist.js');

const Vote = require('./vote.js');

class VoteList extends StateList {
    constructor(ctx) {
        // TODO ver regla de nombrado
        super(ctx, 'org.votenet.votes');
        this.use(Vote);
    }

    async addVote(vote) {
        return this.addState(vote);
    }

    async getVote(voteKey){
        return this.getState(voteKey);
    }

}

module.exports = VoteList;