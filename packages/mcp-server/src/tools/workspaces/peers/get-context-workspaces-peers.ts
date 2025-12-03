// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.peers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/workspaces/{workspace_id}/peers/{peer_id}/context',
  operationId: 'get_peer_context_v2_workspaces__workspace_id__peers__peer_id__context_get',
};

export const tool: Tool = {
  name: 'get_context_workspaces_peers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet context for a peer, including their representation and peer card.\n\nThis endpoint returns the working representation and peer card for a peer.\nIf a target is specified, returns the context for the target from the\nobserver peer's perspective. If no target is specified, returns the\npeer's own context (self-observation).\n\nThis is useful for getting all the context needed about a peer without\nmaking multiple API calls.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/peer_get_context_response',\n  $defs: {\n    peer_get_context_response: {\n      type: 'object',\n      title: 'PeerContext',\n      description: 'Context for a peer, including representation and peer card.',\n      properties: {\n        peer_id: {\n          type: 'string',\n          title: 'Peer Id',\n          description: 'The ID of the peer'\n        },\n        target_id: {\n          type: 'string',\n          title: 'Target Id',\n          description: 'The ID of the target peer being observed'\n        },\n        peer_card: {\n          type: 'array',\n          title: 'Peer Card',\n          description: 'The peer card for the target peer from the observer\\'s perspective',\n          items: {\n            type: 'string'\n          }\n        },\n        representation: {\n          type: 'object',\n          title: 'Representation',\n          description: 'A Representation is a traversable and diffable map of observations.\\nAt the base, we have a list of explicit observations, derived from a peer\\'s messages.\\n\\nFrom there, deductive observations can be made by establishing logical relationships between explicit observations.\\n\\nIn the future, we can add more levels of reasoning on top of these.\\n\\nAll of a peer\\'s observations are stored as documents in a collection. These documents can be queried in various ways\\nto produce this Representation object.\\n\\nAdditionally, a \"working representation\" is a version of this data structure representing the most recent observations\\nwithin a single session.\\n\\nA representation can have a maximum number of observations, which is applied individually to each level of reasoning.\\nIf a maximum is set, observations are added and removed in FIFO order.',\n          properties: {\n            deductive: {\n              type: 'array',\n              title: 'Deductive',\n              description: 'Conclusions that MUST be true given explicit facts and premises - strict logical necessities. Each deduction should have premises and a single conclusion.',\n              items: {\n                type: 'object',\n                title: 'DeductiveObservation',\n                description: 'Deductive observation with multiple premises and one conclusion, plus metadata.',\n                properties: {\n                  conclusion: {\n                    type: 'string',\n                    title: 'Conclusion',\n                    description: 'The deductive conclusion'\n                  },\n                  created_at: {\n                    type: 'string',\n                    title: 'Created At',\n                    format: 'date-time'\n                  },\n                  message_ids: {\n                    type: 'array',\n                    title: 'Message Ids',\n                    items: {\n                      type: 'integer'\n                    }\n                  },\n                  session_name: {\n                    type: 'string',\n                    title: 'Session Name'\n                  },\n                  premises: {\n                    type: 'array',\n                    title: 'Premises',\n                    description: 'Supporting premises or evidence for this conclusion',\n                    items: {\n                      type: 'string'\n                    }\n                  }\n                },\n                required: [                  'conclusion',\n                  'created_at',\n                  'message_ids',\n                  'session_name'\n                ]\n              }\n            },\n            explicit: {\n              type: 'array',\n              title: 'Explicit',\n              description: 'Facts LITERALLY stated by the user - direct quotes or clear paraphrases only, no interpretation or inference. Example: [\\'The user is 25 years old\\', \\'The user has a dog\\']',\n              items: {\n                type: 'object',\n                title: 'ExplicitObservation',\n                description: 'Explicit observation with content and metadata.',\n                properties: {\n                  content: {\n                    type: 'string',\n                    title: 'Content',\n                    description: 'The explicit observation'\n                  },\n                  created_at: {\n                    type: 'string',\n                    title: 'Created At',\n                    format: 'date-time'\n                  },\n                  message_ids: {\n                    type: 'array',\n                    title: 'Message Ids',\n                    items: {\n                      type: 'integer'\n                    }\n                  },\n                  session_name: {\n                    type: 'string',\n                    title: 'Session Name'\n                  }\n                },\n                required: [                  'content',\n                  'created_at',\n                  'message_ids',\n                  'session_name'\n                ]\n              }\n            }\n          }\n        }\n      },\n      required: [        'peer_id',\n        'target_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      peer_id: {
        type: 'string',
        title: 'Peer Id',
        description: 'ID of the peer (observer)',
      },
      include_most_derived: {
        type: 'boolean',
        title: 'Include Most Derived',
        description: 'Whether to include the most derived observations in the representation',
      },
      max_observations: {
        type: 'integer',
        title: 'Max Observations',
        description: 'Maximum number of observations to include in the representation',
      },
      search_max_distance: {
        type: 'number',
        title: 'Search Max Distance',
        description:
          'Only used if `search_query` is provided. Maximum distance for semantically relevant observations',
      },
      search_query: {
        type: 'string',
        title: 'Search Query',
        description: 'Optional query to curate the representation around semantic search results',
      },
      search_top_k: {
        type: 'integer',
        title: 'Search Top K',
        description:
          'Only used if `search_query` is provided. Number of semantic-search-retrieved observations to include',
      },
      target: {
        type: 'string',
        title: 'Target',
        description:
          "The target peer to get context for. If not provided, returns the peer's own context (self-observation)",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id', 'peer_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, peer_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.workspaces.peers.getContext(workspace_id, peer_id, body)),
    );
  } catch (error) {
    if (error instanceof Honcho.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
