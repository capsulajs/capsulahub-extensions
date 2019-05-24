import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Layout, CanvasUIProps } from '../src/api';
import defaultLayout from './layout';

const subject = new BehaviorSubject(defaultLayout);
export const props$: Observable<CanvasUIProps> = subject
  .asObservable()
  .pipe(map((layout: Layout) => ({ layout, onUpdate: (newLayout: Layout) => subject.next(newLayout) })));
