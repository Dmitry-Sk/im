export interface PaginatedResponseViewModel<T> {
  CustomAttributes: Array<object>;
  Items: Array<T>;
  CurrentPage: number;
  ItemsPerPage: number;
  TotalItems: number;
  TotalPages: number;
}
