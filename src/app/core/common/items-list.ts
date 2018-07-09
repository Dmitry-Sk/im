import { GetEntitiesPagedQuery } from './../../domain/queries/get-entities-paged.query';
import { PaginatedResponseViewModel } from './../../domain/view-models/paginated-response-view-model';

export class ItemsList<T> {
  viewMode: string = 'grid';

  sortFields: Array<string> = [];

  searchFields: Array<string> = [];

  pagedQueryOptions: GetEntitiesPagedQuery = new GetEntitiesPagedQuery(
    this.sortFields[0],
    this.includeArchived
  );

  pagedResponse: PaginatedResponseViewModel<T> = null;

  loading: boolean = false;

  constructor(private service: any, private includeArchived: string = 'NONE') {}

  async loadItems(reset: boolean = false) {
    if (reset) this.pagedQueryOptions.CurrentPage = 1;

    this.loading = true;

    let response = await this.service.getList(this.pagedQueryOptions);

    if (!this.pagedResponse || reset) this.pagedResponse = response;
    else
      this.pagedResponse.Items = this.pagedResponse.Items.concat(
        response.Items
      );

    this.loading = false;
  }

  loadMoreItems() {
    if (!this.pagedResponse) return;
    if (this.pagedQueryOptions.CurrentPage === this.pagedResponse.TotalPages)
      return;
    this.pagedQueryOptions.CurrentPage++;
    this.loadItems();
  }

  onSortChanged(sort) {
    this.pagedQueryOptions.Sort = sort.sortField;
    this.pagedQueryOptions.SortDirection = sort.sortDirection;
    this.loadItems(true);
  }

  onSearchChanged(search) {
    //this.pagedQueryOptions.ColumnsSearch = '';
    this.pagedQueryOptions.resetSearchColumns();
    if (search.searchTerm) {
      if (search.searchField !== 'all') {
        this.pagedQueryOptions.addSearchColumn(
          search.searchField,
          search.searchTerm
        );
      } else {
        this.pagedQueryOptions.addSearchColumns(
          this.searchFields,
          search.searchTerm
        );
      }
    }
    this.loadItems(true);
  }
}
