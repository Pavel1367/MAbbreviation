export interface ISearchOptions{
    abbreviationName: boolean,
    abbreviationConent: boolean
}
export interface IAbbreviationReq  {
        newSearchQuery: string | undefined,
        searchOptions:  ISearchOptions,
        limit: number,
        offset: number
}