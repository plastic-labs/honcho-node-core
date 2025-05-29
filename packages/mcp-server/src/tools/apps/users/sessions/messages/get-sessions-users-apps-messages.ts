// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.sessions.messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/sessions/{session_id}/messages/{message_id}',
  operationId: 'get_message_v1_apps__app_id__users__user_id__sessions__session_id__messages__message_id__get',
};

export const tool: Tool = {
  name: 'get_sessions_users_apps_messages',
  description: 'Get a Message by ID',
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
        description: 'ID of the session',
      },
      message_id: {
        type: 'string',
        title: 'Message Id',
        description: 'ID of the message to retrieve',
      },
    },
  },
};

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, session_id, message_id, ...body } = args as any;
  return client.apps.users.sessions.messages.get(app_id, user_id, session_id, message_id);
};

export default { metadata, tool, handler };
