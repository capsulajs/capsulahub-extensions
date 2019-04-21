import { Subject } from 'rxjs';
import { SelectedResponse } from '../helpers/types';
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
