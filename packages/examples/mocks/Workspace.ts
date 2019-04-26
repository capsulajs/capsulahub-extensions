import { Subject } from 'rxjs';
import { SelectedResponse } from '../src/helpers/types';
import mockMethodSelectorService from './mockMethodSelectorService';

export default class Workspace {
  private selectedSubject: Subject<SelectedResponse>;

  constructor({ selectedSubject }) {
    this.selectedSubject = selectedSubject;
  }

  service({ serviceName }) {
    return Promise.resolve(mockMethodSelectorService(this.selectedSubject));
  }
}
