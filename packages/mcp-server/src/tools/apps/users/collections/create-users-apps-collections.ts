// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.collections',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/collections',
  operationId: 'create_collection_v1_apps__app_id__users__user_id__collections_post',
};

export const tool: Tool = {
  name: 'create_users_apps_collections',
  description: 'Create a new Collection',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
        description: 'ID of the app',
      },
      user_id: {
        type: 'string',
        title: 'User Id',
        description: 'ID of the user',
      },
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
  const { app_id, user_id, ...body } = args as any;
  return client.apps.users.collections.create(app_id, user_id, body);
};

export default { metadata, tool, handler };
