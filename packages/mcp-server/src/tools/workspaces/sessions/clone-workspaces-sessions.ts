// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/workspaces/{workspace_id}/sessions/{session_id}/clone',
  operationId: 'clone_session_v1_workspaces__workspace_id__sessions__session_id__clone_get',
};

export const tool: Tool = {
  name: 'clone_workspaces_sessions',
  description: 'Clone a session, optionally up to a specific message',
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
        description: 'ID of the session to clone',
      },
      message_id: {
        type: 'string',
        title: 'Message Id',
        description: 'Message ID to cut off the clone at',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.sessions.clone(workspace_id, session_id, body));
};

export default { metadata, tool, handler };
