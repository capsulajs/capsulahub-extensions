import { Column } from './index';

export default interface TableUIProps<Row> {
  data: Row[];
  columns: Column[];
}
