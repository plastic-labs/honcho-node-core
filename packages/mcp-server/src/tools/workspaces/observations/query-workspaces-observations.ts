// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.observations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/observations/query',
  operationId: 'query_observations_v2_workspaces__workspace_id__observations_query_post',
};

export const tool: Tool = {
  name: 'query_workspaces_observations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nQuery observations using semantic search.\n\nPerforms vector similarity search on observations to find semantically relevant results.\nObserver and observed are required for semantic search and must be provided in filters.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/observation_query_response',\n  $defs: {\n    observation_query_response: {\n      type: 'array',\n      title: 'Response Query Observations V2 Workspaces  Workspace Id  Observations Query Post',\n      items: {\n        $ref: '#/$defs/observations'\n      }\n    },\n    observations: {\n      type: 'object',\n      title: 'Observation',\n      description: 'Observation response - external view of a document',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          type: 'string',\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        observed_id: {\n          type: 'string',\n          title: 'Observed Id',\n          description: 'The peer being observed'\n        },\n        observer_id: {\n          type: 'string',\n          title: 'Observer Id',\n          description: 'The peer who made the observation'\n        },\n        session_id: {\n          type: 'string',\n          title: 'Session Id'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'observed_id',\n        'observer_id',\n        'session_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      query: {
        type: 'string',
        title: 'Query',
        description: 'Semantic search query',
      },
      distance: {
        type: 'number',
        title: 'Distance',
        description: 'Maximum cosine distance threshold for results',
      },
      filters: {
        type: 'object',
        title: 'Filters',
        description: 'Additional filters to apply',
        additionalProperties: true,
      },
      top_k: {
        type: 'integer',
        title: 'Top K',
        description: 'Number of results to return',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id', 'query'],
  },
  annotations: {},
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.workspaces.observations.query(workspace_id, body)),
    );
  } catch (error) {
    if (error instanceof Honcho.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
