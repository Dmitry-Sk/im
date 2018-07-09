import { Injectable } from '@angular/core';

import { WorkplanSettingsResource } from './workplan-settings.resource';
import { WorkplanSettings } from '../../../domain/view-models/admin/workplan-settings';

@Injectable()
export class WorkplanSettingsService {
  constructor(private workplanSettingsResource: WorkplanSettingsResource) {}

  async getWorkplanSettings(): Promise<WorkplanSettings> {
    let workplanSettings = new WorkplanSettings();
    try {
      let workplanSettingsResponse: WorkplanSettings = await this.workplanSettingsResource.getWorkplanSettings();
      for (let p in workplanSettingsResponse) {
        workplanSettings[p] = workplanSettingsResponse[p];
      }
    } catch (error) {
      throw new Error(error);
    }

    return workplanSettings;
  }

  async updateWorkplanSettings(
    workplanSettings: WorkplanSettings
  ): Promise<object> {
    let result;
    try {
      result = await this.workplanSettingsResource.updateWorkplanSettings(
        workplanSettings
      );
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }
}
