export class Activity {
  ActivityId: string = '';
  ActivityName: string = '';
  ActivityStatus: string = '';
  ActualHours: number = 0;
  EndDate: string = '';
  EstimatedHours: number = 0;
  Progress: number = 0;
  ProjectId: string = '';
  ProjectName: string = '';
  ProjectStatus: string = '';
  RemainingHours: number = 0;
  StartDate: string = '';
  Type: string = '';
  UserId: string = '';
  WorkplanId: string = '';

  editLogTime() {
    alert(`edit log time (ProjectId = ${this.ProjectId}) `);
  }
}
