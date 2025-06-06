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
  httpPath: '/v1/apps',
  operationId: 'get_app_v1_apps_get',
};

export const tool: Tool = {
  name: 'get_apps',
  description:
    'Get an App by ID.\n\nIf app_id is provided as a query parameter, it uses that (must match JWT app_id).\nOtherwise, it uses the app_id from the JWT token.',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
        description: 'App ID to retrieve. If not provided, uses JWT token',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.apps.get(body));
};

export default { metadata, tool, handler };
