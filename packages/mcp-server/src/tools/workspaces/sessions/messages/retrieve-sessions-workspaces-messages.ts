// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions.messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/workspaces/{workspace_id}/sessions/{session_id}/messages/{message_id}',
  operationId: 'get_message_v1_workspaces__workspace_id__sessions__session_id__messages__message_id__get',
};

export const tool: Tool = {
  name: 'retrieve_sessions_workspaces_messages',
  description: 'Get a Message by ID',
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
      message_id: {
        type: 'string',
        title: 'Message Id',
        description: 'ID of the message to retrieve',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, message_id, ...body } = args as any;
  return asTextContentResult(
    await client.workspaces.sessions.messages.retrieve(workspace_id, session_id, message_id),
  );
};

export default { metadata, tool, handler };
