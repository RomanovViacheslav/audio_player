export interface Symbols {
    [key: string]: string
}

export interface ResponseSymbols {
  success: boolean;
  symbols: Symbols[];
}
