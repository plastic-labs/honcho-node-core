// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/sessions/{session_id}/peers/{peer_id}/config',
  operationId:
    'set_peer_config_v2_workspaces__workspace_id__sessions__session_id__peers__peer_id__config_post',
};

export const tool: Tool = {
  name: 'set_config_sessions_workspaces_peers',
  description: 'Set the configuration for a peer in a session',
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
      observe_me: {
        type: 'boolean',
        title: 'Observe Me',
        description: 'Whether honcho should form a global theory-of-mind representation of this peer',
      },
      observe_others: {
        type: 'boolean',
        title: 'Observe Others',
        description:
          'Whether this peer should form a session-level theory-of-mind representation of other peers in the session',
      },
    },
    required: ['workspace_id', 'session_id', 'peer_id'],
  },
  annotations: {},
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, peer_id, ...body } = args as any;
  return asTextContentResult(
    (await client.workspaces.sessions.peers.setConfig(workspace_id, session_id, peer_id, body)) as object,
  );
};

export default { metadata, tool, handler };
