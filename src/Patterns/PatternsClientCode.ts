import {PatternsClientCodeType} from "./PatternsClientCode.types";

const observerClientCode = require('./Observer/Observer.ts');
const singletonClientCode = require('./Singleton/index.singleton');


class PatternsClientCode implements PatternsClientCodeType{
    observer(){
        observerClientCode()
    }

    singleton(){
        singletonClientCode()
    }
}

export const clientCode = new PatternsClientCode();

module.exports = {clientCode: new PatternsClientCode()};

