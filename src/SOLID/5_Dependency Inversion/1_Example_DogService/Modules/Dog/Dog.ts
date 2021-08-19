import {IOutput} from "../CliOutput/CliOutput.types";

class Dog{
    constructor(private output: IOutput){}

    bark(message: string){
        this.output.print(message)
    }
}

module.exports = {Dog};