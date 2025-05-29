// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.collections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/collections/name/{name}',
  operationId: 'get_collection_by_name_v1_apps__app_id__users__user_id__collections_name__name__get',
};

export const tool: Tool = {
  name: 'get_by_name_users_apps_collections',
  description: 'Get a Collection by Name',
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
        description: 'Name of the collection to retrieve',
      },
    },
  },
};

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, name, ...body } = args as any;
  return client.apps.users.collections.getByName(app_id, user_id, name);
};

export default { metadata, tool, handler };
