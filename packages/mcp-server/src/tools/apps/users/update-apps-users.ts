// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/apps/{app_id}/users/{user_id}',
  operationId: 'update_user_v1_apps__app_id__users__user_id__put',
};

export const tool: Tool = {
  name: 'update_apps_users',
  description: "Update a User's name and/or metadata",
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
        description: 'ID of the user to update',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, ...body } = args as any;
  return asTextContentResult(await client.apps.users.update(app_id, user_id, body));
};

export default { metadata, tool, handler };
