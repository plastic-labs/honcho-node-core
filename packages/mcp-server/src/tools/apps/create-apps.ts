// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/apps',
  operationId: 'create_app_v1_apps_post',
};

export const tool: Tool = {
  name: 'create_apps',
  description: 'Create a new App',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.apps.create(body);
};

export default { metadata, tool, handler };
