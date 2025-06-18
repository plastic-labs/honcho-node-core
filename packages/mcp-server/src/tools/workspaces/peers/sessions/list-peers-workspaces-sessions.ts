// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from '@honcho/core';

export const metadata: Metadata = {
  resource: 'workspaces.peers.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/workspaces/{workspace_id}/peers/{peer_id}/sessions',
  operationId: 'get_sessions_for_peer_v1_workspaces__workspace_id__peers__peer_id__sessions_post',
};

export const tool: Tool = {
  name: 'list_peers_workspaces_sessions',
  description: 'Get All Sessions for a Peer',
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
      is_active: {
        type: 'boolean',
        title: 'Is Active',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, peer_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.peers.sessions.list(workspace_id, peer_id, body));
};

export default { metadata, tool, handler };
