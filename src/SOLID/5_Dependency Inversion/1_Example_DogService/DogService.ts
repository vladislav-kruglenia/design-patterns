const {CliOutput} = require('./Modules/CliOutput/CliOutput');
const {Dog} = require('./Modules/Dog/Dog');

export class DogService {
    createDog(){
        const output = new CliOutput();
        const dog = new Dog(output);
        dog.bark('гав');
    }
}

module.exports = {DogService};


