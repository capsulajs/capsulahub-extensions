import { JavascriptLanguage } from '../src/api/Language';
import { RequestFormUIProps, SubmittedData } from '../src/api/index';

export const basicProps: RequestFormUIProps = {
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
