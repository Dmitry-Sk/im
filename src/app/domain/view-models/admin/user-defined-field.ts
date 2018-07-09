import { EntityPath } from '../entity-path';

export interface UserDefinedFieldResponse<UserDefinedField> {
  Metadata: any;
  Path: EntityPath;
  ViewModel: Array<UserDefinedField>;
}

export interface UserDefinedFieldsList {
  UserDefinedFields: UserDefinedField[];
}

export class UserDefinedField {
  DataType: string = '';
  IsRequired: boolean = false;
  Label: string = '';
  ModuleType: string = '';
  Name: string = '';
  Options: Array<string> = [];
}
