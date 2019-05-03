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
      selectedMethodPath: 'SelectedService/SelectedMethod',
      content: {
        language: 'javascript',
        requestArgs: 'return {};',
      },
      onSubmit: (data) => {
        onSubmitSpy(data);
        console.log('submit data', data);
      },
    };
    cy.visit('/', {
      onBeforeLoad(window) {
        window.requestFormPropsSubject = new BehaviorSubject(basicProps);
      },
    });

    cy.wrap([
      { content: 'return null;', requestArgs: [null] },
      { content: 'return undefined;', requestArgs: [undefined] },
      { content: 'return 5;', requestArgs: [5] },
      { content: 'return "hello";', requestArgs: ['hello'] },
      { content: 'return {{} hello: "world" };', requestArgs: [{ hello: 'world' }] },
      { content: 'return [{{} hello: "world" }, 5];', requestArgs: [[{ hello: 'world' }, 5]] },
      { content: 'return () => {{} const a = "Hello"; return a; };', expectedResultAfterInvoke: 'Hello' },
    ]).each((data, index) => {
      cy.wait(1000)
        .typeInEditor(data.content)
        .submitRequest()
        .then(() => {
          if (!data.expectedResultAfterInvoke) {
            expect(onSubmitSpy).calledWithExactly({ language: 'javascript', requestArgs: data.requestArgs });
          } else {
            const argsCalled = onSubmitSpy.args[index];
            expect(argsCalled.length).to.equal(1);
            expect(Object.keys(argsCalled[0]).length).to.equal(2);
            expect(argsCalled[0].language).to.equal('javascript');
            expect(argsCalled[0].requestArgs.length).to.equal(1);
            expect(argsCalled[0].requestArgs[0]()).to.equal(data.expectedResultAfterInvoke);
          }
        });
    });
  });
});
