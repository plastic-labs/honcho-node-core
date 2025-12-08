// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.conclusions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/workspaces/{workspace_id}/conclusions/{conclusion_id}',
  operationId: 'delete_conclusion_v2_workspaces__workspace_id__conclusions__conclusion_id__delete',
};

export const tool: Tool = {
  name: 'delete_workspaces_conclusions',
  description: 'Delete a specific conclusion (document).',
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      conclusion_id: {
        type: 'string',
        title: 'Conclusion Id',
        description: 'ID of the conclusion to delete',
      },
    },
    required: ['workspace_id', 'conclusion_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, conclusion_id, ...body } = args as any;
  return asTextContentResult(
    (await client.workspaces.conclusions.delete(workspace_id, conclusion_id)) as object,
  );
};

export default { metadata, tool, handler };
