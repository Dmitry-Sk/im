export class CreateTestScenarioCommand {
  ProjectId: string = '';
  Name: string = '';
  Description: string = '';
  Group: string = '';
  Owner: string = '';
  Sequence: number = 0;
  Dependencies: Array<string> = [];
  CustomAttributes: any;
}
