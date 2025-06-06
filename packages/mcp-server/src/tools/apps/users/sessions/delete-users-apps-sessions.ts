// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/sessions/{session_id}',
  operationId: 'delete_session_v1_apps__app_id__users__user_id__sessions__session_id__delete',
};

export const tool: Tool = {
  name: 'delete_users_apps_sessions',
  description: 'Delete a session by marking it as inactive',
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
        description: 'ID of the session to delete',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, session_id, ...body } = args as any;
  return asTextContentResult(
    (await client.apps.users.sessions.delete(app_id, user_id, session_id)) as object,
  );
};

export default { metadata, tool, handler };
