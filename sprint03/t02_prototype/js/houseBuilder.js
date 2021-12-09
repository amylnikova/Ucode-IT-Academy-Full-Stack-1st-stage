const houseBlueprint = {
    address: null,
    date: null,
    description: null,
    owner: null,
    size: null,
    _building_speed: 0.5,
    getDaysToBuild: function() {
        return this.size / this._building_speed
    }
}

function houseBuilder(address, description, owner, size, roomCount){
    this.address = address
    this.date = new Date()
    this.description = description
    this.owner = owner
    this.size = size
    this.roomCount = roomCount
    this.__proto__ = houseBlueprint
}
const house = new houseBuilder('88 Crescent Avenue', 'Spacious town house with wood flooring, 2-car garage and a back patio.', 'J. Smith', 110, 5)
console.log(house.address);
console.log(house.description)
console.log(house.size);
console.log(house.date.toDateString());
console.log(house.owner);
console.log(house._building_speed);
console.log(house.getDaysToBuild());
console.log(house.roomCount);