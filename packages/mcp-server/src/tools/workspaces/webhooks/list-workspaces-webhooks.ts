// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.webhooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/workspaces/{workspace_id}/webhooks',
  operationId: 'list_webhook_endpoints_v2_workspaces__workspace_id__webhooks_get',
};

export const tool: Tool = {
  name: 'list_workspaces_webhooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all webhook endpoints, optionally filtered by workspace.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Page[WebhookEndpoint]',\n  properties: {\n    items: {\n      type: 'array',\n      title: 'Items',\n      items: {\n        $ref: '#/$defs/webhook_endpoint'\n      }\n    },\n    page: {\n      type: 'integer',\n      title: 'Page'\n    },\n    size: {\n      type: 'integer',\n      title: 'Size'\n    },\n    pages: {\n      type: 'integer',\n      title: 'Pages'\n    },\n    total: {\n      type: 'integer',\n      title: 'Total'\n    }\n  },\n  required: [    'items',\n    'page',\n    'size'\n  ],\n  $defs: {\n    webhook_endpoint: {\n      type: 'object',\n      title: 'WebhookEndpoint',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        url: {\n          type: 'string',\n          title: 'Url'\n        },\n        workspace_id: {\n          type: 'string',\n          title: 'Workspace Id'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'url',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'Workspace ID',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, jq_filter, ...body } = args as any;
  const response = await client.workspaces.webhooks.list(workspace_id, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
