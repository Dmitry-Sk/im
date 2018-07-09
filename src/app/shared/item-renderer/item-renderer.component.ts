import { Component, Input, OnInit } from '@angular/core';

import { Entity } from './../../domain/entities/common/entity';

@Component({
  selector: 'app-item-renderer',
  templateUrl: './item-renderer.component.html',
  styleUrls: ['./item-renderer.component.scss']
})
export class ItemRendererComponent<T> {
  @Input() viewMode: string;
  @Input() item: T;

  editItem(item: Entity) {}

  removeItem(item: Entity) {}
}
