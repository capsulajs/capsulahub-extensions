import { BehaviorSubject } from 'rxjs';
import { mountWebComponent } from '@capsulajs-web-components/utils';
import { RequestForm } from '../RequestForm';
import { basicProps } from '../helpers/utils';

class RequestFormWithData extends RequestForm {
  public setProps() {
    // In tests env requestFormPropsSubject is set before loading the page
    if (!window.requestFormPropsSubject) {
      window.requestFormPropsSubject = new BehaviorSubject(basicProps);
    }
    this.props$ = window.requestFormPropsSubject!.asObservable();
  }
}

const path = 'http://cdn.components/RequestForm.tsx';

const componentModules = {
  [path]: RequestFormWithData,
};

mountWebComponent({
  name: 'web-request-form',
  path,
  querySelector: '#web-request-form',
  componentModules,
});
