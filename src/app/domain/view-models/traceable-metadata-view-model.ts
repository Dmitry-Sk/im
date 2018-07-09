import { User } from '../entities/common/user';
import { Dependencies } from './../entities/common/dependencies';
import { Group } from './admin/group';
import { EntityMetadataViewModel } from './entity-metadata-view-model';

export class TraceableMetadataViewModel extends EntityMetadataViewModel {
  Groups: Array<Group> = [];
  Owners: Array<User> = [];
  Dependencies: Array<Dependencies> = [];
}
