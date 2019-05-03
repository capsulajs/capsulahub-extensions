import { BehaviorSubject } from 'rxjs';

const { cy, describe, it } = global;

const defaultText = {
  javascript: 'return {};',
  json: '{}',
};

const editors = '#web-request-form .ace_content';

const basicProps = {
  selectedMethodPath: 'SelectedService/SelectedMethod',
  content: {
    language: 'javascript',
    requestArgs: 'return {};',
  },
  onSubmit: () => {},
};

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

  it(
    'Submit with a valid request (check different data types in request and the model of data received)' +
      ' (javascript mode)',
    () => {
      const onSubmitSpy = cy.spy();
      cy.visit('/', {
        onBeforeLoad(window) {
          window.requestFormPropsSubject = new BehaviorSubject({ ...basicProps, onSubmit: onSubmitSpy });
        },
      });

      cy.wrap([
        { content: 'return null;', requestArgs: [null] },
        { content: 'return undefined;', requestArgs: [undefined] },
        { content: 'return 5;', requestArgs: [5] },
        { content: 'return "hello";', requestArgs: ['hello'] },
        { content: 'return {{} hello: "world" };', requestArgs: [{ hello: 'world' }] },
        { content: 'return [{{} hello: "world" }, 5];', requestArgs: [[{ hello: 'world' }, 5]] },
        {
          content: 'return () => {{} const a = "Hello"; return a; };',
          argToPass: undefined,
          expectedResultAfterInvoke: 'Hello',
        },
        {
          content: 'return function test(b) {{} const a = "Hello"; return a + " " + b; };',
          argToPass: 'World',
          expectedResultAfterInvoke: 'Hello World',
        },
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
              expect(argsCalled[0].requestArgs[0](data.argToPass)).to.equal(data.expectedResultAfterInvoke);
            }
          });
      });
    }
  );

  it('Submit button should be disabled when there is no service/method name displayed', () => {
    const onSubmitSpy = cy.spy();
    cy.visit('/', {
      onBeforeLoad(window) {
        window.requestFormPropsSubject = new BehaviorSubject({
          ...basicProps,
          selectedMethodPath: '',
          onSubmit: onSubmitSpy,
        });
      },
    });
    cy.submitRequest()
      .then(() => {
        expect(onSubmitSpy.notCalled).to.equal(true);
      })
      .changeLanguage('json')
      .submitRequest()
      .then(() => {
        expect(onSubmitSpy.notCalled).to.equal(true);
      });
  });

  it('Check Submit button to be disabled when there is an invalid request (with different number of arguments)', () => {
    const onSubmitSpy = cy.spy();
    cy.visit('/', {
      onBeforeLoad(window) {
        window.requestFormPropsSubject = new BehaviorSubject({ ...basicProps, onSubmit: onSubmitSpy });
      },
    });

    cy.wrap(['5', 'return', 'return ', 'return {{}', 'return {{} test: };'])
      .each((input) => {
        cy.wait(1000)
          .typeInEditor(input)
          .submitRequest()
          .then(() => {
            expect(onSubmitSpy.notCalled).to.equal(true);
          });
      })
      .changeArgsAmount(2)
      .typeInEditor('return "test"', 1)
      .submitRequest()
      .changeLanguage('json')
      .changeArgsAmount(1)
      .wrap(['{{} test: "world" }', '{{} "test: "world" }', 'return {{} test: "world" };', 'test', ''])
      .each((input) => {
        cy.wait(1000)
          .typeInEditor(input)
          .submitRequest()
          .then(() => {
            expect(onSubmitSpy.notCalled).to.equal(true);
          });
      })
      .changeArgsAmount(2)
      .typeInEditor('return {{} "test": "world" }', 1)
      .submitRequest();
  });
});
