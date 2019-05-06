import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import defaultLayout from '../../cypress/fixtures/layout';

const subject = new BehaviorSubject(defaultLayout);
export const props$ = subject
  .asObservable()
  .pipe(map((layout) => ({ layout, onUpdate: (newLayout) => subject.next(newLayout) })));
