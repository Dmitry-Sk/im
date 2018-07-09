export class Role {
  Name: string = '';
  Permissions: Array<Permission> = [];
}

export class Permission {
  Name: string = '';
  Group: string = '';
  Related: Array<string> = [];
  HasRight: boolean = false;
}

export class RoleModel {
  Name: string = '';
  Permissions: Array<string> = [];
}
