// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/peers/list',
  operationId: 'get_peers_v2_workspaces__workspace_id__peers_list_post',
};

export const tool: Tool = {
  name: 'list_workspaces_peers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet All Peers for a Workspace\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/page_peer',\n  $defs: {\n    page_peer: {\n      type: 'object',\n      title: 'Page[Peer]',\n      properties: {\n        items: {\n          type: 'array',\n          title: 'Items',\n          items: {\n            $ref: '#/$defs/peer'\n          }\n        },\n        page: {\n          type: 'integer',\n          title: 'Page'\n        },\n        size: {\n          type: 'integer',\n          title: 'Size'\n        },\n        pages: {\n          type: 'integer',\n          title: 'Pages'\n        },\n        total: {\n          type: 'integer',\n          title: 'Total'\n        }\n      },\n      required: [        'items',\n        'page',\n        'size'\n      ]\n    },\n    peer: {\n      type: 'object',\n      title: 'Peer',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        workspace_id: {\n          type: 'string',\n          title: 'Workspace Id'\n        },\n        configuration: {\n          type: 'object',\n          title: 'Configuration',\n          additionalProperties: true\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
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
  const response = await client.workspaces.peers.list(workspace_id, body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
