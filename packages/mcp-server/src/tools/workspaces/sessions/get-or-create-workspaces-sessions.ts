// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from '@honcho/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/workspaces/{workspace_id}/sessions',
  operationId: 'get_or_create_session_v1_workspaces__workspace_id__sessions_post',
};

export const tool: Tool = {
  name: 'get_or_create_workspaces_sessions',
  description:
    'Get a specific session in a workspace.\n\nIf peer_id is provided as a query parameter, it verifies the peer is in the session.\nOtherwise, it uses the peer_id from the JWT token for verification.',
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
      feature_flags: {
        type: 'object',
        title: 'Feature Flags',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      peer_names: {
        type: 'object',
        title: 'Peer Names',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.sessions.getOrCreate(workspace_id, body));
};

export default { metadata, tool, handler };
