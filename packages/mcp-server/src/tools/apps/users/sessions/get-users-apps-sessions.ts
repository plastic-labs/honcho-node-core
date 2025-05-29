// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/sessions',
  operationId: 'get_session_v1_apps__app_id__users__user_id__sessions_get',
};

export const tool: Tool = {
  name: 'get_users_apps_sessions',
  description:
    'Get a specific session for a user.\n\nIf session_id is provided as a query parameter, it uses that (must match JWT session_id).\nOtherwise, it uses the session_id from the JWT token.',
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
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'Session ID to retrieve. If not provided, uses JWT token',
      },
    },
  },
};

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, ...body } = args as any;
  return client.apps.users.sessions.get(app_id, user_id, body);
};

export default { metadata, tool, handler };
