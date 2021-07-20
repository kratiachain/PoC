'use strict';

const StateList = require('../../king/stateList');
const State = require('./../../king/state');
const chai = require('chai');
chai.should();

describe('#State', () => {
    describe('#Smoke', () => {
        it('should work', async () => {
            let state = new State();
            console.log(state);
            state.should.haveOwnProperty('class');
        });
    });
    describe('#getClass', () => {
        it('should work', async () => {
            console.log('Class: ' + State.getClass());
        });
    });
    describe('#getSplitKey', () => {
        it('should work', async () => {
            let state = new State();
            console.log('SplitKey: ' + state.getSplitKey());
        });
    });
    describe('#getKey', () => {
        it('should work', async () => {
            let state = new State();
            console.log('Key: ' + state.getKey());
        });
    });
    describe('#serialize', () => {
        it('should work', async () => {
            let state = new State();
            console.log('Json: ' + state.serialize());
        });
    });
    describe('#deserialize', () => {
        it('should work', async () => {
            let state = new State();
            state = State.deserialize(state.serialize(), State);
            console.log('Object: ');
            console.log(state);
        });
        it('should not work', async () => {
            let state = new State();
            try {
                //Se pide deserealizar con la clase incorrecta
                state = State.deserialize(state.serialize(), StateList);
                console.log(state);
            } catch (error) {
                console.log(error);
            }
        });
    });
});
