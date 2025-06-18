// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from '@honcho/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/workspaces/{workspace_id}/sessions/{session_id}/context',
  operationId: 'get_session_context_v1_workspaces__workspace_id__sessions__session_id__context_get',
};

export const tool: Tool = {
  name: 'get_context_workspaces_sessions',
  description: 'Get Session Context',
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
      summary: {
        type: 'boolean',
        title: 'Summary',
        description: 'Whether to summarize the session history prior to the cutoff message',
      },
      tokens: {
        type: 'integer',
        title: 'Tokens',
        description: 'Number of tokens to use for the context. Includes summary if set to true',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.sessions.getContext(workspace_id, session_id, body));
};

export default { metadata, tool, handler };
