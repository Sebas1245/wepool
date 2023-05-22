/**
 * Added enums in separte file to avoid Reference error of 'enum' not defined
 * References:
 * https://stackoverflow.com/questions/47418124/enum-type-not-defined-at-runtime
 * https://lukasbehal.com/2017-05-22-enums-in-declaration-files/
 * https://stackoverflow.com/questions/38553097/how-to-import-an-enum * 
 * https://github.com/Microsoft/TypeScript/issues/14975
 **/

/**
 * Typescript enums autom starts at 0:
 * Open = 0, 
 * Closed = 1,
*/
export const enum RideStatus {
    OPEN = "OPEN", 
    CLOSED = "CLOSED",
}

export enum StartingPoint {
    DRIVER = "DRIVER", 
    COMPANY = "COMPANY",
}