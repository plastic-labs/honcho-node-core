// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.metamessages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/metamessages',
  operationId: 'create_metamessage_v1_apps__app_id__users__user_id__metamessages_post',
};

export const tool: Tool = {
  name: 'create_users_apps_metamessages',
  description:
    'Create a new metamessage associated with a user.\nOptionally link to a session and message by providing those IDs in the request body.',
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
      content: {
        type: 'string',
        title: 'Content',
      },
      metamessage_type: {
        type: 'string',
        title: 'Metamessage Type',
      },
      message_id: {
        type: 'string',
        title: 'Message Id',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, ...body } = args as any;
  return asTextContentResult(await client.apps.users.metamessages.create(app_id, user_id, body));
};

export default { metadata, tool, handler };
