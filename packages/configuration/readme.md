# Configuration service extension for CapsulaHub

Service that you can use for managing different configurations across your projects.
Configuration service gives you possibility to easily menage your configurations.
Use different providers to persist configuration over remote service, localStorage, http, web sockets, file, etc.

## Using Configuration service

- [Setup](https://github.com/capsulajs/capsulahub-extensions/packages/configuration/blob/master/docs/c.md)
- [API](https://github.com/capsulajs/capsulahub-extensions/packages/configuration/blob/master/docs/api.md)

Possible providers [More](https://github.com/capsulajs/configuration-service/tree/develop/src/provider):

- RemoteProvider
- LocalStorageProvider
- FileProvider
- HttpProvider

Default provider:

- FileProvider

Possible dispatchers [More](https://github.com/capsulajs/capsulajs-transport-providers):

- AxiosDispatcher
- WebSocketDispatcher
