// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.conclusions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/conclusions',
  operationId: 'create_conclusions_v2_workspaces__workspace_id__conclusions_post',
};

export const tool: Tool = {
  name: 'create_workspaces_conclusions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate one or more conclusions.\n\nConclusions are theory-of-mind facts derived from interactions between peers.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/conclusion_create_response',\n  $defs: {\n    conclusion_create_response: {\n      type: 'array',\n      title: 'Response Create Conclusions V2 Workspaces  Workspace Id  Conclusions Post',\n      items: {\n        $ref: '#/$defs/conclusion'\n      }\n    },\n    conclusion: {\n      type: 'object',\n      title: 'Conclusion',\n      description: 'Conclusion response - external view of a document.',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          type: 'string',\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        observed_id: {\n          type: 'string',\n          title: 'Observed Id',\n          description: 'The peer the conclusion is about'\n        },\n        observer_id: {\n          type: 'string',\n          title: 'Observer Id',\n          description: 'The peer who made the conclusion'\n        },\n        session_id: {\n          type: 'string',\n          title: 'Session Id'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'observed_id',\n        'observer_id',\n        'session_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      conclusions: {
        type: 'array',
        title: 'Conclusions',
        items: {
          $ref: '#/$defs/conclusion_create',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id', 'conclusions'],
    $defs: {
      conclusion_create: {
        type: 'object',
        title: 'ConclusionCreate',
        description: 'Schema for creating a single conclusion.',
        properties: {
          content: {
            type: 'string',
            title: 'Content',
          },
          observed_id: {
            type: 'string',
            title: 'Observed Id',
            description: 'The peer the conclusion is about',
          },
          observer_id: {
            type: 'string',
            title: 'Observer Id',
            description: 'The peer making the conclusion',
          },
          session_id: {
            type: 'string',
            title: 'Session Id',
            description: 'The session this conclusion relates to',
          },
        },
        required: ['content', 'observed_id', 'observer_id', 'session_id'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.workspaces.conclusions.create(workspace_id, body)),
    );
  } catch (error) {
    if (error instanceof Honcho.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
