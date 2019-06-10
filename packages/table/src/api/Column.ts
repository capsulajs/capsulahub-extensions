import { Cell } from './index';

export default interface Column {
  /* Human column header name */
  Header: string;
  /* Column key for access */
  accessor: string;
  /* Cell render function */
  Cell?: (row: Cell) => HTMLElement | string;
  /* Gives possibility to filter data by current column */
  filterable?: boolean;
  /* Gives possibility to sort data by current column */
  sortable?: boolean;
}
