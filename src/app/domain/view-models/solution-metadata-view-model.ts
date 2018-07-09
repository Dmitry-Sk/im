import { DesignType } from './admin/design-type';
import { TraceableMetadataViewModel } from './traceable-metadata-view-model';

export class SolutionMetadataViewModel extends TraceableMetadataViewModel {
  DesignTypes: Array<DesignType> = [];
}
