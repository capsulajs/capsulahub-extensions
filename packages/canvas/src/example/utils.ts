import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import defaultLayout from '../../cypress/fixtures/layout';
import { Layout, CanvasProps } from '../types';

const subject = new BehaviorSubject(defaultLayout);
export const props$: Observable<CanvasProps> = subject
  .asObservable()
  .pipe(map((layout: Layout) => ({ layout, onUpdate: (newLayout: Layout) => subject.next(newLayout) })));
