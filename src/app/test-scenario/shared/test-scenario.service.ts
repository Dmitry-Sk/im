import { Injectable } from '@angular/core';
import { List } from 'linqts';

import { CreateTestScenarioCommand } from '../../domain/commands/create-test-scenario.command';
import { UpdateTestScenarioCommand } from '../../domain/commands/update-test-scenario.command';
import { TestScenario } from '../../domain/entities/test-scenarios/test-scenario';
import { GetTestScenarioQuery } from '../../domain/queries/get-test-scenario.query';
import { ModelPropertiesMapper } from './../../core/model-properties-mapper';
import { GetEntitiesPagedQuery } from './../../domain/queries/get-entities-paged.query';
import { Group } from './../../domain/view-models/admin/group';
import { PaginatedResponseViewModel } from './../../domain/view-models/paginated-response-view-model';
import { SingleEntityResponseViewModel } from './../../domain/view-models/single-entity-response-view-model';
import { TestScenarioMetadataViewModel } from './../../domain/view-models/test-scenario-metadata-view-model';
import { TestScenarioResource } from './test-scenario.resource';

@Injectable()
export class TestScenarioService {
  constructor(private resource: TestScenarioResource) {}

  async getList(query: GetEntitiesPagedQuery) {
    let pagedResponse: PaginatedResponseViewModel<TestScenario>;

    try {
      pagedResponse = await this.resource.getList(query);
    } catch (error) {
      return;
    }

    pagedResponse.Items = new ModelPropertiesMapper<TestScenario>(
      TestScenario
    ).mapMany(pagedResponse.Items);

    return pagedResponse;
  }

  async getOne(query: GetTestScenarioQuery) {
    let responseViewModel: SingleEntityResponseViewModel<
      TestScenario,
      TestScenarioMetadataViewModel
    >;

    try {
      responseViewModel = await this.resource.getOne(query);
    } catch (error) {
      return;
    }

    responseViewModel.ViewModel =
      responseViewModel.ViewModel || new TestScenario();

    responseViewModel.ViewModel = new ModelPropertiesMapper<TestScenario>(
      TestScenario
    ).mapOne(responseViewModel.ViewModel);

    responseViewModel.Metadata = new ModelPropertiesMapper<
      TestScenarioMetadataViewModel
    >(TestScenarioMetadataViewModel).mapOne(responseViewModel.Metadata);

    let metadataDependenciesList = new List<any>(
      responseViewModel.Metadata.Dependencies
    );

    responseViewModel.ViewModel.Dependencies = metadataDependenciesList
      .Where(
        x =>
          responseViewModel.ViewModel.Dependencies.indexOf(
            x.Id.split('/')[1]
          ) !== -1
      )
      .ToArray();

    return responseViewModel;
  }

  async create(testScenario: TestScenario) {
    let command: CreateTestScenarioCommand = new CreateTestScenarioCommand();
    command.Name = testScenario.Name;
    command.Description = testScenario.Description;
    command.Owner = testScenario.Owner.UserId;
    command.Group = (testScenario.Group as Group).Name;
    command.Dependencies = testScenario.Dependencies;
    command.Sequence = testScenario.Sequence;
    command.ProjectId = testScenario.ProjectId;

    let result;

    try {
      result = await this.resource.create(command);
    } catch (error) {
      return null;
    }

    return result;
  }

  async update(testScenario: TestScenario) {
    let command: UpdateTestScenarioCommand = new UpdateTestScenarioCommand();
    command.Name = testScenario.Name;
    command.Description = testScenario.Description;
    command.Owner = testScenario.Owner.UserId;
    command.Group = testScenario.Group as string;
    command.Dependencies = testScenario.Dependencies;
    command.Sequence = testScenario.Sequence;
    command.ProjectId = testScenario.ProjectId;
    command.TestScenarioId = testScenario.Id;
    // command.ReviewOption = 'None';

    let result;

    try {
      result = await this.resource.update(command);
    } catch (error) {
      return null;
    }

    return result;
  }
}
