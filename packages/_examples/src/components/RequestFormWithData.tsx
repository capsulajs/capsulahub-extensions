import * as React from 'react';
import { Observable, from } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';
import RequestForm from './RequestForm';
import { SelectedResponse } from '../helpers/types';
import { JavascriptLanguage } from '../api/Language';
import { SubmittedData } from '../api';

export default class RequestFormWithData extends RequestForm {
  public setProps() {
    const basicProps = {
      selectedMethodPath: '',
      content: {
        language: 'javascript' as JavascriptLanguage,
        requestArgs: 'return {};',
      },
      onSubmit: () => {},
    };

    this.props$ = from(window.workspace.service({ serviceName: 'MethodSelectorService' })).pipe(
      map((serviceData) => serviceData.proxy),
      switchMap((methodSelectorService) => {
        return methodSelectorService.selected$({}) as Observable<SelectedResponse>;
      }),
      map((selectedMethod: SelectedResponse) => ({
        ...basicProps,
        selectedMethodPath: selectedMethod.methodName
          ? `${selectedMethod.serviceName}/${selectedMethod.methodName}`
          : 'Not selected',
        onSubmit: (data: SubmittedData) => {
          console.log('the data from RequestForm has been submitted', data);
        },
      })),
      startWith(basicProps)
    );
  }
}
