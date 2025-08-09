// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.webhooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/workspaces/{workspace_id}/webhooks/test',
  operationId: 'test_emit_v2_workspaces__workspace_id__webhooks_test_get',
};

export const tool: Tool = {
  name: 'test_emit_workspaces_webhooks',
  description: 'Test publishing a webhook event.',
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'Workspace ID',
      },
    },
    required: ['workspace_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, ...body } = args as any;
  return asTextContentResult((await client.workspaces.webhooks.testEmit(workspace_id)) as object);
};

export default { metadata, tool, handler };
