// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/workspaces/{workspace_id}/webhooks/{endpoint_id}',
  operationId: 'delete_webhook_endpoint_v2_workspaces__workspace_id__webhooks__endpoint_id__delete',
};

export const tool: Tool = {
  name: 'delete_workspaces_webhooks',
  description: 'Delete a specific webhook endpoint.',
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'Workspace ID',
      },
      endpoint_id: {
        type: 'string',
        title: 'Endpoint Id',
        description: 'Webhook endpoint ID',
      },
    },
    required: ['workspace_id', 'endpoint_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, endpoint_id, ...body } = args as any;
  return asTextContentResult((await client.workspaces.webhooks.delete(workspace_id, endpoint_id)) as object);
};

export default { metadata, tool, handler };
