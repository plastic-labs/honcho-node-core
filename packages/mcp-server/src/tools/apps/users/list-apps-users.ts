// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/apps/{app_id}/users/list',
  operationId: 'get_users_v1_apps__app_id__users_list_post',
};

export const tool: Tool = {
  name: 'list_apps_users',
  description: 'Get All Users for an App',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
        description: 'ID of the app',
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
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, ...body } = args as any;
  return asTextContentResult(await client.apps.users.list(app_id, body));
};

export default { metadata, tool, handler };
