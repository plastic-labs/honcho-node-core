// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/workspaces/{workspace_id}/peers/{peer_id}/card',
  operationId: 'set_peer_card_v2_workspaces__workspace_id__peers__peer_id__card_put',
};

export const tool: Tool = {
  name: 'set_card_workspaces_peers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSet a peer card for a specific peer relationship.\n\nSets the peer card that the observer peer has for the target peer.\nIf no target is specified, sets the observer's own peer card.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/peer_card_response',\n  $defs: {\n    peer_card_response: {\n      type: 'object',\n      title: 'PeerCardResponse',\n      properties: {\n        peer_card: {\n          type: 'array',\n          title: 'Peer Card',\n          description: 'The peer card content, or None if not found',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
        description: 'ID of the observer peer',
      },
      peer_card: {
        type: 'array',
        title: 'Peer Card',
        description: 'The peer card content to set',
        items: {
          type: 'string',
        },
      },
      target: {
        type: 'string',
        title: 'Target',
        description: "The peer whose card to set. If not provided, sets the observer's own card",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id', 'peer_id', 'peer_card'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, peer_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.workspaces.peers.setCard(workspace_id, peer_id, body)),
    );
  } catch (error) {
    if (error instanceof Honcho.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
