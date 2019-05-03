
Scenario: Check the code pattern to be displayed for javascript language (with different number of arguments)
    Given Request Form web component
    When  javascript is selected language
    Then  default code pattern "return {};" is displayed
    And   the amount of patterns displayed is in correspondence with the number of arguments selected

Scenario: Check the code pattern to be displayed for json language (with different number of arguments)
    Given Request Form web component
    When  json is selected language
    Then  default code pattern "{}" is displayed
    And   the amount of patterns displayed is in correspondence with the number of arguments selected

Scenario: Check Request Form to be split according to the arguments number
    Given Request Form web component
    And   a number of arguments is selected
    When  user change the number of arguments by choosing one of up/down arrows or by typing the number itself
    Then  Request Form is split according to the arguments number required

Scenario: Submit with a valid request (check different data types in request and the model of data received) (javascript mode)
    Given Request Form web component
    And   a valid input with the following <data type>
          |<data type>|
          | null      |
          | undefined |
          | number    |
          | string    |
          | object    |
          | array     |
          | function  |
    And   Submit button is enabled
    When  user click on Submit button
    Then  request is sent
    And   the object received contains the following <property>
          |<property> |
          |language   |
          |requestArgs|

Scenario: Submit button should be disabled when there is no service/method name displayed
    Given Request Form web component
    When  there is no service/method name displayed on the bottom corner
    Then  Submit button is disabled
    And   request can not be sent

Scenario: Check Submit button to be disabled when there is an invalid request (with different number of arguments)
    Given Request Form web component
    When  an invalid input for specific language is written for at least one of the arguments
    Then  Submit button is disabled
    And   request can not be sent

Scenario: The input should not be deleted after submit
    Given Request Form web component
    And   a valid input for specific language
    And   Submit button is enabled
    When  user click on Submit button
    And   request is sent
    Then  the input that was sent is not removed from the Request Form

Scenario: Switching between languages should not affect the number of arguments selected
    Given Request Form web component
    And   one of the existing languages is selected
    And   a number of arguments is selected
    When  user switch the language to another supported language
    Then  number of arguments is kept the same

Scenario: Line number should be provided when user write an input with several lines
    Given Request Form web component
    When  default code pattern is displayed according to the language selected
    And   user starts new line of writing
    Then  line number is provided for each row of input written

Scenario: Validation errors of the selected language should be displayed next to the line with wrong input
    Given Request Form web component
    And   one of the existing languages is selected
    When  user types an invalid input
    Then  a validation error of the selected language is displayed next to the line with wrong input

Scenario: Removing the arguments number doesnt remove the existing editors and content
   Given Request Form web component is split in few editors
   And   each editor has some content inside
   When  user removes via the keyboard the arguments number
   Then  the existing editors and their content is still available

