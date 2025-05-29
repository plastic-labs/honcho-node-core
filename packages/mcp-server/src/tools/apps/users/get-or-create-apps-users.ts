// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{app_id}/users/get_or_create/{name}',
  operationId: 'get_or_create_user_v1_apps__app_id__users_get_or_create__name__get',
};

export const tool: Tool = {
  name: 'get_or_create_apps_users',
  description: 'Get a User or create a new one by the input name',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
        description: 'ID of the app',
      },
      name: {
        type: 'string',
        title: 'Name',
        description: 'Name of the user to get or create',
      },
    },
  },
};

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, name, ...body } = args as any;
  return client.apps.users.getOrCreate(app_id, name);
};

export default { metadata, tool, handler };
