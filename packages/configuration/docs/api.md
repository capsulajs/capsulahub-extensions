## API

- [createRepository()](#createRepository--api)
- [delete()](#delete--api)
- [entries()](#entries-api)
- [fetch()](#fetch--api)
- [save()](#save--api)

#### createRepository(request: CreateRepositoryRequest): Promise<CreateRepositoryResponse>

```typescript
/**
 * Delete Key Request
 * @repository - Specified name of the repository
 * @key - Specified key name (entry) for relevant configuration setting in the repository
 */
interface CreateRepositoryRequest {
  repository: string;
}

interface CreateRepositoryResponse {}
```

This operation enable you to create the specified Repository for collecting and storing the relevant entries and requires a write permission level granted for owner role only

##### Example:

```typescript
await configurationService.createRepository({ repository: 'testRepo' });
```

##### Example response:

```typescript
{
  repository: 'testRepo';
}
```

#### delete(request: DeleteRequest): Promise<DeleteResponse>

```typescript
/**
 * Delete Key Request
 * @repository - Specified name of the repository
 * @key - Specified key name (entry) for relevant configuration setting in the repository
 */
interface DeleteRequest {
  repository: string;
  key?: string;
}

interface DeleteResponse {}
```

This operation enable you to delete a specified entry (key) from the relevant Repository and requires a write level permission granted for owner either admin role only

##### Example:

```typescript
await configurationService.delete({ repository: 'testRepo', key: 'testKey' });
```

##### Example response:

```js
{
}
```

#### entries(request: EntriesRequest): Promise<EntriesResponse<T>>

```typescript
export interface EntriesRequest {
  repository: string;
}

/**
 * Entries Response
 * @entries - List of all entries from the relevant configuration setting in the repository (Array of Objects)
 * @key - Specified node name applied for relevant configuration settings in the repository
 * @value - Specified key name (entry) for relevant configuration setting in the repository
 */
export interface EntriesResponse<T = any> {
  entries: Array<Entity<T>>;
}

export interface Entity<T = any> {
  key: string;
  value: T;
}
```

This operation enable you to get all values (array of objects) by retrieving all the entries (keys) from the relevant Repository and enabled for each accessible permission level (read&write) granted for owner either admin or member role

##### Example:

```typescript
await configurationService.entries({ repository: 'testRepo' });
```

##### Example response:

```js
{
  entries: [{ key: 'testKey', value: 'testValue' }];
}
```

#### fetch(request: FetchRequest): Promise<FetchResponse>

```typescript
/**
 * Fetch Value Request
 * @repository - Specified name of the repository
 * @key - Specified key name (entry) for relevant configuration setting in the repository
 */
export interface FetchRequest {
  repository: string;
  key: string;
}

/**
 * Fetch Value Response
 * @key - Specified key name (entry) for relevant configuration setting in the repository
 * @value - Specified node name applied for relevant configuration settings in the repository
 */
export interface FetchResponse<T = any> {
  key: string;
  value: T;
}
```

This operation enable you to get the value of the specified key

##### Example:

```typescript
await configurationService.fetch({ repository: 'testRepo', key: 'testKey' });
```

##### Example response:

```js
{ key: 'testKey', value: 'testValue' }
```

#### save(request: SaveRequest): Promise<SaveResponse>

```typescript
/**
 * Save Value Request
 * @repository - Specified name of the repository
 * @key - Specified key name (entry) for relevant configuration setting in the repository
 * @value - Specified node (entry) name applied for relevant configuration settings in the repository
 */
export interface SaveRequest<T = any> {
  repository: string;
  key: string;
  value: T;
}

/**
 * Save Value Response
 */
export interface SaveResponse {}
```

This operation enable you to get the value of the specified key

##### Example:

```typescript
await configurationService.save({ repository: 'testRepo', key: 'testKey', value: 'testKey' });
```

##### Example response:

```js
{
}
```
