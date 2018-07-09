export interface GroupsList {
  Groups: Group[];
}

export class Group {
  GroupType: string = '';
  Name: string = '';
  SuggestionStatus: string = '';
}
