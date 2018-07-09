import { AuthService } from '../../../core/auth.service';

export class GetUsersPagedQueryBase {
  constructor(code) {
    this.code = code;
  }
  ColumnsSearch?: string = '';
  CurrentPage: number = 1;
  ItemsPerPage: number = 25;
  code: string = '';
}

export class User {
  Email: string = '';
  FirstName: string = '';
  IsActive: boolean = false;
  LastName: string = '';
  UserId: string = '';
}

export class UserInfo extends User {
  ApplicationRoles: Array<string> = [];
  PersonType: string = '';
  Position: string = '';
}

export class CreateUserInfoForm {
  Email: string = '';
  FirstName: string = '';
  IsActive: boolean = false;
  LastName: string = '';
  ApplicationRoles: Array<string> = [];
  PersonType: string = '';
  Position: string = '';
}
