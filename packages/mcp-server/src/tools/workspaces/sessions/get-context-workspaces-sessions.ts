// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@honcho-ai/mcp/filtering';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nProduce a context object from the session. The caller provides an optional token limit which the entire context must fit into.\nIf not provided, the context will be exhaustive (within configured max tokens). To do this, we allocate 40% of the token limit\nto the summary, and 60% to recent messages -- as many as can fit. Note that the summary will usually take up less space than\nthis. If the caller does not want a summary, we allocate all the tokens to recent messages.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/session_get_context_response',\n  $defs: {\n    session_get_context_response: {\n      type: 'object',\n      title: 'SessionContext',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        messages: {\n          type: 'array',\n          title: 'Messages',\n          items: {\n            $ref: '#/$defs/message'\n          }\n        },\n        peer_card: {\n          type: 'array',\n          title: 'Peer Card',\n          description: 'The peer card, if context is requested from a specific perspective',\n          items: {\n            type: 'string'\n          }\n        },\n        peer_representation: {\n          type: 'object',\n          title: 'Representation',\n          description: 'A Representation is a traversable and diffable map of observations.\\nAt the base, we have a list of explicit observations, derived from a peer\\'s messages.\\n\\nFrom there, deductive observations can be made by establishing logical relationships between explicit observations.\\n\\nIn the future, we can add more levels of reasoning on top of these.\\n\\nAll of a peer\\'s observations are stored as documents in a collection. These documents can be queried in various ways\\nto produce this Representation object.\\n\\nAdditionally, a \"working representation\" is a version of this data structure representing the most recent observations\\nwithin a single session.\\n\\nA representation can have a maximum number of observations, which is applied individually to each level of reasoning.\\nIf a maximum is set, observations are added and removed in FIFO order.',\n          properties: {\n            deductive: {\n              type: 'array',\n              title: 'Deductive',\n              description: 'Conclusions that MUST be true given explicit facts and premises - strict logical necessities. Each deduction should have premises and a single conclusion.',\n              items: {\n                type: 'object',\n                title: 'DeductiveObservation',\n                description: 'Deductive observation with multiple premises and one conclusion, plus metadata.',\n                properties: {\n                  conclusion: {\n                    type: 'string',\n                    title: 'Conclusion',\n                    description: 'The deductive conclusion'\n                  },\n                  created_at: {\n                    type: 'string',\n                    title: 'Created At',\n                    format: 'date-time'\n                  },\n                  message_ids: {\n                    type: 'array',\n                    title: 'Message Ids',\n                    items: {\n                      type: 'array',\n                      items: {\n                        type: 'object',\n                        additionalProperties: true\n                      }\n                    }\n                  },\n                  session_name: {\n                    type: 'string',\n                    title: 'Session Name'\n                  },\n                  premises: {\n                    type: 'array',\n                    title: 'Premises',\n                    description: 'Supporting premises or evidence for this conclusion',\n                    items: {\n                      type: 'string'\n                    }\n                  }\n                },\n                required: [                  'conclusion',\n                  'created_at',\n                  'message_ids',\n                  'session_name'\n                ]\n              }\n            },\n            explicit: {\n              type: 'array',\n              title: 'Explicit',\n              description: 'Facts LITERALLY stated by the user - direct quotes or clear paraphrases only, no interpretation or inference. Example: [\\'The user is 25 years old\\', \\'The user has a dog\\']',\n              items: {\n                type: 'object',\n                title: 'ExplicitObservation',\n                description: 'Explicit observation with content and metadata.',\n                properties: {\n                  content: {\n                    type: 'string',\n                    title: 'Content',\n                    description: 'The explicit observation'\n                  },\n                  created_at: {\n                    type: 'string',\n                    title: 'Created At',\n                    format: 'date-time'\n                  },\n                  message_ids: {\n                    type: 'array',\n                    title: 'Message Ids',\n                    items: {\n                      type: 'array',\n                      items: {\n                        type: 'object',\n                        additionalProperties: true\n                      }\n                    }\n                  },\n                  session_name: {\n                    type: 'string',\n                    title: 'Session Name'\n                  }\n                },\n                required: [                  'content',\n                  'created_at',\n                  'message_ids',\n                  'session_name'\n                ]\n              }\n            }\n          }\n        },\n        summary: {\n          $ref: '#/$defs/summary'\n        }\n      },\n      required: [        'id',\n        'messages'\n      ]\n    },\n    message: {\n      type: 'object',\n      title: 'Message',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          type: 'string',\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        peer_id: {\n          type: 'string',\n          title: 'Peer Id'\n        },\n        session_id: {\n          type: 'string',\n          title: 'Session Id'\n        },\n        token_count: {\n          type: 'integer',\n          title: 'Token Count'\n        },\n        workspace_id: {\n          type: 'string',\n          title: 'Workspace Id'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'peer_id',\n        'session_id',\n        'token_count',\n        'workspace_id'\n      ]\n    },\n    summary: {\n      type: 'object',\n      title: 'Summary',\n      properties: {\n        content: {\n          type: 'string',\n          title: 'Content',\n          description: 'The summary text'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'The timestamp of when the summary was created (ISO format)'\n        },\n        message_id: {\n          type: 'string',\n          title: 'Message Id',\n          description: 'The public ID of the message that this summary covers up to'\n        },\n        summary_type: {\n          type: 'string',\n          title: 'Summary Type',\n          description: 'The type of summary (short or long)'\n        },\n        token_count: {\n          type: 'integer',\n          title: 'Token Count',\n          description: 'The number of tokens in the summary text'\n        }\n      },\n      required: [        'content',\n        'created_at',\n        'message_id',\n        'summary_type',\n        'token_count'\n      ]\n    }\n  }\n}\n```",
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
      last_message: {
        type: 'string',
        title: 'Last Message',
        description: 'The most recent message, used to fetch semantically relevant observations',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id', 'session_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.workspaces.sessions.getContext(workspace_id, session_id, body)),
  );
};

export default { metadata, tool, handler };
