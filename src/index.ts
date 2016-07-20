import {Student} from './first';
import {Tools} from './third'
class Animal extends Student {
    constructor(public firstName: string, public middleName: string, public lastName: string, public age: number) {
        super(firstName, middleName, lastName, age);
    }
    log() {
        var cup = new Tools.Cup(this);
        cup.log();
        console.log('cup s owner is '+ this.fullName);
    }
}

var animal = new Animal("f", 'm', 'liu', 26);
animal.showSelf();