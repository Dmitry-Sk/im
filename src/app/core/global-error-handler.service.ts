import { Injectable } from '@angular/core';
import { ToasterService } from 'angular5-toaster';

@Injectable()
export class GlobalErrorHandlerService {
  constructor(private toaster: ToasterService) {}

  handleError(error) {
    this.toaster.pop(
      'error',
      'Application Error',
      'An error occured. Please check developer console for details'
    );
    throw error;
  }
}
