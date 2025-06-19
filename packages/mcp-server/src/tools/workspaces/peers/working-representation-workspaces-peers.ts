// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from '@honcho/core';

export const metadata: Metadata = {
  resource: 'workspaces.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/workspaces/{workspace_id}/peers/{peer_id}/representation',
  operationId: 'get_working_representation_v1_workspaces__workspace_id__peers__peer_id__representation_post',
};

export const tool: Tool = {
  name: 'working_representation_workspaces_peers',
  description:
    "Get a peer's working representation for a session.\n\nIf peer_id is provided in body, the representation is of that peer, from our perspective.",
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
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'Get the working representation within this session',
      },
      target: {
        type: 'string',
        title: 'Target',
        description: 'Optional peer ID to get the representation for, from the perspective of this peer',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, peer_id, ...body } = args as any;
  return asTextContentResult(
    await client.workspaces.peers.workingRepresentation(workspace_id, peer_id, body),
  );
};

export default { metadata, tool, handler };
