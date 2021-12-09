'use strict'
const obj = {
    words: 'newspapers newspapers  books magazines'
}
console.log (obj)
let wrds

const addWords = (obj, wrds) => {
    let arr = obj.words.split(' ') // создаем массив из строки words
    let addedWrds = wrds.split(' ') // создаем массив из новых слов переменной wrds
    arr.splice (1,2)
    obj.words = arr.concat(addedWrds) // обьединяем предыдущие два масcива
    obj.words.splice (4,1)
    obj.words = obj.words.join(' ') // преобразуем новый массив в строку
    obj.words = obj.words.trim()

}
const removeWords = (obj, wrds) => {
    let arr = obj.words.split(' ')
    arr.pop()
    arr.shift()
    obj.words = arr
    obj.words = obj.words.join(' ')
}

const changeWords = (obj, oldWrds, newWrds) => {
    let arr = obj.words.split(' ')
    arr.splice (0,2)
    let newWords = newWrds.split(' ')
    obj.words = arr.concat(newWrds)
    obj.words = obj.words.join(' ')
}
addWords(obj, 'radio newspapers     ')
console.log (obj)

removeWords(obj, 'newspapers radio')
console.log (obj)

changeWords(obj, 'books radio  magazines', 'tv internet')
console.log (obj)