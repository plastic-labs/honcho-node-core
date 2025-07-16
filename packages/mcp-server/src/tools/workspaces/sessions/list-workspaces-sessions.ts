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
  httpPath: '/v2/workspaces/{workspace_id}/sessions/list',
  operationId: 'get_sessions_v2_workspaces__workspace_id__sessions_list_post',
};

export const tool: Tool = {
  name: 'list_workspaces_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet All Sessions in a Workspace\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/page_session',\n  $defs: {\n    page_session: {\n      type: 'object',\n      title: 'Page[Session]',\n      properties: {\n        items: {\n          type: 'array',\n          title: 'Items',\n          items: {\n            $ref: '#/$defs/session'\n          }\n        },\n        page: {\n          type: 'integer',\n          title: 'Page'\n        },\n        size: {\n          type: 'integer',\n          title: 'Size'\n        },\n        pages: {\n          type: 'integer',\n          title: 'Pages'\n        },\n        total: {\n          type: 'integer',\n          title: 'Total'\n        }\n      },\n      required: [        'items',\n        'page',\n        'size'\n      ]\n    },\n    session: {\n      type: 'object',\n      title: 'Session',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        is_active: {\n          type: 'boolean',\n          title: 'Is Active'\n        },\n        workspace_id: {\n          type: 'string',\n          title: 'Workspace Id'\n        },\n        configuration: {\n          type: 'object',\n          title: 'Configuration'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'is_active',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
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
      filter: {
        type: 'object',
        title: 'Filter',
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
  const { workspace_id, ...body } = args as any;
  const response = await client.workspaces.sessions.list(workspace_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
