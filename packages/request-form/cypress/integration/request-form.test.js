import { BehaviorSubject } from 'rxjs';

const { cy, describe, it } = global;

const defaultText = {
  javascript: 'return {};',
  json: '{}',
};

const editors = '#web-request-form .ace_content';

describe('Logger TCs', () => {
  it('Check the code pattern to be displayed for javascript language (with different number of arguments)', () => {
    cy.visit('/')
      .checkEditorsAmount(1)
      .should('have.text', defaultText.javascript)
      .changeArgsAmount(2)
      .checkEditorsAmount(2)
      .each((editor$) => expect(editor$.text()).to.equal(defaultText.javascript));
  });

  it('Check the code pattern to be displayed for json language (with different number of arguments)', () => {
    cy.visit('/')
      .changeLanguage('json')
      .checkEditorsAmount(1)
      .should('have.text', defaultText.json)
      .changeArgsAmount(2)
      .checkEditorsAmount(2)
      .each((editor$) => expect(editor$.text()).to.equal(defaultText.json));
  });

  it('Check Request Form to be split according to the arguments number', () => {
    cy.visit('/')
      .checkEditorsAmount(1)
      .changeArgsAmount(2)
      .checkEditorsAmount(2)
      .changeArgsAmount(3)
      .checkEditorsAmount(3)
      .changeLanguage('json')
      .checkEditorsAmount(3)
      .changeArgsAmount(1)
      .checkEditorsAmount(1);
  });

  it.only('Submit with a valid request (check different data types in request and the model of data received)', () => {
    const onSubmitSpy = cy.spy();
    const basicProps = {
      selectedMethodPath: '',
      content: {
        language: 'javascript',
        requestArgs: 'return {};',
      },
      onSubmit: onSubmitSpy,
    };
    cy.visit('/', {
      onBeforeLoad(window) {
        window.requestFormPropsSubject = new BehaviorSubject(basicProps);
      },
    });

    cy.typeInEditor('return 5;')
      .submitRequest()
      .wait(3500)
      .then(() => {
        expect(onSubmitSpy).calledWithExactly({ language: 'javascript', requestArgs: [5] });
      })
      .typeInEditor('return undefined;')
      .submitRequest()
      .wait(3500)
      .then(() => {
        expect(onSubmitSpy).calledWithExactly({ language: 'javascript', requestArgs: [undefined] });
      });
  });
});
