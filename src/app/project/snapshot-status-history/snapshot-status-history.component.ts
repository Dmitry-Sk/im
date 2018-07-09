import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProjectStatusHistoryViewModel } from '../../domain/view-models/project-status-history-view-model';
import { ReportingService } from '../../reporting/shared/reporting.service';

@Component({
  selector: 'app-snapshot-status-history',
  templateUrl: './snapshot-status-history.component.html',
  styleUrls: ['./snapshot-status-history.component.scss']
})
export class SnapshotStatusHistoryComponent implements OnInit {
  projectId: string;

  processingReport: boolean = false;
  loadingReports: boolean = true;

  projectStatusHistory: ProjectStatusHistoryViewModel = null;

  constructor(
    private route: ActivatedRoute,
    private reportingService: ReportingService
  ) {}

  ngOnInit() {
    Observable.from(this.route.pathFromRoot)
      .switchMap(route => route.params)
      .filter(params => params.id)
      .subscribe(params => {
        this.projectId = params.id;
        this.loadProjectStatusHistory();
      });
  }

  async loadProjectStatusHistory() {
    this.loadingReports = true;
    this.projectStatusHistory = await this.reportingService.getProjectStatusHistory(
      this.projectId
    );
    this.loadingReports = false;
  }

  async newHistoryReport() {
    this.processingReport = true;
    await this.reportingService.newProjectHistoryReport(this.projectId);
    this.loadProjectStatusHistory();
    this.processingReport = false;
  }
}
