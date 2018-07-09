import { Group } from '../../view-models/admin/group';
import { Entity } from './entity';

export class Traceable extends Entity {
  Dependencies: Array<any> = [];
  Group: Group | string = null;
  ProjectId: string = '';
  ReviewOption: string = '';
  ReviewStatus: any = undefined;
  Sequence: number = 0;
}
