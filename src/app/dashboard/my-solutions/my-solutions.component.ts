import { ItemsList } from './../../core/common/items-list';
import { Component, OnInit } from '@angular/core';

import { Solution } from '../../domain/entities/solutions/solution';
import { GetEntitiesPagedQuery } from './../../domain/queries/get-entities-paged.query';
import { GetSolutionQuery } from './../../domain/queries/get-solution.query';
import { PaginatedResponseViewModel } from './../../domain/view-models/paginated-response-view-model';
import { SolutionService } from './../../solution/shared/solution.service';

@Component({
  selector: 'app-my-solutions',
  templateUrl: './my-solutions.component.html',
  styleUrls: ['./my-solutions.component.scss']
})
export class MySolutionsComponent extends ItemsList<Solution>
  implements OnInit {
  constructor(private solutionService: SolutionService) {
    super(solutionService);
    this.sortFields = this.searchFields = ['Name', 'Description'];
  }

  ngOnInit() {
    this.loadItems(true);
  }
}
