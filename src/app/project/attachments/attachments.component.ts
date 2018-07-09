import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit {
  projectId: string = '';
  projectData: object = {};

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    Observable.from(this.activatedRoute.pathFromRoot)
      .switchMap(route => route.params)
      .filter(params => params.id)
      .subscribe(params => {
        this.projectId = params.id;
        this.projectData = {
          projectId: this.projectId
        };
      });
  }
}
