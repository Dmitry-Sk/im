export class Budget {
  Id: string = '';
  TotalPlanned: number = 0;
  TotalActual: number = 0;
  TotalForecast: number = 0;
  Variance: number = 0;
  LineItems: Array<LineItem> = [];
  CategoryStatistics: Array<CategoryStatistic> = [];
}

export class BudgetMetadata {
  CatalogItems: Array<CatalogItem> = [];
}

export class CatalogItem {
  Category: string = '';
  Description: string = '';
  Name: string = '';
  SKU: string = '';
  UnitPrice: number = 0;
}

export class CategoryStatistic {
  Name: string = '';
  TotalActual: number = 0;
  TotalForecast: number = 0;
  TotalPlanned: number = 0;
  Variance: number = 0;
}

export class NewLineItem {
  ProjectId: string = '';
  ProductId: string = '';
  Name: string = '';
  Description: string = '';
  Category: string = '';
  UnitPrice: number = 0;
  Discount: number = 0;
}

export class LineItem {
  Id: number = 0;
  SKU: string = '';
  Category: string = '';
  UnitPrice: number = 0;
  Discount: number = 0;
  Name: string = '';
  Description: string = '';
  DateNeeded = {};
  PlannedQuantity: number = 0;
  ForecastQuantity: number = 0;
  ActualQuantity: number = 0;
  PlannedTotal: number = 0;
  ActualTotal: number = 0;
  ForecastTotal: number = 0;
  Variance: number = 0;
  ProjectId?: string = '';
}
