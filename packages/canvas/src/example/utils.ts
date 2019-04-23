import { Observable, of } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
// import canvas from '../../cypress/fixtures/logs';
import { CanvasProps } from '../types';

export const props$: Observable<CanvasProps> = of({
  layout: {},
  onUpdate: console.log
});
