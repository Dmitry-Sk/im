import { Component, OnInit } from '@angular/core';

import { TestScenario } from '../../domain/entities/test-scenarios/test-scenario';
import { ItemsList } from './../../core/common/items-list';
import { TestScenarioService } from './../../test-scenario/shared/test-scenario.service';

@Component({
  selector: 'app-my-test-scenarios',
  templateUrl: './my-test-scenarios.component.html',
  styleUrls: ['./my-test-scenarios.component.scss']
})
export class MyTestScenariosComponent extends ItemsList<TestScenario>
  implements OnInit {
  constructor(private testScenarioService: TestScenarioService) {
    super(testScenarioService);
    this.sortFields = this.searchFields = ['Name', 'Description'];
  }

  ngOnInit() {
    this.loadItems(true);
  }
}
