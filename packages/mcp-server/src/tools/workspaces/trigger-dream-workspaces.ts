// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/trigger_dream',
  operationId: 'trigger_dream_v2_workspaces__workspace_id__trigger_dream_post',
};

export const tool: Tool = {
  name: 'trigger_dream_workspaces',
  description:
    'Manually trigger a dream task immediately for a specific collection.\n\nThis endpoint bypasses all automatic dream conditions (document threshold,\nminimum hours between dreams) and executes the dream task immediately without delay.',
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      dream_type: {
        type: 'string',
        title: 'DreamType',
        description: 'Type of dream to trigger',
        enum: ['consolidate', 'agent'],
      },
      observer: {
        type: 'string',
        title: 'Observer',
        description: 'Observer peer name',
      },
      observed: {
        type: 'string',
        title: 'Observed',
        description: 'Observed peer name (defaults to observer if not specified)',
      },
    },
    required: ['workspace_id', 'dream_type', 'observer'],
  },
  annotations: {},
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, ...body } = args as any;
  const response = await client.workspaces.triggerDream(workspace_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
