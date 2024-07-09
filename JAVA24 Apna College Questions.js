let Data="Lorem ipsum nimis nulla ea odit."
class user{
  constructor(name,email) {
    this.name=name;
    this.email=email
  }
    viewData(){
console.log('Website Data=',Data);

    }
}
userobj1=new user("Sunami","sunami@gmail.com")
// console.log(userobj1);
// console.log(userobj1.viewData());

class admin extends user{
    constructor(name,email) {
        super(name,email)

    }
    editData(){
        Data="New Data"
    }
}
adminobj=new admin("Pooja","pooja@gmail.com")
// console.log(adminobj);
// console.log(userobj1.viewData());
// console.log(adminobj.editData());

