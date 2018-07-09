export class CreateRequirementCommand {
  ProjectId: string = '';
  Name: string = '';
  Description: string = '';
  Group: string = '';
  Owner: string = '';
  Priority: string = '';
  Sequence: number = 0;
  Source: string = '';
  Dependencies: Array<string> = [];
  CustomAttributes: any;
}
