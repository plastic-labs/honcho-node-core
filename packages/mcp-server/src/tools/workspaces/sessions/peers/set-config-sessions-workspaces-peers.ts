// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/sessions/{session_id}/peers/{peer_id}/config',
  operationId:
    'set_peer_config_v2_workspaces__workspace_id__sessions__session_id__peers__peer_id__config_post',
};

export const tool: Tool = {
  name: 'set_config_sessions_workspaces_peers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSet the configuration for a peer in a session\n\n# Response Schema\n```json\n{\n  type: 'object'\n}\n```",
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
      observe_me: {
        type: 'boolean',
        title: 'Observe Me',
        description:
          'Whether other peers in this session should try to form a session-level theory-of-mind representation of this peer',
      },
      observe_others: {
        type: 'boolean',
        title: 'Observe Others',
        description:
          'Whether this peer should form a session-level theory-of-mind representation of other peers in the session',
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
  const { workspace_id, session_id, peer_id, ...body } = args as any;
  return asTextContentResult(
    (await client.workspaces.sessions.peers.setConfig(workspace_id, session_id, peer_id, body)) as object,
  );
};

export default { metadata, tool, handler };
