Feature: Create Environment registry extension for CapsulaHub

Scenario: EnvRegistry extension creates new instance of EnvRegistry while registering itself
  Given A Workspace with EnvRegistry extension
  When  EnvRegistry extension registers itself to the Workspace
  Then  An EnvRegistry instance is available

Scenario: Bootsrap function resolves before EnvRegistry is registered
  Given A Workspace with EnvRegistry extension
  When EnvRegistry extension returns a bootstrap function
  Then Bootstrap function is resolved
  And  EnvRegistry extension registers itself to the Workspace
