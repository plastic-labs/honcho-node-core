// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Honcho from '@honcho/core';

export const metadata: Metadata = {
  resource: 'workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/workspaces',
  operationId: 'get_or_create_workspace_v1_workspaces_post',
};

export const tool: Tool = {
  name: 'get_or_create_workspaces',
  description:
    'Get a Workspace by ID.\n\nIf workspace_id is provided as a query parameter, it uses that (must match JWT workspace_id).\nOtherwise, it uses the workspace_id from the JWT token.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        title: 'Id',
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
  const body = args as any;
  return asTextContentResult(await client.workspaces.getOrCreate(body));
};

export default { metadata, tool, handler };
