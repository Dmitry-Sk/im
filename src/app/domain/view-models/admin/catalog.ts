export interface CatalogList {
  Catalog: Catalog[];
}

export class Catalog {
  Category: string = '';
  Description: string = '';
  Name: string = '';
  SKU: string = '';
  UnitPrice: number = 0;
}
