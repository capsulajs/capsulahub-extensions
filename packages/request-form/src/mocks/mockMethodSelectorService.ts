import { Subject } from "rxjs";
import { SelectedResponse } from "../helpers/types";

export default (selectedSubject$: Subject<SelectedResponse>) => ({
  proxy: {
    selected$: selectedSubject$
  }
});
