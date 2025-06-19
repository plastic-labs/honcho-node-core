// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/workspaces/{workspace_id}/sessions/{session_id}/peers',
  operationId: 'set_session_peers_v1_workspaces__workspace_id__sessions__session_id__peers_put',
};

export const tool: Tool = {
  name: 'set_sessions_workspaces_peers',
  description: 'Set the peers in a session',
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
      body: {
        type: 'object',
        title: 'Peers',
        description: 'List of peer IDs to set for the session',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, ...body } = args as any;
  return asTextContentResult(
    await client.workspaces.sessions.peers.set(workspace_id, session_id, body['body']),
  );
};

export default { metadata, tool, handler };
