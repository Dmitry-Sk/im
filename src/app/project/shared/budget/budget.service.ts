import { Injectable } from '@angular/core';

import { ModelPropertiesMapper } from '../../../core/model-properties-mapper';
import {
  Budget,
  BudgetMetadata,
  LineItem,
  CategoryStatistic,
  NewLineItem
} from '../../../domain/view-models/budget/budget';
import { SingleEntityResponseViewModel } from '../../../domain/view-models/single-entity-response-view-model';
import { BudgetResource } from './budget.resource';

@Injectable()
export class BudgetService {
  constructor(private budgetResource: BudgetResource) {}

  async getList(
    projectId
  ): Promise<SingleEntityResponseViewModel<Budget, BudgetMetadata>> {
    let responseViewModel: SingleEntityResponseViewModel<
      Budget,
      BudgetMetadata
    >;
    try {
      responseViewModel = await this.budgetResource.getList(projectId);
    } catch (error) {
      return;
    }

    responseViewModel.ViewModel = responseViewModel.ViewModel || new Budget();

    responseViewModel.ViewModel = new ModelPropertiesMapper<Budget>(
      Budget
    ).mapOne(responseViewModel.ViewModel);

    responseViewModel.ViewModel.LineItems = new ModelPropertiesMapper<LineItem>(
      LineItem
    ).mapMany(responseViewModel.ViewModel.LineItems);

    responseViewModel.ViewModel.CategoryStatistics = new ModelPropertiesMapper<
      CategoryStatistic
    >(CategoryStatistic).mapMany(
      responseViewModel.ViewModel.CategoryStatistics
    );

    responseViewModel.Metadata = new ModelPropertiesMapper<BudgetMetadata>(
      BudgetMetadata
    ).mapOne(responseViewModel.Metadata);

    return responseViewModel;
  }

  async addLineItem(data: NewLineItem): Promise<object> {
    let result;
    try {
      result = await this.budgetResource.addLineItem(data);
    } catch (error) {}
    return result;
  }

  async updateLineItem(data: LineItem): Promise<object> {
    let result;
    try {
      result = await this.budgetResource.updateLineItem(data);
    } catch (error) {
      return;
    }
    return result;
  }

  async removeLineItem(data): Promise<object> {
    let result;
    try {
      result = await this.budgetResource.removeLineItem(data);
    } catch (error) {
      return;
    }
    return result;
  }
}
