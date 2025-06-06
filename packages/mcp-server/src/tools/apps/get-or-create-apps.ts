// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/get_or_create/{name}',
  operationId: 'get_or_create_app_v1_apps_get_or_create__name__get',
};

export const tool: Tool = {
  name: 'get_or_create_apps',
  description: 'Get or Create an App',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        description: 'Name of the app to get or create',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { name, ...body } = args as any;
  return asTextContentResult(await client.apps.getOrCreate(name));
};

export default { metadata, tool, handler };
