// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/workspaces/list',
  operationId: 'get_all_workspaces_v1_workspaces_list_post',
};

export const tool: Tool = {
  name: 'list_workspaces',
  description: 'Get all Workspaces',
  inputSchema: {
    type: 'object',
    properties: {
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
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.workspaces.list(body));
};

export default { metadata, tool, handler };
