import { Observable, from } from 'rxjs';
import { TableUIProps, Column } from '../src/api/index';
import { Row } from './types';

export const props$: Observable<TableUIProps<Row>> = from({
  data: [
    {
      ColumnA: 'A',
      ColumnB: 'B',
      ColumnC: 'C',
    },
  ] as Row[],
  columns: [
    {
      Header: 'Column A',
      accessor: 'ColumnA',
    },
    {
      Header: 'Column B',
      accessor: 'ColumnB',
    },
    {
      Header: 'Column C',
      accessor: 'ColumnC',
    },
  ] as Column[],
});
