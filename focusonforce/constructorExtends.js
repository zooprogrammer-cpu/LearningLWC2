class User{
    constructor(){
      this.validUser = true; 
      
    };
    isUser(){
      return true; 
    }
  }
  
  class Employee extends User{
    isEmployee(){
      return true;
    }
  };
  
  let employee1 = new Employee();
  console.log(employee1);
  console.log(employee1.isUser());
  console.log(employee1.isEmployee());
  

//   Need to user super keyword in a child class constructor to use .this

//constructor with multiple parameters. Additional from child class
  class User3{
    constructor(user,email){
      this._user= user;
      this._email = email;
    }
  };
  
  class Employee3 extends User3{
    constructor(user,email,id){
      super(user,email);
      this.employeeId = id;
    }
  };
  
  let employ1 = new Employee3('team_lead','team@cosmic.com',345);
  console.log(employ1);