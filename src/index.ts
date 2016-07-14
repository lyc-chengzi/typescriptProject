import {Student} from './first';
import {Tools} from './third'
class Animal extends Student {
    constructor(public firstName: string, public middleName: string, public lastName: string, public age: number) {
        super(firstName, middleName, lastName, age);
    }
    log() {
        let cup = new Tools.Cup(this);
        console.log('cup s owner is '+ this.fullName);
    }
}