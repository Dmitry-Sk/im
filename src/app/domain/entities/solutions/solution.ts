import { DesignType } from './../../view-models/admin/design-type';
import { RelatedEntity } from '../common/related-entity';
import { Traceable } from '../common/traceable';

export class Solution extends Traceable {
  DesignType: DesignType | string = null;
  RequirementIds: Array<RelatedEntity> = [];
  TestScenarioIds: Array<RelatedEntity> = [];
}
