"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicFormat = exports.DateStringMonthYear = void 0;
const moment_1 = __importDefault(require("moment"));
// Date String Like (3 Feb, 2023)
function DateStringMonthYear(date) {
    if (date === null || date === undefined)
        return '';
    const format = String((0, moment_1.default)(date).format('ll')).split(',');
    const _ = format[0].split(' ');
    return `${_[1]} ${_[0]}, ${format[1]}`;
}
exports.DateStringMonthYear = DateStringMonthYear;
// Basic Date Format like (03/02/2023)
function basicFormat(date) {
    if (date === null || date === undefined)
        return '';
    const _ = String((0, moment_1.default)(date).format('L')).split('/');
    return `${_[1]}/${_[0]}/${_[2]}`;
}
exports.basicFormat = basicFormat;
