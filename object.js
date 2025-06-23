const mySymbol =Symbol ("key1")


const user ={
    name :"rafid",
    "full name":"rafid ahmed",
    age:20,
    [mySymbol] :"mykey1",
    location:"ctg",
    email:"rafid@gmail.com",
    isLoggedIn:false

}

console.log(user.email)
console.log(user["email"])
console.log(user["full name"])
console.log(user[mySymbol])


