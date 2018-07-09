import { User } from './user';

export class Entity {
  Id: string = '';
  Name: string = '';
  Owner: User = null;
  OwnerName: string = '';
  OwnerId: string = '';
  Description: string = '';
  Status: string = '';
  CreatedOnInstant: string = '';
  CreatedBy: User = undefined;
  UpdatedBy: User = undefined;
  UpdatedOnInstant: string = '';
  CustomAttributes: Array<object> = [];
  IsArchived: boolean = false;

  remove() {
    alert(`cant remove this project (id = ${this.Id})`);
  }
}
