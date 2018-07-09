import { User } from '../../entities/common/user';

export class GetTenantsPagedQueryBase {
  ColumnsSearch?: string = '';
  CurrentPage: number = 1;
  ItemsPerPage: number = 25;
}

export class Tenant {
  Code: string = '';
  IsActive: boolean = false;
  Name: string = '';
  TotalUsers: number = 0;
}

export class TenantInfo {
  Code: string = '';
  Name: string = '';
  IsActive: boolean = false;
  PrimaryAdmin: User;
  Scopes: Array<string> = [];
  TotalUsers: number = 0;
}

export class Code {
  Code: string = '';
}
