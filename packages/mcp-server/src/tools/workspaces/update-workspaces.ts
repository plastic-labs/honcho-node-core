// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/workspaces/{workspace_id}',
  operationId: 'update_workspace_v2_workspaces__workspace_id__put',
};

export const tool: Tool = {
  name: 'update_workspaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a Workspace\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/workspace',\n  $defs: {\n    workspace: {\n      type: 'object',\n      title: 'Workspace',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        configuration: {\n          type: 'object',\n          title: 'Configuration',\n          additionalProperties: true\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'created_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace to update',
      },
      configuration: {
        type: 'object',
        title: 'Configuration',
        additionalProperties: true,
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.workspaces.update(workspace_id, body)),
  );
};

export default { metadata, tool, handler };
