function unitConversion(input) {
    switch (input) {
        case 1:
            let feet1 = 10
            let inches1 = 12
            let feetToinch = feet1 * inches1
            console.log(feetToinch + ' inches')
            break;
        case 2:
            let feet2 = 12
            let inches2 = 67
            let inchToFeet = inches2 / feet2
            console.log(inchToFeet + ' ft')
            break;
        case 3:
            let feet3 = 20
            let meter1 = 0.30
            let feetToMeter = feet3 * meter1
            console.log(feetToMeter + ' meters')
            break;
        case 4:
            let meter2 = 30
            let feet4 = 3.28
            let meterToFeet = meter2 * feet4
            console.log(meterToFeet + ' ft')
            break;
        default:
            console.log('Enter Valid Input....')
    }
}
var input = 3
unitConversion(input)