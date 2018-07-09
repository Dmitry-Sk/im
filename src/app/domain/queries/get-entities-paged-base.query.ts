class SearchColumn {
  field: string = '';
  value: string = '';
  constructor(f, v) {
    this.field = f;
    this.value = v;
  }
}

export class GetEntitiesPagedQueryBase {
  CurrentPage: number = 1;
  ItemsPerPage: number = 12;
  ColumnsSearch?: string = '';

  private permanentSearchColumns: Array<SearchColumn> = [];

  resetSearchColumns() {
    this.ColumnsSearch = '';

    this.permanentSearchColumns.forEach(searchColumn =>
      this.addSearchColumn(searchColumn.field, searchColumn.value)
    );
  }

  addSearchColumn(
    columnName: string,
    searchTerm: string,
    permanent: boolean = false
  ) {
    if (this.ColumnsSearch.indexOf(columnName) === -1)
      this.ColumnsSearch += columnName + ':' + searchTerm + ';';
    if (permanent)
      this.permanentSearchColumns.push(
        new SearchColumn(columnName, searchTerm)
      );
  }

  addSearchColumns(columns: Array<string>, searchTerm: string) {
    columns.forEach(column => this.addSearchColumn(column, searchTerm));
  }
}
