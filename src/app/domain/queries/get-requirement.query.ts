export class GetRequirementQuery {
  ProjectId: string;
  RequirementId: string;

  constructor(projectId: string, requirementId: string) {
    this.ProjectId = projectId;
    this.RequirementId = requirementId;
  }
}
