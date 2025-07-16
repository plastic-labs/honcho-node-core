// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/sessions/{session_id}/search',
  operationId: 'search_session_v2_workspaces__workspace_id__sessions__session_id__search_post',
};

export const tool: Tool = {
  name: 'search_workspaces_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch a Session\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Page[Message]',\n  properties: {\n    items: {\n      type: 'array',\n      title: 'Items',\n      items: {\n        $ref: '#/$defs/message'\n      }\n    },\n    page: {\n      type: 'integer',\n      title: 'Page'\n    },\n    size: {\n      type: 'integer',\n      title: 'Size'\n    },\n    pages: {\n      type: 'integer',\n      title: 'Pages'\n    },\n    total: {\n      type: 'integer',\n      title: 'Total'\n    }\n  },\n  required: [    'items',\n    'page',\n    'size'\n  ],\n  $defs: {\n    message: {\n      type: 'object',\n      title: 'Message',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          type: 'string',\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        peer_id: {\n          type: 'string',\n          title: 'Peer Id'\n        },\n        session_id: {\n          type: 'string',\n          title: 'Session Id'\n        },\n        token_count: {\n          type: 'integer',\n          title: 'Token Count'\n        },\n        workspace_id: {\n          type: 'string',\n          title: 'Workspace Id'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'peer_id',\n        'session_id',\n        'token_count',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'ID of the session',
      },
      query: {
        type: 'string',
        title: 'Query',
        description: 'Search query',
      },
      page: {
        type: 'integer',
        title: 'Page',
        description: 'Page number',
      },
      size: {
        type: 'integer',
        title: 'Size',
        description: 'Page size',
      },
      semantic: {
        type: 'boolean',
        title: 'Semantic',
        description: 'Whether to explicitly use semantic search to filter the results',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, ...body } = args as any;
  const response = await client.workspaces.sessions.search(workspace_id, session_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
