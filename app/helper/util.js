const moment = require('moment');
const {isValidPatternInput, isEmptyOrNull, isString} = require('./validate');

function parseInput(input) {
    const [typeCustomer, dates] = input.split(':');
    const listDatesString = dates.trim().split(', ');
    return {
        typeCustomer,
        dates: listDatesString.map(date => {
                const mDate = moment(date, 'DDMMMYYYY(ddd)');
                return {date: mDate, weekDay: mDate.weekday()}
            }
        )
    }
}

function isInValidInput(input) {
    if (isEmptyOrNull(input)) return 'Não foi informado um valor de entrada válida';

    if (!isString(input)) return 'Tipo de Entrada não é uma string';

    if (!isValidPatternInput(input)) return 'O padrão informado não é válido';

    return false;
}

module.exports = {
    parseInput,
    isInValidInput
}