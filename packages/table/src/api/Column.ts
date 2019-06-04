import { Cell } from './index';

export default interface Column {
  Header: string;
  accessor: string;
  Cell?: (row: Cell) => void;
}
