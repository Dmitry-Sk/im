export class CreateSolutionCommand {
  ProjectId: string = '';
  Name: string = '';
  Description: string = '';
  Group: string = '';
  Owner: string = '';
  Sequence: number = 0;
  DesignType: string = '';
  Dependencies: Array<string> = [];
  CustomAttributes: any;
}
