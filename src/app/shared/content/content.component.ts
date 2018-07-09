import { EntityPathSegment } from './../../domain/view-models/entity-path-segment';
import { Component, OnInit } from '@angular/core';

import { ContextService } from './../../core/context.service';
import { EntityPath } from './../../domain/view-models/entity-path';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  currentPathSegments: Array<EntityPathSegment> = [];

  constructor() {
    ContextService.onContextChanged.subscribe((currentPath: EntityPath) => {
      if (!currentPath) {
        this.currentPathSegments = [];
        return;
      }
      this.currentPathSegments = currentPath.Segments;
    });
  }

  ngOnInit() {}
}
