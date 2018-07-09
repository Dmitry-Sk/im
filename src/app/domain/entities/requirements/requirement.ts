import { RelatedEntity } from '../common/related-entity';
import { Traceable } from '../common/traceable';
import { Source } from '../../view-models/admin/source';

export class Requirement extends Traceable {
  Priority: string = null;
  SolutionIds: Array<RelatedEntity> = [];
  Source: Source | string = null;
  TestScenarioIds: Array<RelatedEntity> = [];
}
