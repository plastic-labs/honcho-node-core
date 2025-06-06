// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/sessions/{session_id}/chat',
  operationId: 'chat_v1_apps__app_id__users__user_id__sessions__session_id__chat_post',
};

export const tool: Tool = {
  name: 'chat_users_apps_sessions',
  description: 'Chat with the Dialectic API',
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
      queries: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        ],
        title: 'Queries',
      },
      stream: {
        type: 'boolean',
        title: 'Stream',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, session_id, ...body } = args as any;
  return asTextContentResult(await client.apps.users.sessions.chat(app_id, user_id, session_id, body));
};

export default { metadata, tool, handler };
