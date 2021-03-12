const chai = require('chai');
const {
    parseInput,
    isInValidInput
} = require('../app/helper/util');
chai.should();

describe('Teste do modulo util', function() {
   it('Verifica o metodo >> parseInput', function() {
       const result = parseInput('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)');
       result.typeCustomer.should.to.equal('Regular');
       result.dates.should.to.length(3);
   });
    it('Verifica a data parseada >> parseInput', function() {
        const result = parseInput('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)');
        result.dates[0].weekDay.should.to.equal(1);
    });
    it('Verifica o metodo passando inteiro >> isInValidInput', function() {
        isInValidInput(3).should.to.equal('Tipo de Entrada não é uma string');
    });
    it('Verifica o metodo passando parametro correto Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed) >> isInValidInput', function() {
        isInValidInput('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)').should.to.false;
    });
    it('Verifica o metodo passando parametro incorreto Regular: 16Mar2020 >> isInValidInput', function() {
        isInValidInput('Regular: 16Mar2020').should.to.equal('O padrão informado não é válido');
    });
});