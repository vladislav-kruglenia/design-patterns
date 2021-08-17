// import {observerClientCode} from "./Observer/index.observer";
const observerClientCode = require('./Observer/index.observer.ts');
const singletonClientCode = require('./Singleton/index.singleton');


class PatternsClientCode {
    observer(){
        observerClientCode()
    }

    singleton(){
        singletonClientCode()
    }
}

export const clientCode = new PatternsClientCode();

module.exports = {clientCode: new PatternsClientCode()};
