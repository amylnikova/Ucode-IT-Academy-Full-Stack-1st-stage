//Set
let coinCollection = new Set()
coinCollection.add('coin1')
coinCollection.add('coin2')
coinCollection.add('coin3')
coinCollection.add('coin4')
coinCollection.add('coin5')

coinCollection.add('coin6') //add element
console.log(coinCollection);
coinCollection.delete('coin1') //remove element
console.log(coinCollection);
console.log(coinCollection.size);  //check size
const iterator = coinCollection.entries() //iterate over set
for (const entry of iterator) {
    console.log(entry)
}
console.log(coinCollection.has ('coin1'));  //check if object with specified value exist in a set object or not
let setIter = coinCollection.values()  //returns a new Iterator object that contains the values for each element in the Set object in insertion order.
console.log(setIter.next().value);
console.log(setIter.next().value);
console.log(setIter.next().value);
console.log(setIter.next().value);
console.log(setIter.next().value);

coinCollection.clear()
console.log(coinCollection);


//Map
let menu = new Map()
menu.set('Burger', '15,99$')
menu.set('Taco', '9,99$')
menu.set('Pizza', '29,99$')
menu.set('Fries', '9,99$')
menu.set('Drink', '9,99$') //add element
console.log(menu);
menu.delete('Pizza') //remove element
console.log(menu.has('Pizza')); //check if an element with the specified key exists or not.
console.log(menu.size); //size
for( const entry of menu) { //iteration
    console.log(entry)
}
let mapIter = menu.values() //The values() method returns a new Iterator object that contains the values for each element in the Map object in insertion order.
console.log(mapIter.next().value);
console.log(mapIter.next().value);
console.log(mapIter.next().value);
console.log(mapIter.next().value);

let mapIter1 = menu.keys() //The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
console.log(mapIter1.next().value);
console.log(mapIter1.next().value);
console.log(mapIter1.next().value);
console.log(mapIter1.next().value);
console.log(menu.get('Burger')); //return value from provided key of object

menu.clear()
console.log(menu);

//WeakSet
let guestList = new WeakSet()
const name1 = {guest: 'name1'}
const name2 = {guest: 'name2'}
const name3 = {guest: 'name3'}
const name4 = {guest: 'name4'}
const name5 = {guest: 'name5'}
guestList.add(name1)
guestList.add(name2)
guestList.add(name3)
guestList.add(name4)
guestList.add(name5) //add element
console.log(guestList);
console.log(guestList.has(name1)); //check if an object exists in a WeakSet
guestList.delete(name1)
console.log(guestList); //remove element

//WeakMap
let bankVault = new WeakMap()
const depositBox1 = {credential: '123456789'}
const depositBox2 = {credential: '789456123'}
const depositBox3 = {credential: '123789456'}
const depositBox4 = {credential: '456123789'}
const depositBox5 = {credential: '456789123'}
bankVault.set(depositBox1,'lorem1')
bankVault.set(depositBox2,'lorem2')
bankVault.set(depositBox3,'lorem3')
bankVault.set(depositBox4,'lorem4')
bankVault.set(depositBox5,'lorem5') //add element
console.log(bankVault);
bankVault.delete(depositBox1) //remove element
console.log(bankVault);
console.log(bankVault.has(depositBox1)); //check if an object exists in a WeakMap
console.log(bankVault.get(depositBox2)); //return element from WM object
