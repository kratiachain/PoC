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
            const ctx = cc.createContext();
            ctx.stub = stub;
            const res = await cc.Vote(ctx, 'b', 'c');
            console.log('Response: ' + res);
            //res.status.should.equal(Stub.RESPONSE_CODE.OK);
        });
    });

    describe('#GetAllResults', () => {

        it('should work', async () => {
            //Ver como registrar elementos en las pruebas
            const cc = new VoteContract();
            const stub = sinon.createStubInstance(Stub);
            const ctx = cc.createContext();
            ctx.stub = stub;
            await cc.Vote(ctx, 'b', 'c');
            //const res = await cc.GetAllAssets(ctx);
            //console.log(res);

            //res.status.should.equal(Stub.RESPONSE_CODE.OK);
        });
    });

    describe('#Exist', () => {

        it('should work', async () => {
            //Ver como registrar elementos en las pruebas
            const cc = new VoteContract();
            const stub = sinon.createStubInstance(Stub);
            const ctx = cc.createContext();
            ctx.stub = stub;
            //await cc.Vote(ctx, 'b', 'c');
            const res = await cc.Exists(ctx, 'c');
            res.should.equal(false);
            console.log('Response: ' + res);
        });
    });

});
