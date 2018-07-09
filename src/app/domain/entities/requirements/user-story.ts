import { Entity } from '../common/entity';

export class UserStory extends Entity {
  ProjectId: string = '';
  RequirementId: string = '';
  RequirementName: string = '';
  Sequence: number = 0;
  SequenceType: string = '';
  UserType: string = '';
}
