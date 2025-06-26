// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/workspaces/{workspace_id}/sessions/{session_id}/context',
  operationId: 'get_session_context_v2_workspaces__workspace_id__sessions__session_id__context_get',
};

export const tool: Tool = {
  name: 'get_context_workspaces_sessions',
  description:
    'Produce a context object from the session. The caller provides a token limit which the entire context must fit into.\nTo do this, we allocate 40% of the token limit to the summary, and 60% to recent messages -- as many as can fit.\nIf the caller does not want a summary, we allocate all the tokens to recent messages.\nThe default token limit if not provided is 2048. (TODO: make this configurable)',
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
