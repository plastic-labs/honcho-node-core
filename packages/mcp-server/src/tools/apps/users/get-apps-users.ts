// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{app_id}/users',
  operationId: 'get_user_v1_apps__app_id__users_get',
};

export const tool: Tool = {
  name: 'get_apps_users',
  description:
    'Get a User by ID\n\nIf user_id is provided as a query parameter, it uses that (must match JWT app_id).\nOtherwise, it uses the user_id from the JWT token.',
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
        description: 'User ID to retrieve. If not provided, users JWT token',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, ...body } = args as any;
  return asTextContentResult(await client.apps.users.get(app_id, body));
};

export default { metadata, tool, handler };
