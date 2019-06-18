import { Observable, of } from 'rxjs';
import { ModalUIProps } from '../api/index';

// export const tablePropsSubject = new BehaviorSubject(new Array(25).fill(null).map((_, i) => row(i)));
export const props$: Observable<ModalUIProps> = of({
  onToggle: console.log,
  isOpen: true,
  children: 'Hello',
});
