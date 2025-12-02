// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/webhooks',
  operationId: 'get_or_create_webhook_endpoint_v2_workspaces__workspace_id__webhooks_post',
};

export const tool: Tool = {
  name: 'get_or_create_workspaces_webhooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet or create a webhook endpoint URL.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/webhook_endpoint',\n  $defs: {\n    webhook_endpoint: {\n      type: 'object',\n      title: 'WebhookEndpoint',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        url: {\n          type: 'string',\n          title: 'Url'\n        },\n        workspace_id: {\n          type: 'string',\n          title: 'Workspace Id'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'url',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'Workspace ID',
      },
      url: {
        type: 'string',
        title: 'Url',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id', 'url'],
  },
  annotations: {},
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.workspaces.webhooks.getOrCreate(workspace_id, body)),
    );
  } catch (error) {
    if (error instanceof Honcho.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
