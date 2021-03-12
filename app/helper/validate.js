const PATTERN_INPUT = /^(Fidelidade|Regular):\s(\d{2}[A-Z]\w{2}\d{4}\(\w{3,4}\)(,\s)?)+$/;

function isValidPatternInput(input) {
    return PATTERN_INPUT.test(input);
}

function isEmptyOrNull(input) {
    return input === '' || input === null || input === undefined;
}

function isString(input) {
    return typeof input === 'string'
}


module.exports = {
    isValidPatternInput,
    isEmptyOrNull,
    isString
}