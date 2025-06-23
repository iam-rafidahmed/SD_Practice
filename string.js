const name ="rafid"
const repo=50

console.log(`hello my name is ${name} and my repo is ${repo}`); //modern type [String interpolation ]


const NewName = new String ('rafidahmed')
console.log (NewName) //[String: 'rafidahmed']

console.log(NewName.length); //10

console.log(NewName.charAt(5)); //a -->it's in 5th position

const newString = NewName.substring(0,5)
console.log(newString); //rafid


const AnotherString = NewName.slice(-10,6)
console.log(AnotherString); //rafida

const newstrone= "      forhad alam     "

console.log(newstrone);
console.log(newstrone.trim()); //to avoid space