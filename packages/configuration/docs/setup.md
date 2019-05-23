## Setup

```bash
yarn add @capsulajs/capsulahub-core-workspace @capsulajs/capsulahub-extensions-configuration
```

```javascript
# ./config.js

module.exports = {
  name: 'my-app',
  services: [
    {
      serviceName: 'configurationService',
      path: 'https://configuration-service-http.genesis.om2.com',
      definition: {
        serviceName: 'ConfigurationService',
        methods: {
          createRepository: { asyncModel: 'CreateRepositoryResponse' },
          delete: { asyncModel: 'DeleteResponse' },
          entries: { asyncModel: 'EntriesResponse' },
          fetch: { asyncModel: 'FetchResponse' },
          save: { asyncModel: 'SaveResponse' },
        }
      },
      config: {
        provider: 'http'
      }
    },
  ],
  components: {}
};

# ./index.js
import { Workspace } from '@capsulajs/capsulahub-core-workspace';
export default (workspace: Workspace, config: object): Promise<void> => {
  // your code here
};

```
