// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from '@honcho/core';

export const metadata: Metadata = {
  resource: 'workspaces.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/workspaces/{workspace_id}/peers/{peer_id}',
  operationId: 'update_peer_v1_workspaces__workspace_id__peers__peer_id__put',
};

export const tool: Tool = {
  name: 'update_workspaces_peers',
  description: "Update a Peer's name and/or metadata",
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
        description: 'ID of the peer to update',
      },
      feature_flags: {
        type: 'object',
        title: 'Feature Flags',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, peer_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.peers.update(workspace_id, peer_id, body));
};

export default { metadata, tool, handler };
