/// Code your solution in this file!
function distanceFromHqInBlocks(pickuplocation) {
    const HqInBlocks = 42
    return Math.abs(pickuplocation-42)
}   

function distanceFromHqInFeet(pickuplocation) {
    const Blocks = distanceFromHqInBlocks(pickuplocation);
    return Blocks * 264;
}

function distanceTravelledInFeet(start, destination){
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if(distanceInFeet <= 400) {
    return 0;
    } else if (distanceInFeet <= 2000){
         return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
         return 25;
    } else {
         return 'cannot travel that far';
    }
}
