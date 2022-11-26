// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(){
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(){
    return drivers.slice(-2)
}

const selectingDrivers = []
selectingDrivers.unshift(returnFirstTwoDrivers)
selectingDrivers.push(returnLastTwoDrivers)



function createFareMultiplier(x) {
    return function(Multiplier) {
        return Multiplier * x
    }
}

const fareDoubler = function (fare){
    return createFareMultiplier(2)(fare)
    }

const fareTripler = function (fare){
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers  = function(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}
