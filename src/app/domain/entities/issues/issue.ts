import { Entity } from '../common/entity';
import { User } from '../common/user';

export class Issue extends Entity {
  Group: string = '';
  IssueType: string = '';
  Owner: User = undefined;
  Priority: string = '';
  ProjectId: string = '';
  RelatedId: string = '';
  RelatedType: string = '';
  TotalComments: number = 0;
}
