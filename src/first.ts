
function logStudent(person: Student) {
    console.log(`firstName:${person.firstName}, lastName: ${person.lastName}`);
}

//学生类
export class Student {
    fullName: string = "";
    constructor(public firstName: string, public middleName: string, public lastName: string, public age: number = 0) {

    }
    showSelf(): void {
        console.log(`我叫${this.fullName}, 今年${this.age}岁了`);
        this.sleep();
    }
    protected sleep(): void {
        console.log('I am sleeping');
    }
    getFulleName(): string {
        return this.fullName;
    }

    
}

const liming = new Student("li", "ming", "yu", 12);
logStudent(liming);

