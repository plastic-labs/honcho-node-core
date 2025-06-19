// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Honcho from '@honcho/core';

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
      expires_at: {
        type: 'string',
        title: 'Expires At',
        format: 'date-time',
      },
      peer_id: {
        type: 'string',
        title: 'Peer Id',
        description: 'ID of the peer to scope the key to',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'ID of the session to scope the key to',
      },
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace to scope the key to',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.keys.create(body)) as object);
};

export default { metadata, tool, handler };
