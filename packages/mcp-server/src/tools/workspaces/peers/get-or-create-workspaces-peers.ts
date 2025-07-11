// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@honcho-ai/mcp/filtering';
import { asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/peers',
  operationId: 'get_or_create_peer_v2_workspaces__workspace_id__peers_post',
};

export const tool: Tool = {
  name: 'get_or_create_workspaces_peers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a Peer by ID\n\nIf peer_id is provided as a query parameter, it uses that (must match JWT workspace_id).\nOtherwise, it uses the peer_id from the JWT token.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/peer',\n  $defs: {\n    peer: {\n      type: 'object',\n      title: 'Peer',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        workspace_id: {\n          type: 'string',\n          title: 'Workspace Id'\n        },\n        configuration: {\n          type: 'object',\n          title: 'Configuration'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace',
      },
      id: {
        type: 'string',
        title: 'Id',
      },
      configuration: {
        type: 'object',
        title: 'Configuration',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
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
    await maybeFilter(args, await client.workspaces.peers.getOrCreate(workspace_id, body)),
  );
};

export default { metadata, tool, handler };
