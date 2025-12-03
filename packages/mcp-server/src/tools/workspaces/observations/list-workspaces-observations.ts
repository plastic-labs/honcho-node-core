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
  httpPath: '/v2/workspaces/{workspace_id}/observations/list',
  operationId: 'list_observations_v2_workspaces__workspace_id__observations_list_post',
};

export const tool: Tool = {
  name: 'list_workspaces_observations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all observations using custom filters. Observations are listed by recency unless `reverse` is set to `true`.\n\nObservations can be filtered by session_id, observer_id and observed_id using the filters parameter.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/page_observation',\n  $defs: {\n    page_observation: {\n      type: 'object',\n      title: 'Page[Observation]',\n      properties: {\n        items: {\n          type: 'array',\n          title: 'Items',\n          items: {\n            $ref: '#/$defs/observations'\n          }\n        },\n        page: {\n          type: 'integer',\n          title: 'Page'\n        },\n        size: {\n          type: 'integer',\n          title: 'Size'\n        },\n        pages: {\n          type: 'integer',\n          title: 'Pages'\n        },\n        total: {\n          type: 'integer',\n          title: 'Total'\n        }\n      },\n      required: [        'items',\n        'page',\n        'size'\n      ]\n    },\n    observations: {\n      type: 'object',\n      title: 'Observation',\n      description: 'Observation response - external view of a document',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          type: 'string',\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        observed_id: {\n          type: 'string',\n          title: 'Observed Id',\n          description: 'The peer being observed'\n        },\n        observer_id: {\n          type: 'string',\n          title: 'Observer Id',\n          description: 'The peer who made the observation'\n        },\n        session_id: {\n          type: 'string',\n          title: 'Session Id'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'observed_id',\n        'observer_id',\n        'session_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      page: {
        type: 'integer',
        title: 'Page',
        description: 'Page number',
      },
      reverse: {
        type: 'boolean',
        title: 'Reverse',
        description: 'Whether to reverse the order of results',
      },
      size: {
        type: 'integer',
        title: 'Size',
        description: 'Page size',
      },
      filters: {
        type: 'object',
        title: 'Filters',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id'],
  },
  annotations: {},
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, jq_filter, ...body } = args as any;
  const response = await client.workspaces.observations.list(workspace_id, body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Honcho.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
