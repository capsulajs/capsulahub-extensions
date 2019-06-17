Feature: Create Environment registry extension for CapsulaHub

Scenario: EnvRegistry extension creates new instance of EnvRegistry while registering itself
  Given  A Workspace with EnvRegistry extension
  When  EnvRegistry extension registers itself to the Workspace
  Then  An EnvRegistry instance is available

Scenario: EnvRegistry extension tries to register with bad configuration
  Given  A Workspace with EnvRegistry extension
  When  EnvRegistry extension tries to register with a configuration with invalid format
  Then  an error is thrown
  
