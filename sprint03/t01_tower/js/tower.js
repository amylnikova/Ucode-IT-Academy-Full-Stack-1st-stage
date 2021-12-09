'use strict'
class Building{
    hasElevator;
    arcCapacity;
    height;
    getFloorHeight() {
        return this.height / this.floors;
    }
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }
    toString() {
        return "";
    }
}
class Tower extends Building {
    constructor(floors, material, address) {
        super(floors, material, address);
    }
    toString(){
        return `Floors: ${this.floors}\nMatherials: ${this.material}\nAddress: ${this.address}\nElevator: ${this.hasElevator ? '+':'-'}\nArc reactor capacity: ${this.arcCapacity}\nHeigth: ${this.height}\nFloor heigth: ${this.getFloorHeight()}`;
    }
}


const starkTower = new Tower(93, 'Different', 'Manhattan, NY')
starkTower.hasElevator = true
starkTower.arcCapacity = 70
starkTower.height = 1130
console.log(starkTower.toString());