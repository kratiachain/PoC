'use strict';

const VoteContext = require('./../lib/votecontract');
const { Stub } = require('fabric-shim');

//import { ChaincodeMockStub, Transform } from "@theledger/fabric-mock-stub";
require('chai').should();
const sinon = require('sinon');


describe('Test MyChaincode', () => {
    it('Should init without issues', async () => {
        const cc = new VoteContext();
        const stub = sinon.createStubInstance(Stub);
        stub.getFunctionAndParameters.returns({ fcn: 'initFunc', params: [] });
        const res = await cc.Init(stub);
        res.status.should.equal(Stub.RESPONSE_CODE.OK);
        //const mockStub = new ChaincodeMockStub("MyMockStub", chaincode);
        // Your test code
    });
});