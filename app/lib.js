
let functionsForTest = {};

functionsForTest.getANumber = () => {
    return 1;
}

functionsForTest.getAString = () => {
    return 'string';
}

functionsForTest.getJSON = () => {
    return "{\"field2\":\"val\",\"field3\":\"val2\"}";
}

module.exports = functionsForTest;