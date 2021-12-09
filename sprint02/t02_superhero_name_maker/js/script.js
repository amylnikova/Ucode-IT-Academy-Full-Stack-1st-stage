"use strict"
let regExpName = /^[A-Z a-z]{1,20}$/i;
let regExpGender = /^ male|female|$/i;
let regExpBlanc = /^$/;
let regExpAge = /^[1-9][0-9]{1,5}$/;
let animalName;
let heroGender;
let heroAge;


animalName = prompt ('What animal is the superhero most similar to?');
if(regExpName.test(animalName)) {
    heroGender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
    if (regExpGender.test(heroGender)||regExpBlanc.test(regExpGender)) {
        heroAge = prompt("How old is the superhero?");
    }else {
        alert('Invalid input')
    }
}else  {
    alert('Invalid input')
}
if (/^male$/i.test(heroGender) && heroAge < 18 && heroAge > 0) {
    let description = "boy";
    alert(`The superhero name is: ${animalName}-${description}`);
}else if(/^male$/i.test(heroGender) && heroAge >= 18) {
    let description = "man"
    alert(`The superhero name is: ${animalName}-${description}`);
}else if(/^female$/i.test(heroGender) && heroAge < 18 && heroAge > 0) {
    let description = 'girl';
    alert(`The superhero name is: ${animalName}-${description}`);
}else if (/^female$/i.test(heroGender) && heroAge >= 18) {
    let description = 'woman';
    alert(`The superhero name is: ${animalName}-${description}`);
}else if (heroGender === '' && heroAge < 18 && heroAge > 0) {
    let description = 'kid';
    alert(`The superhero name is: ${animalName}-${description}`);
}else if (heroGender === '' && heroAge >= 18) {
    let description = 'hero';
    alert(`The superhero name is: ${animalName}-${description}`);
} else {
    alert('Invalid input');
}

