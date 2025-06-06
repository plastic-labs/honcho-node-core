// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.metamessages',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/metamessages/{metamessage_id}',
  operationId: 'update_metamessage_v1_apps__app_id__users__user_id__metamessages__metamessage_id__put',
};

export const tool: Tool = {
  name: 'update_users_apps_metamessages',
  description: "Update a metamessage's metadata, type, or relationships",
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
      metamessage_id: {
        type: 'string',
        title: 'Metamessage Id',
        description: 'ID of the metamessage to update',
      },
      message_id: {
        type: 'string',
        title: 'Message Id',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      metamessage_type: {
        type: 'string',
        title: 'Metamessage Type',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, metamessage_id, ...body } = args as any;
  return asTextContentResult(
    await client.apps.users.metamessages.update(app_id, user_id, metamessage_id, body),
  );
};

export default { metadata, tool, handler };
