import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import layout from '../../cypress/fixtures/layout';
import { Layout, CanvasProps } from '../types';

const subject = new BehaviorSubject(layout);
export const props$: Observable<CanvasProps> = subject.asObservable().pipe(
  map((layout: Layout) => ({ layout, onUpdate: (layout: Layout) => subject.next(layout) }))
);
