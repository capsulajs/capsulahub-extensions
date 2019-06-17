
Scenario: Check that initially no environment is selected and connected to
   Given  Environment Selection Component
   And    two valid environments 'env1', 'env2'
   When   the environment selection component is rendered
   Then   I see a list of two environments 'env1' and 'env2' displayed
   And    the environments are not selected and connected
   And    the circles next to the environments name are gray
   And    the background of 'env1' and 'env2' item is black

Scenario: Click on an environment when 'env1' environmnent is not selected
   Given  Environment Selection Component
   And    a valid environment 'env1'
   And    'env1' exists in the list of "environments" prop
   And    'env1' environment is not selected and has no open connection
   When   I click on 'env1' environment
   Then   "onSelect" prop callback is triggered with 'env1' environment in its argument
   And    "selected" prop is passed to component
   And    'env1' is selected
   And    the background of 'env1' item is changed to gray
   
Scenario: Click on 'env1' environment when 'env1' environmnent is already selected
   Given  Environment Selection Component
   And    a valid environment 'env1'
   And    'env1' exists in the list of "environments" prop
   And    'env1' environment is selected and has no open connection
   When   I click on 'env1' environment
   Then   nothing is happening
   And    'env1' environment is still selected
   
Scenario: Click on gray circle next to 'env1' environment when there isn't open connection('env1' is selected and not connected)
   Given  Environment Selection Component
   And    a valid environment 'env1'
   And    'env1' exists in the list of "environments" prop
   And    'env1' environment is selected and not connected
   When   I click on gray circle next to 'env1' environment
   Then   "onConnect" prop callback is triggered with 'env1' environment in its argument
   And    the circle becomes spinning loader instead of gray color
   And    "connected" prop is passed to component
   And    the loader turns to a green circle
   And    'env1' is connected

 Scenario: Click on gray circle next to 'env2' environment when there is an opened connection to 'env1' environment
   Given  Environment Selection Component
   And    two valid environments 'env1', 'env2'
   And    'env1' and 'env2' exists in the list of "environments" prop
   And    'env1' environment is selected and connected
   When   I click on gray circle next to 'env2' environment
   Then   "onDisconnect" prop callback is triggered with 'env1' environment in its argument
   And    the circle next to 'env1' environment name becomes spinning loader instead of green color
   And    "onConnect" prop callback is triggered with 'env2' environment in its argument
   And    the circle next to 'env2' environment name becomes spinning loader instead of gray color
   And    "onSelect" prop callback is triggered with 'env2' environment in its argument
   And    "selected" prop is passed to component
   And    'env2' is selected
   And    the background of 'env2' item is changed to gray
   And    "connected" prop is passed to component
   And    the loader next to 'env2' environment name turns to a green circle
   And    'env2' is connected

Scenario: Click on gray circle next to 'env1' environment  ('env1' is not selected and not connected)
   Given  Environment Selection Component
   And    a valid environment 'env1'
   And    'env1' exists in the list of "environments" prop
   And    'env1' environment is not selected and not connected
   When   I click on gray circle next to 'env1' environment
   Then   "onConnect" prop callback is triggered with 'env1' environment in its argument
   And    the circle becomes spinning loader instead of gray color
   And    "onSelect" prop callback is triggered with 'env1' environment in its argument
   And    "selected" prop is passed to component
   And    'env1' is selected
   And    the background of 'env1' item is changed to gray
   And    "connected" prop is passed to component
   And    the loader turns to a green circle
   And    'env1' is connected

Scenario: Click on green circle next to 'env1' environment - "onDisconnect" prop callback is triggered
   Given  Environment Selection Component
   And    a valid environment 'env1'
   And    'env1' exists in the list of "environments" prop
   And    'env1' environment is selected and connected
   When   I click on green circle next to 'env1' environment
   Then   "onDisconnect" prop callback is triggered with 'env1' environment in its argument
   And    the circle next to 'env1' environment name becomes spinning loader instead of green color
   And    'env1' is still selected
   And    the background of 'env1' item is gray

 Scenario: Connect with an environment that doesn't exists in the list of "environments" prop
   Given  Environment Selection Component
   And    a valid environment 'env1'
   And    a valid environment 'env2' that doesn't exists in the list of "environments" prop
   And    no environment is selected and connected
   When   I pass "Connected" prop with 'env2' environment
   Then   'env2' and 'env1' environments are not connected
   And    the circle next to 'env1' environment is gray

  Scenario: Select an environment that doesn't exists in the list of "environments" prop
   Given  Environment Selection Component
   And    a valid environment 'env1'
   And    a valid environment 'env2' that doesn't exists in the list of "environments" prop
   And    no environment is selected and connected
   When   I pass "Selected" prop with 'env2' environment
   Then   'env2'and 'env1' environments are not connected
   And    the background of 'env1' item is black
