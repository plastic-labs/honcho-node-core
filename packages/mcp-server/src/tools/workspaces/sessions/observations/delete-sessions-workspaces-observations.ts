// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions.observations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/workspaces/{workspace_id}/sessions/{session_id}/observations/{observation_id}',
  operationId:
    'delete_observation_v2_workspaces__workspace_id__sessions__session_id__observations__observation_id__delete',
};

export const tool: Tool = {
  name: 'delete_sessions_workspaces_observations',
  description:
    'Delete a specific observation.\n\nThis permanently deletes the observation (document) from the theory-of-mind system.\nThis action cannot be undone.',
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
      observation_id: {
        type: 'string',
        title: 'Observation Id',
        description: 'ID of the observation to delete',
      },
    },
    required: ['workspace_id', 'session_id', 'observation_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, observation_id, ...body } = args as any;
  return asTextContentResult(
    (await client.workspaces.sessions.observations.delete(
      workspace_id,
      session_id,
      observation_id,
    )) as object,
  );
};

export default { metadata, tool, handler };
