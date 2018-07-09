import { Injectable } from '@angular/core';

import { ModelPropertiesMapper } from '../../../core/model-properties-mapper';
import { Source, SourcesList } from '../../../domain/view-models/admin/source';
import { SourcesResource } from './sources.resource';

@Injectable()
export class SourcesService {
  constructor(private sourcesResource: SourcesResource) {}

  async getList(): Promise<Source[]> {
    let sourcesResponse: Source[] = [];
    try {
      sourcesResponse = await this.sourcesResource.getList();
      sourcesResponse = new ModelPropertiesMapper<Source>(Source).mapMany(
        sourcesResponse
      );
    } catch (error) {
      throw new Error(error);
    }
    return sourcesResponse;
  }

  async update(sources: SourcesList): Promise<object> {
    let result;
    try {
      result = await this.sourcesResource.update(sources);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async removeItem(sources: SourcesList): Promise<object> {
    let result;
    try {
      result = await this.sourcesResource.update(sources);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async addItem(sources: SourcesList): Promise<object> {
    let result;
    try {
      result = await this.sourcesResource.update(sources);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }
}
