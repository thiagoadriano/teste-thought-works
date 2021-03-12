'use strict'

const chai = require('chai');
const main = require('../app/main');
const expect = chai.expect;


describe('Teste de geral chamada principal:', function () {
    it('Teste com o valor: Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)', function () {
        expect(main('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)')).to.equal('Parque das flores');
    });

    it('Teste com o valor: Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)', function () {
        expect(main('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)')).to.equal('Jardim Botânico');
    });

    it('Teste com o valor: Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)', function () {
        expect(main('Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)')).to.equal('Mar Atlântico');
    });

    it('Teste com o valor: Fidelidade: 26Mar2020(thur)', function () {
        expect(main('Fidelidade: 26Mar2020(thur)')).to.equal('Parque das flores');
    });
})