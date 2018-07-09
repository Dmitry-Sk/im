export class GetArchivesPagedQuery {
  CurrentPage: number = 1;
  ItemsPerPage: number = 25;
  ColumnsSearch?: string = '';
  IncludeArchived: string = 'ArchivedOnly';
}
