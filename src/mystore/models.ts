export interface IAbbreviation {
    id: number;
    name: string;
    eng: string[];
    rus: string[];
  }
  
  export interface IQuery {
    query: string;
    contentSearch: boolean
    
  }
  export interface IQparams{
    limit: number
    offset: number
  }
  export interface ISearchOptions {
    abbreviationName: boolean;
    abbreviationContent: boolean
  }