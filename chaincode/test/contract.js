'use strict';

const VoteContract = require('./../lib/votecontract');
const { Stub } = require('fabric-shim');

//import { ChaincodeMockStub, Transform } from "@theledger/fabric-mock-stub";
require('chai').should();
const sinon = require('sinon');

describe('#Chaincode', () => {

    describe('#Vote', () => {

        it('should work', async () => {
            const cc = new VoteContract();
            const stub = sinon.createStubInstance(Stub);
            stub.getFunctionAndParameters.returns({ fcn: 'initFunc', params: [] });
            const ctx = cc.createContext();
            ctx.stub = stub;
            const res = await cc.Vote(ctx, 'b', 'c');
            console.log(res);
            //res.status.should.equal(Stub.RESPONSE_CODE.OK);
        });
    });

    describe('#GetAllResults', () => {

        it('should work', async () => {
            const cc = new VoteContract();
            const stub = sinon.createStubInstance(Stub);
            stub.getFunctionAndParameters.returns({ fcn: 'initFunc', params: [] });
            const ctx = cc.createContext();
            ctx.stub = stub;
            const res = await cc.Vote(ctx, 'b', 'c');
            console.log(res);
            const res2 = await cc.GetVote(ctx, 'c');
            console.log(res2);
            const res3 = await cc.GetAllAssets(ctx);
            console.log(res3);

            //res.status.should.equal(Stub.RESPONSE_CODE.OK);
        });
    });

    describe('#Record something', () => {

        it('should work', async () => {
            //const cc = new VoteContract();
            const stub = sinon.createStubInstance(Stub);
            stub.getFunctionAndParameters.returns({ fcn: 'initFunc', params: [] });
            stub.putState('key', Buffer.from(JSON.stringify('asset')));
            let data = await stub.getState('key');
            console.log(`data: ${data}`);

            //res.status.should.equal(Stub.RESPONSE_CODE.OK);
        });
    });

});
