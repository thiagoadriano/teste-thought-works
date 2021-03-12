const chai = require('chai');
const Hotel = require('../app/controller/hotel');
const defaultData = {
    name: 'Teste Hotel',
    rating: 2,
    priceRegularWeek: 35
};
chai.should();

let hotel = null;

describe('Valida a classe Hotel', function () {
    beforeEach(function() {
        hotel = new Hotel(defaultData.name, defaultData.rating);
        hotel.priceWeekRegularCustomer = defaultData.priceRegularWeek;
    })
    it(`Valida o nome: ${defaultData.name}`, function () {
        hotel.name.should.to.equal(defaultData.name);
    });
    it(`Valida a classificação: ${defaultData.rating}`, function () {
        hotel.rating.should.to.equal(defaultData.rating);
    });
    it(`Valida a preço da semana regular: ${defaultData.priceRegularWeek}`, function () {
        hotel.priceWeekRegularCustomer.should.to.equal(defaultData.priceRegularWeek);
    });
    it(`Valida a preço da semana fidelidade: 0 depois 15`, function () {
        hotel.priceWeekFidelityCustomer.should.to.equal(0);
        hotel.priceWeekFidelityCustomer = 15;
        hotel.priceWeekFidelityCustomer.should.to.equal(15);
    });
});