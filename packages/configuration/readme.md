# Configuration service extension for CapsulaHub

Service that you can use for managing different configurations across your projects.
Configuration service gives you possibility to easily menage your configurations.

## Usage

- [Setup](https://github.com/capsulajs/capsulahub-extensions/packages/configuration/blob/master/docs/c.md)
- [API](https://github.com/capsulajs/capsulahub-extensions/packages/configuration/blob/master/docs/api.md)

## Options

Use different configuration providers to manage your configurations over remote service, localStorage, file, etc.

Possible providers [More](https://github.com/capsulajs/configuration-service/tree/develop/src/provider):

- RemoteProvider
- LocalStorageProvider
- FileProvider
- HttpProvider

Default provider:

- FileProvider

Use different transport providers to setup communication over http or web sockets.

Possible dispatchers [More](https://github.com/capsulajs/capsulajs-transport-providers):

- AxiosDispatcher
- WebSocketDispatcher
