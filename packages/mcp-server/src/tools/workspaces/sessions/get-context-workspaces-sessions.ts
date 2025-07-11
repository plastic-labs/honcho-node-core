// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@honcho-ai/mcp/filtering';
import { asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/workspaces/{workspace_id}/sessions/{session_id}/context',
  operationId: 'get_session_context_v2_workspaces__workspace_id__sessions__session_id__context_get',
};

export const tool: Tool = {
  name: 'get_context_workspaces_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nProduce a context object from the session. The caller provides a token limit which the entire context must fit into.\nTo do this, we allocate 40% of the token limit to the summary, and 60% to recent messages -- as many as can fit.\nIf the caller does not want a summary, we allocate all the tokens to recent messages.\nThe default token limit if not provided is 2048. (TODO: make this configurable)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'SessionContext',\n  properties: {\n    id: {\n      type: 'string',\n      title: 'Id'\n    },\n    messages: {\n      type: 'array',\n      title: 'Messages',\n      items: {\n        $ref: '#/$defs/message'\n      }\n    },\n    summary: {\n      type: 'string',\n      title: 'Summary'\n    }\n  },\n  required: [    'id',\n    'messages',\n    'summary'\n  ],\n  $defs: {\n    message: {\n      type: 'object',\n      title: 'Message',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          type: 'string',\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        peer_id: {\n          type: 'string',\n          title: 'Peer Id'\n        },\n        session_id: {\n          type: 'string',\n          title: 'Session Id'\n        },\n        token_count: {\n          type: 'integer',\n          title: 'Token Count'\n        },\n        workspace_id: {\n          type: 'string',\n          title: 'Workspace Id'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'peer_id',\n        'session_id',\n        'token_count',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
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
      summary: {
        type: 'boolean',
        title: 'Summary',
        description: 'Whether to summarize the session history prior to the cutoff message',
      },
      tokens: {
        type: 'integer',
        title: 'Tokens',
        description: 'Number of tokens to use for the context. Includes summary if set to true',
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
  return asTextContentResult(
    await maybeFilter(args, await client.workspaces.sessions.getContext(workspace_id, session_id, body)),
  );
};

export default { metadata, tool, handler };
