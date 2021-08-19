import {IOutput} from "./CliOutput.types";

class CliOutput implements IOutput{
    print(message: string){
        console.log(message);
    }
}

module.exports = {CliOutput};