import { User } from './user';
import { Attachment } from './attachment';

export class History {
  AssignedTo: User = undefined;
  Attachment: Attachment = undefined;
  Remarks: string = '';
  Sequence: number = 0;
  Status: string = '';
  StatusDate: string = '';
  Tester: User = undefined;
}
