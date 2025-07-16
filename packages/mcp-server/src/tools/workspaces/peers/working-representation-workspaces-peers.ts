// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.peers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/peers/{peer_id}/representation',
  operationId: 'get_working_representation_v2_workspaces__workspace_id__peers__peer_id__representation_post',
};

export const tool: Tool = {
  name: 'working_representation_workspaces_peers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a peer's working representation for a session.\n\nIf a session_id is provided in the body, we get the working representation of the peer in that session.\nIf a target is provided, we get the representation of the target from the perspective of the peer.\nIf no target is provided, we get the global representation of the peer.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Response Get Working Representation V2 Workspaces  Workspace Id  Peers  Peer Id  Representation Post'\n}\n```",
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
        description: 'ID of the peer',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'Get the working representation within this session',
      },
      target: {
        type: 'string',
        title: 'Target',
        description: 'Optional peer ID to get the representation for, from the perspective of this peer',
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
  const { workspace_id, peer_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.workspaces.peers.workingRepresentation(workspace_id, peer_id, body)),
  );
};

export default { metadata, tool, handler };
