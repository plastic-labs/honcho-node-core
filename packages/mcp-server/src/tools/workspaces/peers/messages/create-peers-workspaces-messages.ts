// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.peers.messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/workspaces/{workspace_id}/peers/{peer_id}/messages',
  operationId: 'create_messages_for_peer_v1_workspaces__workspace_id__peers__peer_id__messages_post',
};

export const tool: Tool = {
  name: 'create_peers_workspaces_messages',
  description: 'Create messages for a peer',
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      peer_id: {
        type: 'string',
        title: 'Peer Id',
        description: 'ID of the peer',
      },
      messages: {
        type: 'array',
        title: 'Messages',
        items: {
          $ref: '#/$defs/message_create',
        },
      },
    },
    $defs: {
      message_create: {
        type: 'object',
        title: 'MessageCreate',
        properties: {
          content: {
            type: 'string',
            title: 'Content',
          },
          peer_id: {
            type: 'string',
            title: 'Peer Id',
          },
          metadata: {
            type: 'object',
            title: 'Metadata',
          },
        },
        required: ['content', 'peer_id'],
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, peer_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.peers.messages.create(workspace_id, peer_id, body));
};

export default { metadata, tool, handler };
