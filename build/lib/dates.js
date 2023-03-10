"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangeToArray = exports.dateRangeBuild = exports.basicFormat = exports.DateStringMonthYear = void 0;
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
function dateRangeBuild(startDate, endDate) {
    const _d_start = new Date(startDate)
        .toLocaleDateString(`fr-CA`)
        .split("/")
        .join("-");
    const _d_end = new Date(endDate)
        .toLocaleDateString(`fr-CA`)
        .split("/")
        .join("-");
    return {
        start: new Date(`${_d_start}T00:00:00.00Z`),
        end: new Date(`${_d_end}T23:59:59.999Z`),
    };
}
exports.dateRangeBuild = dateRangeBuild;
// This Function is For Date Range Build
function DateRangeToArray(start, end) {
    return new Promise((resolve, reject) => {
        let dates = [];
        // loop two dates
        var a = (0, moment_1.default)(start);
        var b = (0, moment_1.default)(end);
        for (var m = (0, moment_1.default)(a); m.isBefore(b); m.add(1, 'days')) {
            dates.push(String(m.format('L')));
        }
        resolve({ dates });
    });
}
exports.DateRangeToArray = DateRangeToArray;
