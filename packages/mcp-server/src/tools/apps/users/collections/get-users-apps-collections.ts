// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.collections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/collections',
  operationId: 'get_collection_v1_apps__app_id__users__user_id__collections_get',
};

export const tool: Tool = {
  name: 'get_users_apps_collections',
  description:
    'Get a specific collection for a user.\n\nIf collection_id is provided as a query parameter, it uses that (must match JWT collection_id).\nOtherwise, it uses the collection_id from the JWT token.',
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
      collection_id: {
        type: 'string',
        title: 'Collection Id',
        description: 'Collection ID to retrieve. If not provided, uses JWT token',
      },
    },
  },
};

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, ...body } = args as any;
  return client.apps.users.collections.get(app_id, user_id, body);
};

export default { metadata, tool, handler };
