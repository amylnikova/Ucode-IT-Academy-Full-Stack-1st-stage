const myNumber = 18;
const myBigInt = 123456789123456789n;
const myString = "String";
const myBoolean = true;
const myNull = null;
let myUndefined;
const myObject = {
    name: "Name",
    age: 23
};
let id = Symbol("id");
function myFunction() {
    return "new function";
}
let all = "myNumber is " + typeof(myNumber) + "\n";
all += "myString is " + typeof(myString) + "\n";
all += "myBigInt is " + typeof(myBigInt) + "\n";
all += "myBoolean is " + typeof(myBoolean) + "\n";
all += "myNull is " + typeof(myNull) + "\n";
all += "myUndefined is " + typeof(myUndefined) + "\n";
all += "myObject is " + typeof(myObject) + "\n";
all += "id is " + typeof(id) + "\n";
all += "myFunction is " + typeof(myFunction) + "\n";

alert(all);