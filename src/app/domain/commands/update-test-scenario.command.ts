export class UpdateTestScenarioCommand {
  ProjectId: string;
  TestScenarioId: string = '';
  Name: string = '';
  Description: string = '';
  Group: string = '';
  Owner: string = '';
  Sequence: number = 0;
  Dependencies: Array<any> = [];
  CustomAttributes: any;
  ReviewOption: string = 'None';
}
