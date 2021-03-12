class Hotel {
    _name = '';
    _rating = 0;
    _priceWeek = {
        regularCustomer: 0,
        fidelityCustomer: 0
    };
    _priceWeekEnd = {
        regularCustomer: 0,
        fidelityCustomer: 0
    };

    constructor(name, rating) {
        this._name = name;
        this._rating = rating;
    }

    set priceWeekRegularCustomer(value) {
        this._priceWeek.regularCustomer = value;
    }

    set priceWeekFidelityCustomer(value) {
        this._priceWeek.fidelityCustomer = value;
    }

    set priceWeekEndRegularCustomer(value) {
        this._priceWeekEnd.regularCustomer = value;
    }

    set priceWeekEndFidelityCustomer(value) {
        this._priceWeekEnd.fidelityCustomer = value;
    }

    get rating() {
        return this._rating;
    }

    get name() {
        return this._name;
    }

    get priceWeekRegularCustomer() {
        return this._priceWeek.regularCustomer;
    }

    get priceWeekFidelityCustomer() {
       return this._priceWeek.fidelityCustomer;
    }

    get priceWeekEndRegularCustomer() {
       return this._priceWeekEnd.regularCustomer;
    }

    get priceWeekEndFidelityCustomer() {
        return this._priceWeekEnd.fidelityCustomer;
    }
}

module.exports = Hotel;