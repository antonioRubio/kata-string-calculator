exports.add = function (string) {
    function isNotEmptyString(string) {
        return !!(string);
    }

    function sumElementsInArray(firstString, accumulateString) {
        return parseInt(firstString) + parseInt(accumulateString);
    }
    var result = 0;

    if (isNotEmptyString(string)) {
        //noinspection JSValidateTypes
        var arrayStringNumbers = string.split(',');
        result = arrayStringNumbers.reduce(sumElementsInArray);
    }

    return result;
};