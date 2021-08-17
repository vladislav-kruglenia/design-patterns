// import {observerClientCode} from "./Observer/index.observer";
const observerClientCode = require('./Observer/index.observer.ts');


class PatternsClientCode {
    observer(){
        observerClientCode()
    }
}

export const clientCode = new PatternsClientCode();

module.exports = {clientCode: new PatternsClientCode()};
