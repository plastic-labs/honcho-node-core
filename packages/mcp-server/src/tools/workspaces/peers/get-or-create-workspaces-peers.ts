// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/workspaces/{workspace_id}/peers',
  operationId: 'get_or_create_peer_v1_workspaces__workspace_id__peers_post',
};

export const tool: Tool = {
  name: 'get_or_create_workspaces_peers',
  description:
    'Get a Peer by ID\n\nIf peer_id is provided as a query parameter, it uses that (must match JWT workspace_id).\nOtherwise, it uses the peer_id from the JWT token.',
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      id: {
        type: 'string',
        title: 'Id',
      },
      configuration: {
        type: 'object',
        title: 'Configuration',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.peers.getOrCreate(workspace_id, body));
};

export default { metadata, tool, handler };
