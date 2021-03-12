class Accommodation {
    _dates = [];
    _hotel = null;
    _profileCustomer = '';
    _totalCost = 0;

    constructor(hotel, profileCustomer, dates) {
        this._dates = dates;
        this._hotel = hotel;
        this._profileCustomer = profileCustomer;
        this._calculateCost();
    }

    _calculateCost() {
        for (const date of this._dates) {
            this._totalCost += this._valueDay(date.weekDay);
        }
    }

    _locationInWeek(weekday) {
        if (weekday >= 1 && weekday <= 5) {
            return 'Week';
        }
        return  'WeekEnd';
    }

    _typeCustomer() {
        return this._profileCustomer === 'Fidelidade' ? 'Fidelity' : 'Regular';
    }

    _valueDay(weekday) {
        const typeWeek = this._locationInWeek(weekday);
        const customerType = this._typeCustomer();
        return this._hotel[`price${typeWeek}${customerType}Customer`];
    }

    get totalCost() {
        return this._totalCost;
    }

    get ratingHotel() {
        return this._hotel.rating;
    }

    get nameHotel() {
        return this._hotel.name;
    }

}

module.exports = Accommodation;