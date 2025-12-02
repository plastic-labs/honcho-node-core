// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions.peers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/workspaces/{workspace_id}/sessions/{session_id}/peers/{peer_id}/config',
  operationId:
    'get_peer_config_v2_workspaces__workspace_id__sessions__session_id__peers__peer_id__config_get',
};

export const tool: Tool = {
  name: 'get_config_sessions_workspaces_peers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the configuration for a peer in a session\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/session_peer_config',\n  $defs: {\n    session_peer_config: {\n      type: 'object',\n      title: 'SessionPeerConfig',\n      properties: {\n        observe_me: {\n          type: 'boolean',\n          title: 'Observe Me',\n          description: 'Whether other peers in this session should try to form a session-level theory-of-mind representation of this peer'\n        },\n        observe_others: {\n          type: 'boolean',\n          title: 'Observe Others',\n          description: 'Whether this peer should form a session-level theory-of-mind representation of other peers in the session'\n        }\n      }\n    }\n  }\n}\n```",
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
      peer_id: {
        type: 'string',
        title: 'Peer Id',
        description: 'ID of the peer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id', 'session_id', 'peer_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, session_id, peer_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.workspaces.sessions.peers.getConfig(workspace_id, session_id, peer_id),
      ),
    );
  } catch (error) {
    if (error instanceof Honcho.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
