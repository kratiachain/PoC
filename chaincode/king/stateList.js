'use strict';

const State = require('./state.js');

class StateList {
    constructor(stub, listName, stateClass) {
        this.stub = stub;
        if (listName === '') {
            this.name = stateClass.name;
        } else {
            this.name = listName;
        }
        this.supportedClass = stateClass;
    }

    // //ABMC
    async save(state) {
        let key = this.stub.createCompositeKey(this.name, state.getSplitKey());
        let data = state.serialize();
        await this.stub.putState(key, data);
    }

    async getByKey(keyParts) {
        let ledgerKey = this.stub.createCompositeKey(this.name, keyParts);
        let data = await this.stub.getState(ledgerKey);
        if (data && data.toString('utf8')) {
            let state = State.deserialize(data, this.supportedClass);
            return state;
        } else {
            return null;
        }
    }

    // async getAll() {
    //     const allResults = [];
    //     // range query with empty string for startKey and endKey does an open-ended query of all assets in the chaincode namespace.
    //     const iterator = await ctx.stub.getStateByRange('', '');
    //     let result = await iterator.next();
    //     while (!result.done) {
    //         const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
    //         let record;
    //         try {
    //             record = JSON.parse(strValue);
    //         } catch (err) {
    //             console.log(err);
    //             record = strValue;
    //         }
    //         allResults.push({ Key: result.value.key, Record: record });
    //         result = await iterator.next();
    //     }
    //     return JSON.stringify(allResults);
    // }

    // async remove(key) {
    //     return await this.ctx.stub.remove(key);
    // }
}

module.exports = StateList;