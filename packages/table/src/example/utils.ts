import { Observable, BehaviorSubject, of } from 'rxjs';
import { TableUIProps, Column } from '../api/index';
import { Row } from './types';

export const columns: Column[] = [
  {
    Header: 'Column A',
    accessor: 'columnA',
    filterable: true,
  },
  {
    Header: 'Column B',
    accessor: 'columnB',
  },
  {
    Header: 'Column C',
    accessor: 'columnC',
  },
];

export const row = (i: number) => ({
  columnA: `A${i}`,
  columnB: `B${i}`,
  columnC: `C${i}`,
});

export const tablePropsSubject = new BehaviorSubject(new Array(25).fill(null).map((_, i) => row(i)));
export const props$: Observable<TableUIProps<Row>> = of({
  data$: tablePropsSubject.asObservable(),
  columns,
});
