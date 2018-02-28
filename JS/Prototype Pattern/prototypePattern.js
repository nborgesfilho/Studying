var Car = function() {

    this.numberOfGears = 5;
    this.currentGear = 0;

}

Car.prototype.start = function(){
    if(this.started()){
        console.error('Car already started. ');
    } else {
        this.currentGear++;
    }
}

Car.prototype.started = function(){
    console.log(this.currentGear);
    return this.currentGear > 0;
}

Car.prototype.nextGear = function(){
    if(this.started()){
        this.currentGear++;
    }
}

c = new Car();
c.start();
c.nextGear();
c.started();