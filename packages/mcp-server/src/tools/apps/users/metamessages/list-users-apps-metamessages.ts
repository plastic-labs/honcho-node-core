// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.metamessages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/metamessages/list',
  operationId: 'get_metamessages_v1_apps__app_id__users__user_id__metamessages_list_post',
};

export const tool: Tool = {
  name: 'list_users_apps_metamessages',
  description:
    'Get metamessages with flexible filtering.\n\n- Filter by user only: No additional parameters needed\n- Filter by session: Provide session_id\n- Filter by message: Provide message_id (and session_id)\n- Filter by type: Provide label\n- Filter by metadata: Provide filter object',
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
      page: {
        type: 'integer',
        title: 'Page',
        description: 'Page number',
      },
      reverse: {
        type: 'boolean',
        title: 'Reverse',
        description: 'Whether to reverse the order of results',
      },
      size: {
        type: 'integer',
        title: 'Size',
        description: 'Page size',
      },
      filter: {
        type: 'object',
        title: 'Filter',
      },
      message_id: {
        type: 'string',
        title: 'Message Id',
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

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, ...body } = args as any;
  return client.apps.users.metamessages.list(app_id, user_id, body);
};

export default { metadata, tool, handler };
