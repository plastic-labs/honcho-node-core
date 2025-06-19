// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions.peers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/workspaces/{workspace_id}/sessions/{session_id}/peers/{peer_id}/config',
  operationId:
    'get_peer_config_v1_workspaces__workspace_id__sessions__session_id__peers__peer_id__config_get',
};

export const tool: Tool = {
  name: 'get_config_sessions_workspaces_peers',
  description: 'Get the configuration for a peer in a session',
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'ID of the session',
      },
      peer_id: {
        type: 'string',
        title: 'Peer Id',
        description: 'ID of the peer',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, peer_id, ...body } = args as any;
  return asTextContentResult(
    await client.workspaces.sessions.peers.getConfig(workspace_id, session_id, peer_id),
  );
};

export default { metadata, tool, handler };
