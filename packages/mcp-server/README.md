# honcho-ai MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export HONCHO_API_KEY="My API Key"
export HONCHO_ENVIRONMENT="demo"
npx -y @honcho-ai/mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "honcho_ai_core_api": {
      "command": "npx",
      "args": ["-y", "@honcho-ai/mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "HONCHO_API_KEY": "My API Key",
        "HONCHO_ENVIRONMENT": "demo"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=@honcho-ai/mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBob25jaG8tYWkvbWNwIl0sImVudiI6eyJIT05DSE9fQVBJX0tFWSI6IlNldCB5b3VyIEhPTkNIT19BUElfS0VZIGhlcmUuIn19)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40honcho-ai%2Fmcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40honcho-ai%2Fmcp%22%5D%2C%22env%22%3A%7B%22HONCHO_API_KEY%22%3A%22Set%20your%20HONCHO_API_KEY%20here.%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add --transport stdio honcho_ai_core_api --env HONCHO_API_KEY="Your HONCHO_API_KEY here." -- npx -y @honcho-ai/mcp
```

## Exposing endpoints to your MCP Client

There are three ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API
3. Exposing a docs search tool and a code execution tool, allowing the client to write code to be executed against the TypeScript client

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Code execution

If you specify `--tools=code` to the MCP server, it will expose just two tools:

- `search_docs` - Searches the API documentation and returns a list of markdown results
- `execute` - Runs code against the TypeScript client

This allows the LLM to implement more complex logic by chaining together many API calls without loading
intermediary results into its context window.

The code execution itself happens in a Deno sandbox that has network access only to the base URL for the API.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ------------------ | ------------------------ | --------------- |
| `x-honcho-api-key` | `apiKey` | HTTPBearer |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "honcho_ai_core_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@honcho-ai/mcp/server";

// import a specific tool
import updateWorkspaces from "@honcho-ai/mcp/tools/workspaces/update-workspaces";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [updateWorkspaces, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `workspaces`:

- `update_workspaces` (`write`): Update a Workspace
- `list_workspaces` (`write`): Get all Workspaces
- `delete_workspaces` (`write`): Delete a Workspace
- `deriver_status_workspaces` (`read`): Get the deriver processing status, optionally scoped to an observer, sender, and/or session
- `get_or_create_workspaces` (`write`): Get a Workspace by ID.

  If workspace_id is provided as a query parameter, it uses that (must match JWT workspace_id).
  Otherwise, it uses the workspace_id from the JWT.

- `search_workspaces` (`write`): Search a Workspace
- `trigger_dream_workspaces` (`write`): Manually trigger a dream task immediately for a specific collection.

  This endpoint bypasses all automatic dream conditions (document threshold,
  minimum hours between dreams) and executes the dream task immediately without delay.

### Resource `workspaces.observations`:

- `create_workspaces_observations` (`write`): Create one or more observations.

  Creates observations (theory-of-mind facts) for the specified observer/observed peer pairs.
  Each observation must reference existing peers and a session within the workspace.
  Embeddings are automatically generated for semantic search.

  Maximum of 100 observations per request.

- `list_workspaces_observations` (`write`): List all observations using custom filters. Observations are listed by recency unless `reverse` is set to `true`.

  Observations can be filtered by session_id, observer_id and observed_id using the filters parameter.

- `delete_workspaces_observations` (`write`): Delete a specific observation.

  This permanently deletes the observation (document) from the theory-of-mind system.
  This action cannot be undone.

- `query_workspaces_observations` (`write`): Query observations using semantic search.

  Performs vector similarity search on observations to find semantically relevant results.
  Observer and observed are required for semantic search and must be provided in filters.

### Resource `workspaces.peers`:

- `update_workspaces_peers` (`write`): Update a Peer's name and/or metadata
- `list_workspaces_peers` (`write`): Get All Peers for a Workspace
- `card_workspaces_peers` (`read`): Get a peer card for a specific peer relationship.

  Returns the peer card that the observer peer has for the target peer if it exists.
  If no target is specified, returns the observer's own peer card.

- `chat_workspaces_peers` (`write`): Chat
- `get_context_workspaces_peers` (`read`): Get context for a peer, including their representation and peer card.

  This endpoint returns the working representation and peer card for a peer.
  If a target is specified, returns the context for the target from the
  observer peer's perspective. If no target is specified, returns the
  peer's own context (self-observation).

  This is useful for getting all the context needed about a peer without
  making multiple API calls.

- `get_or_create_workspaces_peers` (`write`): Get a Peer by ID

  If peer_id is provided as a query parameter, it uses that (must match JWT workspace_id).
  Otherwise, it uses the peer_id from the JWT.

- `search_workspaces_peers` (`write`): Search a Peer
- `set_card_workspaces_peers` (`write`): Set a peer card for a specific peer relationship.

  Sets the peer card that the observer peer has for the target peer.
  If no target is specified, sets the observer's own peer card.

- `working_representation_workspaces_peers` (`write`): Get a peer's working representation for a session.

  If a session_id is provided in the body, we get the working representation of the peer in that session.
  If a target is provided, we get the representation of the target from the perspective of the peer.
  If no target is provided, we get the omniscient Honcho representation of the peer.

### Resource `workspaces.peers.sessions`:

- `list_peers_workspaces_sessions` (`write`): Get All Sessions for a Peer

### Resource `workspaces.sessions`:

- `update_workspaces_sessions` (`write`): Update the metadata of a Session
- `list_workspaces_sessions` (`write`): Get All Sessions in a Workspace
- `delete_workspaces_sessions` (`write`): Delete a session and all associated data.

  The session is marked as inactive immediately and returns 202 Accepted. The actual
  deletion of all related data (messages, embeddings, documents, etc.) happens
  asynchronously via the queue with retry support.

  This action cannot be undone.

- `clone_workspaces_sessions` (`read`): Clone a session, optionally up to a specific message
- `get_context_workspaces_sessions` (`read`): Produce a context object from the session. The caller provides an optional token limit which the entire context must fit into.
  If not provided, the context will be exhaustive (within configured max tokens). To do this, we allocate 40% of the token limit
  to the summary, and 60% to recent messages -- as many as can fit. Note that the summary will usually take up less space than
  this. If the caller does not want a summary, we allocate all the tokens to recent messages.
- `get_or_create_workspaces_sessions` (`write`): Get a specific session in a workspace.

  If session_id is provided as a query parameter, it verifies the session is in the workspace.
  Otherwise, it uses the session_id from the JWT for verification.

- `search_workspaces_sessions` (`write`): Search a Session
- `summaries_workspaces_sessions` (`read`): Get available summaries for a session.

  Returns both short and long summaries if available, including metadata like
  the message ID they cover up to, creation timestamp, and token count.

### Resource `workspaces.sessions.messages`:

- `create_sessions_workspaces_messages` (`write`): Add new message(s) to a session.
- `retrieve_sessions_workspaces_messages` (`read`): Get a Message by ID
- `update_sessions_workspaces_messages` (`write`): Update the metadata of a Message
- `list_sessions_workspaces_messages` (`write`): Get all messages for a session
- `upload_sessions_workspaces_messages` (`write`): Create messages from uploaded files. Files are converted to text and split into multiple messages.

### Resource `workspaces.sessions.peers`:

- `list_sessions_workspaces_peers` (`read`): Get peers from a session
- `add_sessions_workspaces_peers` (`write`): Add peers to a session
- `get_config_sessions_workspaces_peers` (`read`): Get the configuration for a peer in a session
- `remove_sessions_workspaces_peers` (`write`): Remove peers from a session
- `set_sessions_workspaces_peers` (`write`): Set the peers in a session
- `set_config_sessions_workspaces_peers` (`write`): Set the configuration for a peer in a session

### Resource `workspaces.webhooks`:

- `list_workspaces_webhooks` (`read`): List all webhook endpoints, optionally filtered by workspace.
- `delete_workspaces_webhooks` (`write`): Delete a specific webhook endpoint.
- `get_or_create_workspaces_webhooks` (`write`): Get or create a webhook endpoint URL.
- `test_emit_workspaces_webhooks` (`read`): Test publishing a webhook event.

### Resource `keys`:

- `create_keys` (`write`): Create a new Key
