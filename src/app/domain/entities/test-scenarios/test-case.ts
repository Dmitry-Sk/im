import { Entity } from '../common/entity';
import { History } from '../common/history';
import { User } from '../common/user';

export class TestCase extends Entity {
  AssignedTo: User = undefined;
  ExpectedResult: string = '';
  History: History = undefined;
  ProjectId: string = '';
  Remarks: string = '';
  Sequence: number = 0;
  TestRuns: number = 0;
  TestScenarioId: string = '';
  TestScenarioName: string = '';
  TestType: string = '';
  Tester: User = undefined;
}
