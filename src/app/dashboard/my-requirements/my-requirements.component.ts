import { Component, OnInit } from '@angular/core';

import { ItemsList } from './../../core/common/items-list';
import { Requirement } from './../../domain/entities/requirements/requirement';
import { RequirementService } from './../../requirement/shared/requirement.service';

@Component({
  selector: 'app-my-requirements',
  templateUrl: './my-requirements.component.html',
  styleUrls: ['./my-requirements.component.scss']
})
export class MyRequirementsComponent extends ItemsList<Requirement>
  implements OnInit {
  constructor(private requirementService: RequirementService) {
    super(requirementService, 'NONE');
    this.sortFields = this.searchFields = ['Name', 'Description'];
  }

  ngOnInit() {
    this.loadItems(true);
  }
}
