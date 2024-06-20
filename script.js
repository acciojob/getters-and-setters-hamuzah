
 //complete this code
class Person {
	constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //getter
    get name(){
        return this._name;
    }
    //setter
    set age(age){
        this._age=age;
    }
}

class Student extends Person {
    constructor(name,age,school){
        super(name,age);
        this.school=school;
    }
    study = ()=>{
        console.log(`${this.name} is studying`)
    }
}

class Teacher extends Person {
       constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
       }
       teach = ()=>{
           console.log(`${this.name} is teaching `)
       }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
