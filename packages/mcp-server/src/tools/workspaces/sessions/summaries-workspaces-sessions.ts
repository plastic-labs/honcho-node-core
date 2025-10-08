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
  httpPath: '/v2/workspaces/{workspace_id}/sessions/{session_id}/summaries',
  operationId: 'get_session_summaries_v2_workspaces__workspace_id__sessions__session_id__summaries_get',
};

export const tool: Tool = {
  name: 'summaries_workspaces_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet available summaries for a session.\n\nReturns both short and long summaries if available, including metadata like\nthe message ID they cover up to, creation timestamp, and token count.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'SessionSummaries',\n  properties: {\n    id: {\n      type: 'string',\n      title: 'Id'\n    },\n    long_summary: {\n      type: 'object',\n      title: 'Summary',\n      description: 'The long summary if available',\n      properties: {\n        content: {\n          type: 'string',\n          title: 'Content',\n          description: 'The summary text'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'The timestamp of when the summary was created (ISO format)'\n        },\n        message_id: {\n          type: 'string',\n          title: 'Message Id',\n          description: 'The public ID of the message that this summary covers up to'\n        },\n        summary_type: {\n          type: 'string',\n          title: 'Summary Type',\n          description: 'The type of summary (short or long)'\n        },\n        token_count: {\n          type: 'integer',\n          title: 'Token Count',\n          description: 'The number of tokens in the summary text'\n        }\n      },\n      required: [        'content',\n        'created_at',\n        'message_id',\n        'summary_type',\n        'token_count'\n      ]\n    },\n    short_summary: {\n      type: 'object',\n      title: 'Summary',\n      description: 'The short summary if available',\n      properties: {\n        content: {\n          type: 'string',\n          title: 'Content',\n          description: 'The summary text'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'The timestamp of when the summary was created (ISO format)'\n        },\n        message_id: {\n          type: 'string',\n          title: 'Message Id',\n          description: 'The public ID of the message that this summary covers up to'\n        },\n        summary_type: {\n          type: 'string',\n          title: 'Summary Type',\n          description: 'The type of summary (short or long)'\n        },\n        token_count: {\n          type: 'integer',\n          title: 'Token Count',\n          description: 'The number of tokens in the summary text'\n        }\n      },\n      required: [        'content',\n        'created_at',\n        'message_id',\n        'summary_type',\n        'token_count'\n      ]\n    }\n  },\n  required: [    'id'\n  ]\n}\n```",
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
    await maybeFilter(jq_filter, await client.workspaces.sessions.summaries(workspace_id, session_id)),
  );
};

export default { metadata, tool, handler };
