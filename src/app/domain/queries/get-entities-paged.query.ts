import { GetEntitiesPagedQueryBase } from './get-entities-paged-base.query';

export class GetEntitiesPagedQuery extends GetEntitiesPagedQueryBase {
  IncludeArchived?: string;
  Sort: string;
  SortDirection: string = 'Asc';

  constructor(sort: string = undefined, includeArchived: string = undefined) {
    super();
    if (includeArchived) this.IncludeArchived = includeArchived;
    if (sort) this.Sort = sort;
  }
}
