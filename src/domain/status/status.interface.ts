export interface IBOV {
  ibov_index?: string;
}
export interface IResult {
  result: IBOV[];
  next: boolean;
}
