import { Observable, of } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
import layout from '../../cypress/fixtures/layout';
import { CanvasProps } from '../types';

export const props$: Observable<CanvasProps> = of({
  layout,
  onUpdate: console.log,
});
