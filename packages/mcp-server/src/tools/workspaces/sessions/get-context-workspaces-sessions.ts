// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nProduce a context object from the session. The caller provides an optional token limit which the entire context must fit into.\nIf not provided, the context will be exhaustive (within configured max tokens). To do this, we allocate 40% of the token limit\nto the summary, and 60% to recent messages -- as many as can fit. Note that the summary will usually take up less space than\nthis. If the caller does not want a summary, we allocate all the tokens to recent messages.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'SessionContext',\n  properties: {\n    id: {\n      type: 'string',\n      title: 'Id'\n    },\n    messages: {\n      type: 'array',\n      title: 'Messages',\n      items: {\n        $ref: '#/$defs/message'\n      }\n    },\n    summary: {\n      type: 'object',\n      title: 'Summary',\n      description: 'The summary if available',\n      properties: {\n        content: {\n          type: 'string',\n          title: 'Content',\n          description: 'The summary text'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'The timestamp of when the summary was created (ISO format)'\n        },\n        message_id: {\n          type: 'integer',\n          title: 'Message Id',\n          description: 'The ID of the message that this summary covers up to'\n        },\n        summary_type: {\n          type: 'string',\n          title: 'Summary Type',\n          description: 'The type of summary (short or long)'\n        },\n        token_count: {\n          type: 'integer',\n          title: 'Token Count',\n          description: 'The number of tokens in the summary text'\n        }\n      },\n      required: [        'content',\n        'created_at',\n        'message_id',\n        'summary_type',\n        'token_count'\n      ]\n    }\n  },\n  required: [    'id',\n    'messages'\n  ],\n  $defs: {\n    message: {\n      type: 'object',\n      title: 'Message',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          type: 'string',\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        peer_id: {\n          type: 'string',\n          title: 'Peer Id'\n        },\n        session_id: {\n          type: 'string',\n          title: 'Session Id'\n        },\n        token_count: {\n          type: 'integer',\n          title: 'Token Count'\n        },\n        workspace_id: {\n          type: 'string',\n          title: 'Workspace Id'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'peer_id',\n        'session_id',\n        'token_count',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
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
        description: 'Whether or not to include a summary *if* one is available for the session',
      },
      tokens: {
        type: 'integer',
        title: 'Tokens',
        description:
          'Number of tokens to use for the context. Includes summary if set to true. If not provided, the context will be exhaustive (within 100000 tokens)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id', 'session_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.workspaces.sessions.getContext(workspace_id, session_id, body)),
  );
};

export default { metadata, tool, handler };
