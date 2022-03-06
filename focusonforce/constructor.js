class MeetingRoom{
    constructor(available){
      if (available){
        this.reservable = true
      } else{
        this.reservable = false
      }
    }
  }
  
  let boardRoom = new MeetingRoom(true)
  console.log(boardRoom)


  //constuctor with .this
  class User{
    constructor(user,email){
      this._userd = user;
      this._emaild = email; 
    }
  }
  let user1= new User(`Team Lead`, `teamlead@gmail.com`)
  let user2 = new User(`Supervisor`,`supervisor@gmail.com`)
  console.log(user1)
  console.log(user2)
  console.log(user2._userd) //prints 'Supervisor'

  //class that provides method

  class UserNew{
    constructor(fName, lName){
      this.firstName = fName; 
      this.lastName = lName; 
    }
    fullName(){
      return this.firstName + ` ` + this.lastName
    }
  };
  
  let user4 = new UserNew(`Sarah`,'James'); 
  console.log(user4.fullName())//prints Sarah James
  console.log(user4) 


  //getters and setters in constructors

class MeetingRoom2{
  constructor(capacity){
    this.capacity = capacity; 
    this.canReserve = false; 
  };
  set reservable(val){
    this.canReserve = val; 
  };
  get reservable(){
    return this.canReserve; 
  }
};

let boardRoom2 = new MeetingRoom2(20); 
boardRoom.reservable = true; 
console.log(boardRoom2.reservable)

console.log(boardRoom2)

//Static Method on a class- to check if an object is an instance of a class
class AnotherUser{
    constructor(fName,lName){
      this.firstName = fName; 
      this.lastName = lName; 
    }
    fullName(){
      return this.firstName + ' '+ this.lastName;
    };
    static isUser(obj){
      return obj instanceof AnotherUser;
    };
  }
  
  let user5=new AnotherUser('Michael','Chin');
  //The static method 'isUser' is used to check if an 
  //object is an instance of the 'User' class.'
  
  console.log(AnotherUser.isUser(user5)); //prints true
  console.log(user5.fullName()) //prints Michael Chin