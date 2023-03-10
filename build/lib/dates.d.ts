export declare function DateStringMonthYear(date: Date): string;
export declare function basicFormat(date: Date): string;
interface DateRange {
    start: Date;
    end: Date;
}
export declare function dateRangeBuild(startDate: number, endDate: number): DateRange;
export declare function DateRangeToArray(start: Date, end: Date): Promise<unknown>;
export {};
