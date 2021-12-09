let regExp = /^[a-z а-я]*$/i
let firstName = prompt ('Enter first name');
let lastName = prompt ('Enter last name');
if (firstName && regExp.test(firstName) && lastName && regExp.test(lastName)) {
    let trueFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    let trueLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    console.log(`Hello, ${trueFirstName}  ${trueLastName}!`)
    alert(`Hello, ${trueFirstName} ${trueLastName}!`)
}else{
    console.log('Wrong input!')
    alert('Wrong input!')
}



