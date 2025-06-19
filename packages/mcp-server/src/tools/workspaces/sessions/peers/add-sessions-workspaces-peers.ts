// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/workspaces/{workspace_id}/sessions/{session_id}/peers',
  operationId: 'add_peers_to_session_v1_workspaces__workspace_id__sessions__session_id__peers_post',
};

export const tool: Tool = {
  name: 'add_sessions_workspaces_peers',
  description: 'Add peers to a session',
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
        description: 'List of peer IDs to add to the session',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, ...body } = args as any;
  return asTextContentResult(
    await client.workspaces.sessions.peers.add(workspace_id, session_id, body['body']),
  );
};

export default { metadata, tool, handler };
