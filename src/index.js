module.exports = function toReadable (number) {
let numArr = [["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"], ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"], ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]];
    if (number >= 0 && number <= 99) {
        return dd(number);
    }
    if (number >= 99 && number <= 999) {
        let n = +number.toString()[0];
        if (+number.toString()[2] != 0 && +number.toString()[1] != 0) {
            return dd(n) + ' hundred ' + dd(number.toString()[1] + number.toString()[2]);
        }
        if ((+number.toString()[1] == 0)) {
            return dd(n) + ' hundred ' + dd(number.toString()[2]);
        }
        if ((+number.toString()[2] == 0)) {
            return dd(n) + ' hundred ' + dd(number.toString()[1] + number.toString()[2]).replace(/zero/gi, '');
        }
    }
    function dd(num) {
        if (num >= 0 && num <= 9) {
            return numArr[0][num.toString()[0]];
        }
        if (num >= 10 && num <= 19) {
            return numArr[1][num.toString()[1]];
        }
        if (num >= 20 && num <= 29) {
            return numArr[2][0] + " " + numArr[0][num.toString()[1]];
        }
        if (num >= 30 && num <= 39) {
            return numArr[2][1] + " " + numArr[0][num.toString()[1]];
        }
        if (num >= 40 && num <= 49) {
            return numArr[2][2] + " " + numArr[0][num.toString()[1]];
        }
        if (num >= 50 && num <= 59) {
            return numArr[2][3] + " " + numArr[0][num.toString()[1]];
        }
        if (num >= 60 && num <= 69) {
            return numArr[2][4] + " " + numArr[0][num.toString()[1]];
        }
        if (num >= 70 && num <= 79) {
            return numArr[2][5] + " " + numArr[0][num.toString()[1]];
        }
        if (num >= 80 && num <= 89) {
            return numArr[2][6] + " " + numArr[0][num.toString()[1]];
        }
        if (num >= 90 && num <= 99) {
            return numArr[2][7] + " " + numArr[0][num.toString()[1]];
        }
    }
}
