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
    'Get a specific session in a workspace.\n\nIf session_id is provided as a query parameter, it verifies the session is in the workspace.\nOtherwise, it uses the session_id from the JWT token for verification.',
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
      peers: {
        type: 'object',
        title: 'Peers',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.sessions.getOrCreate(workspace_id, body));
};

export default { metadata, tool, handler };
