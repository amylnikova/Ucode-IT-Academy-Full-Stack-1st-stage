'use strict'
class HardWorker {
    set age(val){
        if (val >= 1 && val < 100) {
            this._age = val
        }
    }
    get age(){
        return this._age
    }
    set salary(val){
        if (val >= 100 && val < 10000){
            this._salary = val
        }
    }
    get salary(){
        return this._salary
    }
    toObject() {
        return {name: this.name, age: this.age, salary: this.salary}
    }
}

let worker = new HardWorker
worker.name = 'Bruce'
console.log(worker.name);

worker.age = 50
worker.salary = 1500
console.log(worker.toObject());

worker.name = 'Linda'
worker.age = 140
console.log(worker.toObject());


