function Car (model, petrolAmount, fuelConsumption) {
	this.model = model;
	this.petrolAmount =  petrolAmount;
	this.fuelConsumption = fuelConsumption;
	this.refillPetrol = function (liters) {
		this.petrolAmount =  this.petrolAmount + liters;
		console.log('Fill capacity is updated, current capacity is ' + this.petrolAmount);
	}
	this.jorney = function (){
		this.averageKilom = (this.petrolAmount / this.fuelConsumption)*100;
		console.log ('You can travel with this petrol ' + this.averageKilom);
	}
}

var car1 = new Car ('bmw', 30, 6);

