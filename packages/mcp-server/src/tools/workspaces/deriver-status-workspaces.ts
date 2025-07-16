// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/workspaces/{workspace_id}/deriver/status',
  operationId: 'get_deriver_status_v2_workspaces__workspace_id__deriver_status_get',
};

export const tool: Tool = {
  name: 'deriver_status_workspaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the deriver processing status, optionally scoped to an observer, sender, and/or session\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/deriver_status',\n  $defs: {\n    deriver_status: {\n      type: 'object',\n      title: 'DeriverStatus',\n      properties: {\n        completed_work_units: {\n          type: 'integer',\n          title: 'Completed Work Units',\n          description: 'Completed work units'\n        },\n        in_progress_work_units: {\n          type: 'integer',\n          title: 'In Progress Work Units',\n          description: 'Work units currently being processed'\n        },\n        pending_work_units: {\n          type: 'integer',\n          title: 'Pending Work Units',\n          description: 'Work units waiting to be processed'\n        },\n        total_work_units: {\n          type: 'integer',\n          title: 'Total Work Units',\n          description: 'Total work units'\n        },\n        sessions: {\n          type: 'object',\n          title: 'Sessions',\n          description: 'Per-session status when not filtered by session'\n        }\n      },\n      required: [        'completed_work_units',\n        'in_progress_work_units',\n        'pending_work_units',\n        'total_work_units'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      observer_id: {
        type: 'string',
        title: 'Observer Id',
        description: 'Optional observer ID to filter by',
      },
      sender_id: {
        type: 'string',
        title: 'Sender Id',
        description: 'Optional sender ID to filter by',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'Optional session ID to filter by',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.workspaces.deriverStatus(workspace_id, body)),
  );
};

export default { metadata, tool, handler };
