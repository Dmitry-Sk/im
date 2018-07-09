import { EntityPath } from './entity-path';

export interface SingleEntityResponseViewModel<T, M> {
  Metadata: M;
  Path: EntityPath;
  ViewModel: T;
}
