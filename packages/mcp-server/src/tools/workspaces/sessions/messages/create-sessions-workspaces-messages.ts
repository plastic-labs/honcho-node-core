// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions.messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/sessions/{session_id}/messages/',
  operationId:
    'create_messages_for_session_v2_workspaces__workspace_id__sessions__session_id__messages__post',
};

export const tool: Tool = {
  name: 'create_sessions_workspaces_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate messages for a session with JSON data (original functionality).\n\n# Response Schema\n```json\n{\n  type: 'array',\n  title: 'Response Create Messages For Session V2 Workspaces  Workspace Id  Sessions  Session Id  Messages  Post',\n  items: {\n    $ref: '#/$defs/message'\n  },\n  $defs: {\n    message: {\n      type: 'object',\n      title: 'Message',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          type: 'string',\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        peer_id: {\n          type: 'string',\n          title: 'Peer Id'\n        },\n        session_id: {\n          type: 'string',\n          title: 'Session Id'\n        },\n        token_count: {\n          type: 'integer',\n          title: 'Token Count'\n        },\n        workspace_id: {\n          type: 'string',\n          title: 'Workspace Id'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'peer_id',\n        'session_id',\n        'token_count',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
      },
      messages: {
        type: 'array',
        title: 'Messages',
        items: {
          $ref: '#/$defs/message_create',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id', 'session_id', 'messages'],
    $defs: {
      message_create: {
        type: 'object',
        title: 'MessageCreate',
        properties: {
          content: {
            type: 'string',
            title: 'Content',
          },
          peer_id: {
            type: 'string',
            title: 'Peer Id',
          },
          created_at: {
            type: 'string',
            title: 'Created At',
            format: 'date-time',
          },
          metadata: {
            type: 'object',
            title: 'Metadata',
          },
        },
        required: ['content', 'peer_id'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.workspaces.sessions.messages.create(workspace_id, session_id, body),
    ),
  );
};

export default { metadata, tool, handler };
