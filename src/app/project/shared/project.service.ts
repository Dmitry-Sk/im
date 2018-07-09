import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { ModelPropertiesMapper } from '../../core/model-properties-mapper';
import { ChangeProjectManagerCommand } from '../../domain/commands/change-project-manager.command';
import { CreateProjectCommand } from '../../domain/commands/create-project.command';
import { GetEntitiesPagedQuery } from '../../domain/queries/get-entities-paged.query';
import { UpdateProjectCommand } from './../../domain/commands/update-project.command';
import { User } from './../../domain/entities/common/user';
import { Project } from './../../domain/entities/projects/project';
import { PaginatedResponseViewModel } from './../../domain/view-models/paginated-response-view-model';
import { ProjectMetadataViewModel } from './../../domain/view-models/project-metadata-view-model';
import { SingleEntityResponseViewModel } from './../../domain/view-models/single-entity-response-view-model';
import { ProjectResource } from './project.resource';

@Injectable()
export class ProjectService {
  constructor(private resource: ProjectResource) {}

  async getList(query: GetEntitiesPagedQuery) {
    let pagedResponse: PaginatedResponseViewModel<Project>;

    try {
      pagedResponse = await this.resource.getList(query);
    } catch (error) {
      return;
    }

    pagedResponse.Items = new ModelPropertiesMapper<Project>(Project).mapMany(
      pagedResponse.Items
    );

    return pagedResponse;
  }

  async getOne(id: string) {
    let responseViewModel: SingleEntityResponseViewModel<
      Project,
      ProjectMetadataViewModel
    >;

    try {
      responseViewModel = await this.resource.getOne({ ProjectId: id });
    } catch (error) {
      return;
    }

    responseViewModel.ViewModel = responseViewModel.ViewModel || new Project();

    responseViewModel.ViewModel = new ModelPropertiesMapper<Project>(
      Project
    ).mapOne(responseViewModel.ViewModel);

    responseViewModel.ViewModel.StartDate = moment(
      responseViewModel.ViewModel.StartDate
    ).toDate();

    responseViewModel.Metadata = new ModelPropertiesMapper<
      ProjectMetadataViewModel
    >(ProjectMetadataViewModel).mapOne(responseViewModel.Metadata);

    return responseViewModel;
  }

  async create(project: Project) {
    let command: CreateProjectCommand = new CreateProjectCommand();
    command.Name = project.Name;
    command.Description = project.Description;
    command.ProjectType = project.ProjectType;
    command.ProjectManager = project.ProjectManager.UserId;
    command.StartDate = moment(project.StartDate).format('YYYY-MM-DD');

    let result;

    try {
      result = await this.resource.create(command);
    } catch (error) {
      return null;
    }

    return result;
  }

  async update(project: Project) {
    let command: UpdateProjectCommand = new UpdateProjectCommand();
    command.ProjectId = project.Id;
    command.Name = project.Name;
    command.Description = project.Description;
    command.ProjectType = project.ProjectType;
    command.StartDate = moment(project.StartDate).format('YYYY-MM-DD');

    let result;

    try {
      result = await this.resource.update(command);
    } catch (error) {
      return null;
    }

    return result;
  }

  async changeProjectManager(projectId, newPm: User) {
    let command = new ChangeProjectManagerCommand();
    command.ProjectId = projectId;
    command.ProjectManagerId = newPm.UserId;

    let result;

    try {
      result = await this.resource.changeProjectManager(command);
    } catch (error) {
      return null;
    }

    return result;
  }
}
