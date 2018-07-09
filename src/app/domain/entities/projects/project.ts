import { Entity } from '../common/entity';
import { User } from '../common/user';

export class Project extends Entity {
  People: Array<string> = [];
  ProjectType: string = undefined;
  ProjectManagerName: string = '';
  ProjectManagerId: string = '';
  ProjectManager: User = undefined;
  StartDate: string | Date = undefined;
  TotalOpenIssues: number = 0;
  TotalRoles: number = 0;
}
