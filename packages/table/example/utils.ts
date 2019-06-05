import { Observable, of } from 'rxjs';
import { TableUIProps, Column } from '../src/api/index';
import { Row } from './types';

export const props$: Observable<TableUIProps<Row>> = of({
  data$: of(new Array(20).fill(null).map((_, i) => ({
    columnA: `A${i}`,
    columnB: `B${i}`,
    columnC: `C${i}`,
  })) as Row[]),
  columns: [
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
  ] as Column[],
});
