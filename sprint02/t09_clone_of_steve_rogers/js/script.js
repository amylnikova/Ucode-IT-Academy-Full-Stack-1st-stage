// 'use strict'
const user = {
    name: 'Steve',
    surname: 'Rogers',
    age: 101,
    city:'New York'
}
console.log(user)
const cln = JSON.parse(JSON.stringify(user))
console.log(cln)
user.name = 'John'
console.log(user)
console.log(cln)
cln.age = 59
console.log(user)
console.log(cln)
