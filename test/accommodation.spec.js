const chai = require('chai');
const Accommodation = require('../app/controller/accommodation');
const Hotel = require('../app/controller/hotel');

chai.should();

let hotel = new Hotel('Teste Hotel', 2);
let accommodation = null;

hotel.priceWeekRegularCustomer = 15;

describe('Valida calculos na classe acomodação', function () {
    beforeEach(function () {
        accommodation = new Accommodation(hotel, 'Regular', [{weekDay: 4}, {weekDay: 5}]);
    });
    it('Valida o custo total', function () {
       accommodation.totalCost.should.equal(30);
    });
    it('Valida o nome do hotel', function () {
        accommodation.nameHotel.should.equal('Teste Hotel');
    });
    it('Valida a classificação do hotel', function () {
        accommodation.ratingHotel.should.equal(2);
    });
});