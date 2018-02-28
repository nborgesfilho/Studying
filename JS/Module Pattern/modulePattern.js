var House = (function() {

    var lampsOn = 0;
    var lampsOff = 10;

    var turnItOn = function(){
        if(lampsOff > 0){
            lampsOff--;
            lampsOn++;
        } else {
            console.error('No lamps to turn it on');
        }
    }

    var turnItOff = function(){
        if(lampsOn > 0){
            lampsOn--;
            lampsOff++;
        } else {
            console.error('No lamps to turn it off');
        }
    }

    var getNumberOfLampsOn = function(){
        return lampsOn;
    }

    return {
        turnItOn : turnItOn,
        turnItOff : turnItOff,
        getNumberOfLampsOn : getNumberOfLampsOn
    }

})();

House.turnItOff();
House.turnItOn();
console.log(House.getNumberOfLampsOn());