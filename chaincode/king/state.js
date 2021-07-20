'use strict';

/**
 * State class
 */
//const StateList = require('./stateList.js');

class State {
    constructor() {
        //Atributos estaticos
        //Nombre de la clase, necesario para deserializar el objeto
        this.class = State.name;
        this.keyAtributes = ['class'];

        // Revisa que se haya declarado un array:
        if (this.keyAtributes.length === 0) {
            throw new Error('keyAtributes se encuentra vacio');
        }

        // Revisa que las key coinciden con atributos del objeto
        for (let key of this.keyAtributes) {
            if (this[key] === undefined) {
                throw new Error('keyAtributes no coinciden con los atributos del objeto');
            }
        }
    }

    //Metodos
    //Getters
    static getClass() {
        return this.class;
    }

    /**
     * Obtiene la lista de los valores de los atributos del objeto que son keyAtributes
     */
    getSplitKey() {
        let keyParts = [];
        for (let key of this.keyAtributes) {
            keyParts.push(this[key]);
        }
        return keyParts;
    }

    /**
     * Devuelve una key a partir de los atributos elegidos
     */
    getKey() {
        let keyParts = this.getSplitKey();
        //Junta todos lo atributos para formar una key
        return keyParts.map(part => part).join(':');
    }

    //Serializers
    serialize() {
        //Crea el json del estado eliminando los atributos inecesarios
        let clone = JSON.parse(JSON.stringify(this));
        delete clone.keyAtributes;
        return Buffer.from(JSON.stringify(clone));
    }

    static deserialize(data, supportedClass) {
        //Deserializar un estado si este es de la clase buscada
        let json = JSON.parse(data.toString());
        // let objClass = supportedClasses[json.class];
        if (json.class !== supportedClass.name) {
            throw new Error(`La clase soportada ${supportedClass.name} no coincide con 
            la clase ${json.class} del objeto a deserializar`);
        }
        let object = new (supportedClass)(json);
        return object;
    }

}

module.exports = State;
