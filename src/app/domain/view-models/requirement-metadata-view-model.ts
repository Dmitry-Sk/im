import { Source } from './admin/source';
import { TraceableMetadataViewModel } from './traceable-metadata-view-model';

export class RequirementMetadataViewModel extends TraceableMetadataViewModel {
  Priority: Array<string> = [];
  Sources: Array<Source> = [];
}
