import { User } from '../entities/common/user';
import { EntityMetadataViewModel } from './entity-metadata-view-model';

export class ProjectMetadataViewModel extends EntityMetadataViewModel {
  ProjectManagers: Array<User> = [];
  ProjectTypes: Array<string> = [];
}
