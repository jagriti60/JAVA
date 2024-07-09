// console.log('Objects');
// const student = {
//     name: "Jaggu",
//     marks: 96,
//     prtMarks: function () {
//         console.log('marks=', this.marks);  //student.marks
//     }
// }

// console.log('Prototype');
// const animal = {
//     sleeps() {
//         console.log('sleeping...');
//     },
//         eats() {
//         console.log('Eating...');
//     }
// }
// const rabbit = {
//     color: "white",
//     speed: "fast",
//     lifetime() {
//         console.log('15yrs');
//     }
// }
// const kachua = {
//     color: "green",
//     speed: "slow",
//     lifetime() {
//         console.log('200yrs');
//     },
//     eats(){   //priority
// console.log('Kachua is Eating');

//     }
// }
// rabbit.__proto__ = animal;
// kachua.__proto__ = animal;


// console.log('Classes');
// class Employee{
//     constructor(tax) {
//         console.log('New Employee joined');
//         this.settax=tax
//     }
//     name(name){
//         this.name=name
//         console.log("name=",this.name);
        
//     }
// position(){
//     console.log("position=",this.position);
// }
// salary(sal){
//     this.salary=sal
//     console.log('salary=',this.salary);
// }
// settax(tax){
//     this.settax=tax //new property settax is created
//     //We can set this in constructor too...
// }
// }
// let Emp1=new Employee()//constructor is invoked
// Emp1.name("Jagriti")
// Emp1.settax(.10)
// Emp1.salary(1000000)
// let Emp2=new Employee()


// console.log('Constructor');
// class Employee{
//     constructor(tax,name) {
//         console.log('New Employee joined');
//         this.settax=tax
//         this.name=name
//     }
//     name1(){
//         console.log("name=",this.name);
//     }
// position(){
//     console.log("Manager");
// }
// }
// let Emp1=new Employee(0.1,"Jagriti")

console.log('Inheritance and Super Keyword');
class parent{
    
    constructor(edu){
        this.name="Kiran"
        this.edu=edu;
    }
    pa(){
        console.log('I am in parent function');
    }
    hello(){
        console.log('Hello parent');
        
    }
}
class child extends parent{
    constructor(age,edu){
        super(edu)   //super keyword
        this.years=age
    }
    ch(){
        super.pa()
        console.log('I am in child function');
    }
    //method overriding
    hello(){
        console.log('Hello child'); //priority
        
    }
}
obj=new child(24,"B.A.")