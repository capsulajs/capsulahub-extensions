import { Subject } from 'rxjs';
import { SelectedResponse } from '../src/helpers/types';

export default (selectedSubject$: Subject<SelectedResponse>) => ({
  proxy: {
    selected$: selectedSubject$,
  },
});
