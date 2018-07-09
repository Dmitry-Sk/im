import { Injectable } from '@angular/core';

import { SystemSettingsResource } from './system-settings.resource';

@Injectable()
export class SystemSettingsService {
  constructor(private systemSettingsResource: SystemSettingsResource) {}

//   async test(): Promise<any> {
//     let response;
//     try {
//       response = await this.systemSettingsResource.getList();
//     } catch (error) {
//       throw new Error(error);
//     }
//     return response;
//   }
}
