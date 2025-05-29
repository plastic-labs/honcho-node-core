// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/name/{name}',
  operationId: 'get_app_by_name_v1_apps_name__name__get',
};

export const tool: Tool = {
  name: 'get_by_name_apps',
  description: 'Get an App by Name',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        description: 'Name of the app to retrieve',
      },
    },
  },
};

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { name, ...body } = args as any;
  return client.apps.getByName(name);
};

export default { metadata, tool, handler };
