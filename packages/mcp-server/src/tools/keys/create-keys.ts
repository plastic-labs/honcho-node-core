// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'keys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/keys',
  operationId: 'create_key_v1_keys_post',
};

export const tool: Tool = {
  name: 'create_keys',
  description: 'Create a new Key',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
        description: 'ID of the app to scope the key to',
      },
      collection_id: {
        type: 'string',
        title: 'Collection Id',
        description: 'ID of the collection to scope the key to',
      },
      expires_at: {
        type: 'string',
        title: 'Expires At',
        format: 'date-time',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'ID of the session to scope the key to',
      },
      user_id: {
        type: 'string',
        title: 'User Id',
        description: 'ID of the user to scope the key to',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.keys.create(body)) as object);
};

export default { metadata, tool, handler };
