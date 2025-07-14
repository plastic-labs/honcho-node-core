# honcho-ai API Library

[![NPM version](https://img.shields.io/npm/v/@honcho-ai/core.svg)](https://npmjs.org/package/@honcho-ai/core) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@honcho-ai/core)

This library provides convenient access to the Honcho REST API from server-side TypeScript or JavaScript.

The REST API documentation can be found on [docs.honcho.dev](https://docs.honcho.dev). The full API of this library can be found in [api.md](api.md).

It is generated with [Stainless](https://www.stainless.com/).

## Installation

```sh
npm install @honcho-ai/core
```

## Usage

The full API of this library can be found in [api.md](api.md).

<!-- prettier-ignore -->
```js
import Honcho from '@honcho-ai/core';

const client = new Honcho({
  apiKey: process.env['HONCHO_API_KEY'], // This is the default and can be omitted
  environment: 'local', // or 'demo' | 'production'; defaults to 'demo'
});

const workspace = await client.workspaces.getOrCreate({ id: 'id' });

console.log(workspace.id);
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

<!-- prettier-ignore -->
```ts
import Honcho from '@honcho-ai/core';

const client = new Honcho({
  apiKey: process.env['HONCHO_API_KEY'], // This is the default and can be omitted
  environment: 'local', // or 'demo' | 'production'; defaults to 'demo'
});

const params: Honcho.WorkspaceGetOrCreateParams = { id: 'id' };
const workspace: Honcho.Workspace = await client.workspaces.getOrCreate(params);
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## File uploads

Request parameters that correspond to file uploads can be passed in many different forms:

- `File` (or an object with the same structure)
- a `fetch` `Response` (or an object with the same structure)
- an `fs.ReadStream`
- the return value of our `toFile` helper

```ts
import fs from 'fs';
import fetch from 'node-fetch';
import Honcho, { toFile } from '@honcho-ai/core';

const client = new Honcho();

// If you have access to Node `fs` we recommend using `fs.createReadStream()`:
await client.workspaces.peers.messages.upload('workspace_id', 'peer_id', {
  file: fs.createReadStream('/path/to/file'),
});

// Or if you have the web `File` API you can pass a `File` instance:
await client.workspaces.peers.messages.upload('workspace_id', 'peer_id', {
  file: new File(['my bytes'], 'file'),
});

// You can also pass a `fetch` `Response`:
await client.workspaces.peers.messages.upload('workspace_id', 'peer_id', {
  file: await fetch('https://somesite/file'),
});

// Finally, if none of the above are convenient, you can use our `toFile` helper:
await client.workspaces.peers.messages.upload('workspace_id', 'peer_id', {
  file: await toFile(Buffer.from('my bytes'), 'file'),
});
await client.workspaces.peers.messages.upload('workspace_id', 'peer_id', {
  file: await toFile(new Uint8Array([0, 1, 2]), 'file'),
});
```

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
const workspace = await client.workspaces.getOrCreate({ id: 'id' }).catch(async (err) => {
  if (err instanceof Honcho.APIError) {
    console.log(err.status); // 400
    console.log(err.name); // BadRequestError
    console.log(err.headers); // {server: 'nginx', ...}
  } else {
    throw err;
  }
});
```

Error codes are as follows:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const client = new Honcho({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await client.workspaces.getOrCreate({ id: 'id' }, {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const client = new Honcho({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await client.workspaces.getOrCreate({ id: 'id' }, {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Auto-pagination

List methods in the Honcho API are paginated.
You can use the `for await … of` syntax to iterate through items across all pages:

```ts
async function fetchAllPeers(params) {
  const allPeers = [];
  // Automatically fetches more pages as needed.
  for await (const peer of client.workspaces.peers.list('REPLACE_ME')) {
    allPeers.push(peer);
  }
  return allPeers;
}
```

Alternatively, you can request a single page at a time:

```ts
let page = await client.workspaces.peers.list('REPLACE_ME');
for (const peer of page.items) {
  console.log(peer);
}

// Convenience methods are provided for manually paginating:
while (page.hasNextPage()) {
  page = await page.getNextPage();
  // ...
}
```

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.

<!-- prettier-ignore -->
```ts
const client = new Honcho();

const response = await client.workspaces.getOrCreate({ id: 'id' }).asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: workspace, response: raw } = await client.workspaces.getOrCreate({ id: 'id' }).withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(workspace.id);
```

### Making custom/undocumented requests

This library is typed for convenient access to the documented API. If you need to access undocumented
endpoints, params, or response properties, the library can still be used.

#### Undocumented endpoints

To make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.
Options on the client, such as retries, will be respected when making these requests.

```ts
await client.post('/some/path', {
  body: { some_prop: 'foo' },
  query: { some_query_arg: 'bar' },
});
```

#### Undocumented request params

To make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented
parameter. This library doesn't validate at runtime that the request matches the type, so any extra values you
send will be sent as-is.

```ts
client.foo.create({
  foo: 'my_param',
  bar: 12,
  // @ts-expect-error baz is not yet public
  baz: 'undocumented option',
});
```

For requests with the `GET` verb, any extra params will be in the query, all other requests will send the
extra param in the body.

If you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request
options.

#### Undocumented response properties

To access undocumented response properties, you may access the response object with `// @ts-expect-error` on
the response object, or cast the response object to the requisite type. Like the request params, we do not
validate or strip extra properties from the response from the API.

### Customizing the fetch client

By default, this library uses `node-fetch` in Node, and expects a global `fetch` function in other environments.

If you would prefer to use a global, web-standards-compliant `fetch` function even in a Node environment,
(for example, if you are running Node with `--experimental-fetch` or using NextJS which polyfills with `undici`),
add the following import before your first import `from "Honcho"`:

```ts
// Tell TypeScript and the package to use the global web fetch instead of node-fetch.
// Note, despite the name, this does not add any polyfills, but expects them to be provided if needed.
import '@honcho-ai/core/shims/web';
import Honcho from '@honcho-ai/core';
```

To do the inverse, add `import "@honcho-ai/core/shims/node"` (which does import polyfills).
This can also be useful if you are getting the wrong TypeScript types for `Response` ([more details](https://github.com/plastic-labs/honcho-node-core/tree/main/src/_shims#readme)).

### Logging and middleware

You may also provide a custom `fetch` function when instantiating the client,
which can be used to inspect or alter the `Request` or `Response` before/after each request:

```ts
import { fetch } from 'undici'; // as one example
import Honcho from '@honcho-ai/core';

const client = new Honcho({
  fetch: async (url: RequestInfo, init?: RequestInit): Promise<Response> => {
    console.log('About to make a request', url, init);
    const response = await fetch(url, init);
    console.log('Got response', response);
    return response;
  },
});
```

Note that if given a `DEBUG=true` environment variable, this library will log all requests and responses automatically.
This is intended for debugging purposes only and may change in the future without notice.

### Configuring an HTTP(S) Agent (e.g., for proxies)

By default, this library uses a stable agent for all http/https requests to reuse TCP connections, eliminating many TCP & TLS handshakes and shaving around 100ms off most requests.

If you would like to disable or customize this behavior, for example to use the API behind a proxy, you can pass an `httpAgent` which is used for all requests (be they http or https), for example:

<!-- prettier-ignore -->
```ts
import http from 'http';
import { HttpsProxyAgent } from 'https-proxy-agent';

// Configure the default for all requests:
const client = new Honcho({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
});

// Override per-request:
await client.workspaces.getOrCreate(
  { id: 'id' },
  {
    httpAgent: new http.Agent({ keepAlive: false }),
  },
);
```

## Semantic versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/plastic-labs/honcho-node-core/issues) with questions, bugs, or suggestions.

## Requirements

TypeScript >= 4.5 is supported.

The following runtimes are supported:

- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)
- Node.js 18 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher.
- Bun 1.0 or later.
- Cloudflare Workers.
- Vercel Edge Runtime.
- Jest 28 or greater with the `"node"` environment (`"jsdom"` is not supported at this time).
- Nitro v2.6 or greater.

Note that React Native is not supported at this time.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.

## Contributing

See [the contributing documentation](./CONTRIBUTING.md).
