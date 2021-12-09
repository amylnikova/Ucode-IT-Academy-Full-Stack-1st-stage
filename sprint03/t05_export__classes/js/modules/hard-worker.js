'use strict'
export default class HardWorker {
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

