import { BehaviorSubject } from 'rxjs';
import { JavascriptLanguage } from '../api/Language';
import { RequestFormUIProps, SubmittedData } from '../api';

const basicProps: RequestFormUIProps = {
  selectedMethodPath: 'SelectedService/SelectedMethod',
  content: {
    language: 'javascript' as JavascriptLanguage,
    requestArgs: 'return {};',
  },
  onSubmit: (data: SubmittedData) => {
    // tslint:disable-next-line
    console.log('the data from RequestForm has been submitted', data);
  },
};

export const requestFormPropsSubject = new BehaviorSubject(basicProps);
