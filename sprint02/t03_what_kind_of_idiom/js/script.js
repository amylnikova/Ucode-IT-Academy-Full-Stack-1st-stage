"use strict"
let myNumber, myIdiom;

do {
    myNumber = prompt('Enter a number from 1 to 10');
}while (myNumber < 1 || myNumber > 10)
// for (myNumber);
switch (myNumber) {
    case "1":
        myIdiom = 'Back to square 1';
        alert(myIdiom);
        break;
    case "2":
        myIdiom = 'Goody 2-shoes';
        alert(myIdiom);
        break;
    case "3":
        myIdiom = 'Two\'s company, three\'s a crowd';
        alert(myIdiom);
        break;
    case "4":
        myIdiom = 'Counting sheep';
        alert(myIdiom);
        break;
    case "5":
        myIdiom = 'Take five';
        alert(myIdiom);
        break;
    case "6":
        myIdiom = 'Two\'s company, three\'s a crowd';
        alert(myIdiom);
        break;
    case "7":
        myIdiom = 'Seventh heaven';
        alert(myIdiom);
        break;
    case "8":
        myIdiom = 'Behind the eight-ball';
        alert(myIdiom);
        break;
    case "9":
        myIdiom = 'Counting sheep';
        alert(myIdiom);
        break;
    case "10":
        myIdiom = 'Cheaper by the dozen';
        alert(myIdiom);
        break;
}

