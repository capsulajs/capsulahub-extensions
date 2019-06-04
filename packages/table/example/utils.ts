import { Observable, of } from 'rxjs';
import { TableUIProps, Column } from '../src/api/index';
import { Row } from './types';

export const props$: Observable<TableUIProps<Row>> = of({
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
      Cell: (row) => row.value,
    },
  ] as Column[],
});
