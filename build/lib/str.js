"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStrEn = void 0;
function isStrEn(str) {
    let alPhabets = 'abcdefghijklmnopqrstuvwxyz';
    let alPhabetsArr = alPhabets.split('');
    let capitalLetterAlPhabet = alPhabetsArr.map((x) => x.toUpperCase());
    let speacialChars = ['-', '.', '_', '/', ',', '<', '>', '"', ';', ':', ' '];
    const chars = [...alPhabetsArr, ...capitalLetterAlPhabet, ...speacialChars];
    // convert str to array
    const inputStr = str.split('');
    // initialize as true
    var isEn = true;
    for (let j = 0; j < inputStr.length; j++) {
        let validEn = false;
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] === inputStr[j]) {
                validEn = true;
            }
        }
        console.log(inputStr[j]);
        if (!validEn) {
            isEn = false;
            return isEn; // String is not English 
        }
    }
    return false;
}
exports.isStrEn = isStrEn;
