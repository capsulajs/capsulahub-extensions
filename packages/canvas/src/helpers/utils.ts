import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Layout, CanvasUIProps } from '../api';
import defaultLayout from '../fixtures/layout';

const subject = new BehaviorSubject(defaultLayout);
export const props$: Observable<CanvasUIProps> = subject
  .asObservable()
  .pipe(map((layout: Layout) => ({ layout, onUpdate: (newLayout: Layout) => subject.next(newLayout) })));
