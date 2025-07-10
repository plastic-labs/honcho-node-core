// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/workspaces/{workspace_id}/deriver/status',
  operationId: 'get_deriver_status_v2_workspaces__workspace_id__deriver_status_get',
};

export const tool: Tool = {
  name: 'deriver_status_workspaces',
  description: 'Get the deriver processing status, optionally scoped to an observer, sender, and/or session',
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      observer_id: {
        type: 'string',
        title: 'Observer Id',
        description: 'Optional observer ID to filter by',
      },
      sender_id: {
        type: 'string',
        title: 'Sender Id',
        description: 'Optional sender ID to filter by',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'Optional session ID to filter by',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.deriverStatus(workspace_id, body));
};

export default { metadata, tool, handler };
