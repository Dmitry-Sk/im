export class GetSolutionQuery {
  ProjectId: string;
  SolutionId: string;

  constructor(projectId: string, solutionId: string) {
    this.ProjectId = projectId;
    this.SolutionId = solutionId;
  }
}
