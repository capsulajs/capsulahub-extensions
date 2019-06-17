
Scenario: Check that initially no environment is selected and connected to
   Given  Environment Selection Component
   And    two valid environments 'env1', 'env2'
   When   the environment selection component is rendered
   Then   I see a list of two environments 'env1' and 'env2' displayed
   And    the environments are not selected and connected
   And    the circles next to the environments name are gray
   And    the background of 'env1' and 'env2' item is black

Scenario: Connect to an environment when there isn't open connection
   Given  Environment Selection Component
   And    there is no environment selected and connected
   And    a valid environment 'env1'
   When   I click on 'env1' environment
   And    I click on gray circle next to 'env1' environment name
   Then   'env1' environment is selected
   And    I am connected to 'env1' environment
   And    the background of selected item is changed
   And    the circle next to the environment changes it's color to green

Scenario: Connect to 'env2' environment when there is an opened connection to 'env1' environment
   Given  Environment Selection Component
   And    two valid environments 'env1', 'env2'
   And    'env1' environment is selected and connected
   When   I click on 'env2' environment
   And    I click on gray circle next to 'env2' environment name
   Then   I am disconnected from 'env1' environment
   And    color of the circle next to 'env1' environment name changed to gray
   And    the background of 'env1' item changes to black
   And    'env2' environment is selected
   And    I am connected to 'env2' environment
   And    the background of selected item changes to gray
   And    circle next to 'env2' environment changes it's color to green

Scenario: Connect to an environment when there is an opened connection to this environment
   Given  Environment Selection Component
   And    a valid environment 'env1'
   And    'env1' environment is selected and connected
   When   I click on green circle next to 'env1' environment name
   Then   I am disconnected from 'env1' environment
   And    color of the circle next to 'env1' environment name changed to gray
   And    'env1' environment is still selected
   And    the background of selected item is gray

 Scenario: Connect to an environment when environment was not selected
   Given  Environment Selection Component
   And    a valid environment 'env1'
   And    'env1' environment is not selected and connected
   And    the background of 'env1' item is black
   When   I click on gray circle next to 'env1' environment name
   Then   'env1' environment is selected and connected
   And    color of the circle next to 'env1' environment name changed to green
   And    the background of 'env1' item changed to gray

 Scenario: "Connected" prop is passed to component and environment name doesn't exists in the list of "environments" prop
   Given  Environment Selection Component
   And    a valid environment 'env1'
   And    a valid environment 'env2' that doesn't exists in the list of "environments" prop
   And    no environment is selected and connected
   When   I pass "Connected" prop with 'env2' environment
   Then   'env2' and 'env1' environments are not connected
   And    the circles next to 'env1' environment is gray

  Scenario: "Selected" prop is passed to component and environment name doesn't exists in the list of "environments" prop
   Given  Environment Selection Component
   And    a valid environment 'env1'
   And    a valid environment 'env2' that doesn't exists in the list of "environments" prop
   And    no environment is selected and connected
   When   I pass "Selected" prop with 'env2' environment
   Then   'env2'and 'env1' environments are not connected
   And    the the background of 'env1' item is black
