import { Component, OnInit } from '@angular/core';

import { SystemSettingsService } from '../shared/system-settings/system-settings.service';

@Component({
  selector: 'app-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss']
})
export class SystemSettingsComponent implements OnInit {
  constructor(private systemSettingsService: SystemSettingsService) {}

  ngOnInit() {
    // this.test();
  }

  // async test() {
  //   try {
  //     this.systemSettingsService.test();
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }
}
