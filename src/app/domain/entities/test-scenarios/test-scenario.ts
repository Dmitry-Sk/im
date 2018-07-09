import { RelatedEntity } from '../common/related-entity';
import { Traceable } from '../common/traceable';

export class TestScenario extends Traceable {
  RequirementIds: Array<RelatedEntity> = [];
  SolutionIds: Array<RelatedEntity> = [];
}
