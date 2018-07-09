export class UpdateRequirementCommand {
  ProjectId: string;
  RequirementId: string = '';
  Name: string = '';
  Description: string = '';
  Group: string = '';
  Owner: string = '';
  Priority: string = '';
  Sequence: number = 0;
  Source: string = '';
  Dependencies: Array<any> = [];
  CustomAttributes: any;
  ReviewOption: string = 'None';
}
