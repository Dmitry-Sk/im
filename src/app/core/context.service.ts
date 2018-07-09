import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { EntityPath } from './../domain/view-models/entity-path';

@Injectable()
export class ContextService {
  private static currentPath: EntityPath = undefined;
  static onContextChanged: Subject<EntityPath> = new Subject<EntityPath>();

  static setCurrentPath(path: EntityPath) {
    this.currentPath = path;
    this.onContextChanged.next(this.currentPath);
  }

  static getCurrentPath(): EntityPath {
    return this.currentPath;
  }
}
