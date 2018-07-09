import { Component, OnInit } from '@angular/core';

import { Project } from './../../../domain/entities/projects/project';
import { ItemRendererComponent } from './../../../shared/item-renderer/item-renderer.component';

@Component({
  selector: 'app-project-item-renderer',
  templateUrl: './project-item-renderer.component.html',
  styleUrls: ['./project-item-renderer.component.scss']
})
export class ProjectItemRendererComponent extends ItemRendererComponent<Project>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
