// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    'Produce a context object from the session. The caller provides an optional token limit which the entire context must fit into.\nIf not provided, the context will be exhaustive (within configured max tokens). To do this, we allocate 40% of the token limit\nto the summary, and 60% to recent messages -- as many as can fit. Note that the summary will usually take up less space than\nthis. If the caller does not want a summary, we allocate all the tokens to recent messages.',
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
      include_most_derived: {
        type: 'boolean',
        title: 'Include Most Derived',
        description:
          'Only used if `last_message` is provided. Whether to include the most derived observations in the representation',
      },
      last_message: {
        type: 'string',
        title: 'Last Message',
        description: 'The most recent message, used to fetch semantically relevant observations',
      },
      limit_to_session: {
        type: 'boolean',
        title: 'Limit To Session',
        description:
          'Only used if `last_message` is provided. Whether to limit the representation to the session (as opposed to everything known about the target peer)',
      },
      max_observations: {
        type: 'integer',
        title: 'Max Observations',
        description:
          'Only used if `last_message` is provided. The maximum number of observations to include in the representation',
      },
      peer_perspective: {
        type: 'string',
        title: 'Peer Perspective',
        description:
          'A peer to get context for. If given, response will attempt to include representation and card from the perspective of that peer. Must be provided with `peer_target`.',
      },
      peer_target: {
        type: 'string',
        title: 'Peer Target',
        description:
          'The target of the perspective. If given without `peer_perspective`, will get the Honcho-level representation and peer card for this peer. If given with `peer_perspective`, will get the representation and card for this peer *from the perspective of that peer*.',
      },
      search_max_distance: {
        type: 'number',
        title: 'Search Max Distance',
        description:
          'Only used if `last_message` is provided. The maximum distance to search for semantically relevant observations',
      },
      search_top_k: {
        type: 'integer',
        title: 'Search Top K',
        description:
          'Only used if `last_message` is provided. The number of semantic-search-retrieved observations to include in the representation',
      },
      summary: {
        type: 'boolean',
        title: 'Summary',
        description: 'Whether or not to include a summary *if* one is available for the session',
      },
      tokens: {
        type: 'integer',
        title: 'Tokens',
        description:
          'Number of tokens to use for the context. Includes summary if set to true. Includes representation and peer card if they are included in the response. If not provided, the context will be exhaustive (within 100000 tokens)',
      },
    },
    required: ['workspace_id', 'session_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, ...body } = args as any;
  return asTextContentResult(await client.workspaces.sessions.getContext(workspace_id, session_id, body));
};

export default { metadata, tool, handler };
