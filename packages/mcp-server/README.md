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

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

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
- `deriver_status_workspaces` (`read`): Get the deriver processing status, optionally scoped to an observer, sender, and/or session
- `get_or_create_workspaces` (`write`): Get a Workspace by ID.

  If workspace_id is provided as a query parameter, it uses that (must match JWT workspace_id).
  Otherwise, it uses the workspace_id from the JWT token.

- `search_workspaces` (`write`): Search a Workspace

### Resource `workspaces.peers`:

- `update_workspaces_peers` (`write`): Update a Peer's name and/or metadata
- `list_workspaces_peers` (`write`): Get All Peers for a Workspace
- `chat_workspaces_peers` (`write`): Chat
- `get_or_create_workspaces_peers` (`write`): Get a Peer by ID

  If peer_id is provided as a query parameter, it uses that (must match JWT workspace_id).
  Otherwise, it uses the peer_id from the JWT token.

- `search_workspaces_peers` (`write`): Search a Peer
- `working_representation_workspaces_peers` (`write`): Get a peer's working representation for a session.

  If a session_id is provided in the body, we get the working representation of the peer in that session.
  If a target is provided, we get the representation of the target from the perspective of the peer.
  If no target is provided, we get the global representation of the peer.

### Resource `workspaces.peers.sessions`:

- `list_peers_workspaces_sessions` (`write`): Get All Sessions for a Peer

### Resource `workspaces.sessions`:

- `update_workspaces_sessions` (`write`): Update the metadata of a Session
- `list_workspaces_sessions` (`write`): Get All Sessions in a Workspace
- `delete_workspaces_sessions` (`write`): Delete a session by marking it as inactive
- `clone_workspaces_sessions` (`read`): Clone a session, optionally up to a specific message
- `get_context_workspaces_sessions` (`read`): Produce a context object from the session. The caller provides a token limit which the entire context must fit into.
  To do this, we allocate 40% of the token limit to the summary, and 60% to recent messages -- as many as can fit.
  If the caller does not want a summary, we allocate all the tokens to recent messages.
  The default token limit if not provided is 2048. (TODO: make this configurable)
- `get_or_create_workspaces_sessions` (`write`): Get a specific session in a workspace.

  If session_id is provided as a query parameter, it verifies the session is in the workspace.
  Otherwise, it uses the session_id from the JWT token for verification.

- `search_workspaces_sessions` (`write`): Search a Session

### Resource `workspaces.sessions.messages`:

- `create_sessions_workspaces_messages` (`write`): Create Messages For Session
- `retrieve_sessions_workspaces_messages` (`read`): Get a Message by ID
- `update_sessions_workspaces_messages` (`write`): Update the metadata of a Message
- `list_sessions_workspaces_messages` (`write`): Get all messages for a session

### Resource `workspaces.sessions.peers`:

- `list_sessions_workspaces_peers` (`read`): Get peers from a session
- `add_sessions_workspaces_peers` (`write`): Add peers to a session
- `get_config_sessions_workspaces_peers` (`read`): Get the configuration for a peer in a session
- `remove_sessions_workspaces_peers` (`write`): Remove peers from a session
- `set_sessions_workspaces_peers` (`write`): Set the peers in a session
- `set_config_sessions_workspaces_peers` (`write`): Set the configuration for a peer in a session

### Resource `keys`:

- `create_keys` (`write`): Create a new Key
