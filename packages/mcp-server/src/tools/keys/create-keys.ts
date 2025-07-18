// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'keys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/keys',
  operationId: 'create_key_v2_keys_post',
};

export const tool: Tool = {
  name: 'create_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new Key\n\n# Response Schema\n```json\n{\n  type: 'object'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      expires_at: {
        type: 'string',
        title: 'Expires At',
        format: 'date-time',
      },
      peer_id: {
        type: 'string',
        title: 'Peer Id',
        description: 'ID of the peer to scope the key to',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'ID of the session to scope the key to',
      },
      workspace_id: {
        type: 'string',
        title: 'Workspace Id',
        description: 'ID of the workspace to scope the key to',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.keys.create(body)) as object);
};

export default { metadata, tool, handler };
