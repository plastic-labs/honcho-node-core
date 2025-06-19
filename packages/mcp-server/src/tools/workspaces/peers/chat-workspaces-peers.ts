// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/workspaces/{workspace_id}/peers/{peer_id}/chat',
  operationId: 'chat_v1_workspaces__workspace_id__peers__peer_id__chat_post',
};

export const tool: Tool = {
  name: 'chat_workspaces_peers',
  description: 'Chat',
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
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'ID of the session to scope the representation to',
      },
      stream: {
        type: 'boolean',
        title: 'Stream',
      },
      target: {
        type: 'string',
        title: 'Target',
        description: 'Optional peer to get the representation for, from the perspective of this peer',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, peer_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.peers.chat(workspace_id, peer_id, body));
};

export default { metadata, tool, handler };
