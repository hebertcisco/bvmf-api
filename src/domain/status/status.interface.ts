export interface IBOV {
    ibov_index: string | any;
}
export interface IResult {
    result: IBOV[];
    next: boolean;
}