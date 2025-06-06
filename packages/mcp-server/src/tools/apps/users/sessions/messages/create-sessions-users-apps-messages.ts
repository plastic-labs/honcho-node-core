// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.sessions.messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/sessions/{session_id}/messages',
  operationId:
    'create_message_for_session_v1_apps__app_id__users__user_id__sessions__session_id__messages_post',
};

export const tool: Tool = {
  name: 'create_sessions_users_apps_messages',
  description: 'Adds a message to a session',
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
      content: {
        type: 'string',
        title: 'Content',
      },
      is_user: {
        type: 'boolean',
        title: 'Is User',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, session_id, ...body } = args as any;
  return asTextContentResult(
    await client.apps.users.sessions.messages.create(app_id, user_id, session_id, body),
  );
};

export default { metadata, tool, handler };
