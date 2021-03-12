const chai = require('chai');
const {
    isValidPatternInput,
    isEmptyOrNull,
    isString
} = require('../app/helper/validate');
const expect = chai.expect;

describe('Teste de Validadores: Metodo > isEmptyOrNull', function () {
    it('Teste com o metodo isEmptyOrNull com a entrada correta: 16Mar2020(mon)', function () {
        expect(isEmptyOrNull('16Mar2020(mon)')).to.equal(false);
    });

    it('Teste com o metodo isEmptyOrNull com a entrada incorreta: ""', function () {
        expect(isEmptyOrNull('')).to.equal(true);
    });

    it('Teste com o metodo isEmptyOrNull com a entrada incorreta: null', function () {
        expect(isEmptyOrNull(null)).to.equal(true);
    });
});

describe('Teste de Validadores: Metodo > isString', function () {
    it('Teste com o metodo isString com a entrada correta: 16Mar2020(mon)', function () {
        expect(isString('16Mar2020(mon)')).to.equal(true);
    });

    it('Teste com o metodo isString com a entrada incorreta: 30', function () {
        expect(isString(30)).to.equal(false);
    });

    it('Teste com o metodo isString com a entrada incorreta: {}', function () {
        expect(isString({})).to.equal(false);
    });
});

describe('Teste de Validadores: Metodo > isValidPatternInput', function () {
    it('Teste com o metodo isValidPatternInput com a entrada correta: Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed) ', function () {
        expect(isValidPatternInput('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)')).to.equal(true);
    });

    it('Teste com o metodo isValidPatternInput com a entrada incorreta: fidelidade: 16Mar2020(mon) ', function () {
        expect(isValidPatternInput('fidelidade: 16Mar2020(mon)')).to.equal(false);
    });

    it('Teste com o metodo isValidPatternInput com a entrada incorreta: Cliente: 16Mar2020(mon)', function () {
        expect(isValidPatternInput('Cliente: 16Mar2020(mon)')).to.equal(false);
    });
});