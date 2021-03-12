const hotels = require('../data/hotels.json');
const Hotel = require('./controller/hotel');
const Accommodation = require('./controller/accommodation');
const {parseInput, isInValidInput} = require('./helper/util');

function instantiateHotels() {
    const hotelsInit = [];
    for (const hotel of hotels) {
        const newHotel = new Hotel(hotel.name, hotel.rating);
        newHotel.priceWeekRegularCustomer = hotel.price.week.regularCustomer;
        newHotel.priceWeekFidelityCustomer = hotel.price.week.fidelityCustomer;
        newHotel.priceWeekEndRegularCustomer = hotel.price.weekEnd.regularCustomer;
        newHotel.priceWeekEndFidelityCustomer = hotel.price.weekEnd.fidelityCustomer;
        hotelsInit.push(newHotel);
    }
    return hotelsInit;
}

function choosedHotel(hotelsInstances, parsedInput) {
    let accommodationCurrent = null;
    for (const hotel of hotelsInstances) {
        const accommodationNext = new Accommodation(hotel, parsedInput.typeCustomer, parsedInput.dates);

        if (
            !accommodationCurrent ||
            accommodationCurrent.totalCost > accommodationNext.totalCost ||
            (
                accommodationCurrent.totalCost === accommodationNext.totalCost &&
                accommodationCurrent.ratingHotel < accommodationNext.ratingHotel
            )
        ) {
            accommodationCurrent = accommodationNext;
        }

    }

    return accommodationCurrent.nameHotel;
}

function Main(input) {
    const msgInvalidInput = isInValidInput(input);
    if (msgInvalidInput) return msgInvalidInput;

    const hotelsInstances = instantiateHotels();
    const parsedInput = parseInput(input);

    return choosedHotel(hotelsInstances, parsedInput);
}

module.exports = Main;

