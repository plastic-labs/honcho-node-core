// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/workspaces/{workspace_id}/sessions/{session_id}',
  operationId: 'delete_session_v2_workspaces__workspace_id__sessions__session_id__delete',
};

export const tool: Tool = {
  name: 'delete_workspaces_sessions',
  description:
    'Delete a session and all associated data.\n\nThe session is marked as inactive immediately and returns 202 Accepted. The actual\ndeletion of all related data (messages, embeddings, documents, etc.) happens\nasynchronously via the queue with retry support.\n\nThis action cannot be undone.',
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
        description: 'ID of the session to delete',
      },
    },
    required: ['workspace_id', 'session_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, ...body } = args as any;
  return asTextContentResult((await client.workspaces.sessions.delete(workspace_id, session_id)) as object);
};

export default { metadata, tool, handler };
