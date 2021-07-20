'use strict';

const State = require('./../../king/state');
const StateList = require('./../../king/stateList');
const { ChaincodeStub } = require('fabric-shim');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

describe('#StateList', () => {
    beforeEach(async() => {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        // this.stub.getState.withArgs('state').resolves(Buffer.from('{"value":"my asset 1001 value"}'));
    });
    describe('#Smoke', () => {
        it('should work', async () => {
            let stateList = new StateList(null, '', State);
            console.log(stateList);
            stateList = new StateList(null, 'algo', State);
            console.log(stateList);
            //Con stub
            stateList = new StateList(this.stub, '', State);
            console.log(stateList);
        });
    });
    describe('#Save', () => {
        it('should work', async () => {
            let stateList = new StateList(this.stub, '', State);
            console.log(stateList);

            let state = new State();
            console.log(state);

            await stateList.save(state);
            this.stub.putState.should.have.been.calledWithExactly(undefined, Buffer.from('{"class":"State"}'));
            this.stub.putState.should.have.been.called;
        });
    });

    describe('#getByKey', () => {
        it('should work', async () => {
            let stateList = new StateList(this.stub, '', State);
            console.log(stateList);

            let newState = await stateList.getByKey(['state', '']);
            console.log('data');
            console.log(newState);
        });
    });
});