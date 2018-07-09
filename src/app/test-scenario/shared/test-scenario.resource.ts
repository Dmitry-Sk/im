import { Injectable } from '@angular/core';
import {
  IResourceMethod,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestMethod
} from '@ngx-resource/core';

import { TestScenario } from '../../domain/entities/test-scenarios/test-scenario';
import { GetTestScenarioQuery } from '../../domain/queries/get-test-scenario.query';
import { environment } from './../../../environments/environment';
import { GetEntitiesPagedQuery } from './../../domain/queries/get-entities-paged.query';
import { EntityMetadataViewModel } from './../../domain/view-models/entity-metadata-view-model';
import { PaginatedResponseViewModel } from './../../domain/view-models/paginated-response-view-model';
import { SingleEntityResponseViewModel } from './../../domain/view-models/single-entity-response-view-model';
import { TestScenarioMetadataViewModel } from '../../domain/view-models/test-scenario-metadata-view-model';
import { CreateTestScenarioCommand } from '../../domain/commands/create-test-scenario.command';
import { UpdateTestScenarioCommand } from '../../domain/commands/update-test-scenario.command';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base
})
export class TestScenarioResource extends Resource {
  @ResourceAction({
    path: '/queries/SearchTestScenarios'
  })
  getList: IResourceMethod<
    GetEntitiesPagedQuery,
    PaginatedResponseViewModel<TestScenario>
  >;

  @ResourceAction({
    path: '/queries/GetTestScenario'
  })
  getOne: IResourceMethod<
    GetTestScenarioQuery,
    SingleEntityResponseViewModel<TestScenario, TestScenarioMetadataViewModel>
  >;

  @ResourceAction({
    path: '/commands/CreateTestScenario',
    method: ResourceRequestMethod.Post
  })
  create: IResourceMethod<CreateTestScenarioCommand, { Id: string }>;

  @ResourceAction({
    path: '/commands/UpdateTestScenario',
    method: ResourceRequestMethod.Post
  })
  update: IResourceMethod<UpdateTestScenarioCommand, any>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
