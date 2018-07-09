import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';

import { WorkplanSettings } from '../../domain/view-models/admin/workplan-settings';
import { WorkplanSettingsService } from '../shared/workplan-settings/workplan-settings.service';

@Component({
  selector: 'app-workplan-settings',
  templateUrl: './workplan-settings.component.html',
  styleUrls: ['./workplan-settings.component.scss']
})
export class WorkplanSettingsComponent implements OnInit {
  workplanSettings: WorkplanSettings = undefined;
  colors: Array<string> = ['Red', 'Yellow'];

  constructor(
    private workplanSettingsService: WorkplanSettingsService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.getWorkplanSettings();
  }

  async getWorkplanSettings(): Promise<void> {
    try {
      this.workplanSettings = await this.workplanSettingsService.getWorkplanSettings();
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateWorkplanSettings(workplanSettingsForm: NgForm): Promise<void> {
    if (workplanSettingsForm.invalid) {
      return;
    } else {
      try {
        await this.workplanSettingsService.updateWorkplanSettings(
          this.workplanSettings
        ).then(() => {
          this.toaster.pop(
            'success',
            'Settings Updated',
            'Settings have been updated successfully'
          );
        })
      } catch (error) {
        throw new Error(error);
      }
    }
  }
}
