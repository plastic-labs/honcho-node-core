// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Honcho from '@honcho/core';

export const metadata: Metadata = {
  resource: 'workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/workspaces/{workspace_id}',
  operationId: 'update_workspace_v1_workspaces__workspace_id__put',
};

export const tool: Tool = {
  name: 'update_workspaces',
  description: 'Update a Workspace',
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace to update',
      },
      configuration: {
        type: 'object',
        title: 'Configuration',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.update(workspace_id, body));
};

export default { metadata, tool, handler };
