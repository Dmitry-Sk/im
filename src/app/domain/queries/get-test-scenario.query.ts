export class GetTestScenarioQuery {
  ProjectId: string;
  TestScenarioId: string;

  constructor(projectId: string, testScenarioId: string) {
    this.ProjectId = projectId;
    this.TestScenarioId = testScenarioId;
  }
}
