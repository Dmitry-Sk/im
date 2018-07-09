import { Injectable } from '@angular/core';
import {
  IResourceMethod,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestMethod
} from '@ngx-resource/core';

import { ChangeProjectManagerCommand } from '../../domain/commands/change-project-manager.command';
import { CreateProjectCommand } from '../../domain/commands/create-project.command';
import { UpdateProjectCommand } from '../../domain/commands/update-project.command';
import { Project } from '../../domain/entities/projects/project';
import { GetEntitiesPagedQuery } from '../../domain/queries/get-entities-paged.query';
import { environment } from './../../../environments/environment';
import { PaginatedResponseViewModel } from './../../domain/view-models/paginated-response-view-model';
import { ProjectMetadataViewModel } from './../../domain/view-models/project-metadata-view-model';
import { SingleEntityResponseViewModel } from './../../domain/view-models/single-entity-response-view-model';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base
})
export class ProjectResource extends Resource {
  @ResourceAction({
    path: '/queries/SearchProjects'
  })
  getList: IResourceMethod<
    GetEntitiesPagedQuery,
    PaginatedResponseViewModel<Project>
  >;

  @ResourceAction({
    path: '/queries/GetProject'
  })
  getOne: IResourceMethod<
    { ProjectId: string },
    SingleEntityResponseViewModel<Project, ProjectMetadataViewModel>
  >;

  @ResourceAction({
    path: '/commands/CreateProject',
    method: ResourceRequestMethod.Post
  })
  create: IResourceMethod<CreateProjectCommand, { Id: string }>;

  @ResourceAction({
    path: '/commands/UpdateProject',
    method: ResourceRequestMethod.Post
  })
  update: IResourceMethod<UpdateProjectCommand, any>;

  @ResourceAction({
    path: '/commands/ChangeProjectManager',
    method: ResourceRequestMethod.Post
  })
  changeProjectManager: IResourceMethod<ChangeProjectManagerCommand, any>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
