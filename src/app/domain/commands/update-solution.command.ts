export class UpdateSolutionCommand {
  ProjectId: string;
  SolutionId: string = '';
  Name: string = '';
  Description: string = '';
  Group: string = '';
  Owner: string = '';
  Sequence: number = 0;
  DesignType: string = '';
  Dependencies: Array<any> = [];
  CustomAttributes: any;
  ReviewOption: string = 'None';
}
