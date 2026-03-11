// importance of new and this keyword

function user(username,LoginCount,isLoggedin){
    this.username = username;
    this.LoginCount = LoginCount;
    this.isLoggedin = isLoggedin;
}

const userone = new user('Shahan',10,true)
console.log(userone);

const usertwo = new user('shayan', 20 , true);

console.log(usertwo);


function newUser(name,property,gmail){
    this.name = name;
    this.property = property;
    this.gmail = gmail;
}

const myuserone = new newUser('Shahan',1020,'shhan@gmail.com')
console.log(myuserone);
