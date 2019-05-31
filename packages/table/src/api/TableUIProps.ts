import { Column } from './index';

export default interface TableUIProps<Row> {
  theme: any;
  data: Row[];
  columns: Column[];
}
