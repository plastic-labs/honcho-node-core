// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces/{workspace_id}/sessions',
  operationId: 'get_or_create_session_v2_workspaces__workspace_id__sessions_post',
};

export const tool: Tool = {
  name: 'get_or_create_workspaces_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a specific session in a workspace.\n\nIf session_id is provided as a query parameter, it verifies the session is in the workspace.\nOtherwise, it uses the session_id from the JWT for verification.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/session',\n  $defs: {\n    session: {\n      type: 'object',\n      title: 'Session',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        is_active: {\n          type: 'boolean',\n          title: 'Is Active'\n        },\n        workspace_id: {\n          type: 'string',\n          title: 'Workspace Id'\n        },\n        configuration: {\n          type: 'object',\n          title: 'Configuration',\n          additionalProperties: true\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'is_active',\n        'workspace_id'\n      ]\n    }\n  }\n}\n```",
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
        $ref: '#/$defs/session_configuration',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
        additionalProperties: true,
      },
      peers: {
        type: 'object',
        title: 'Peers',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_id', 'id'],
    $defs: {
      session_configuration: {
        type: 'object',
        title: 'SessionConfiguration',
        description:
          'The set of options that can be in a session DB-level configuration dictionary.\n\nAll fields are optional. Session-level configuration overrides workspace-level configuration, which overrides global configuration.',
        properties: {
          deriver: {
            $ref: '#/$defs/deriver_configuration',
          },
          dream: {
            $ref: '#/$defs/dream_configuration',
          },
          peer_card: {
            $ref: '#/$defs/peer_card_configuration',
          },
          summary: {
            $ref: '#/$defs/summary_configuration',
          },
        },
      },
      deriver_configuration: {
        type: 'object',
        title: 'DeriverConfiguration',
        properties: {
          custom_instructions: {
            type: 'string',
            title: 'Custom Instructions',
            description:
              'TODO: currently unused. Custom instructions to use for the deriver on this workspace/session/message.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether to enable deriver functionality.',
          },
        },
      },
      dream_configuration: {
        type: 'object',
        title: 'DreamConfiguration',
        properties: {
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description:
              'Whether to enable dream functionality. If deriver is disabled, dreams will also be disabled and this setting will be ignored.',
          },
        },
      },
      peer_card_configuration: {
        type: 'object',
        title: 'PeerCardConfiguration',
        properties: {
          create: {
            type: 'boolean',
            title: 'Create',
            description: 'Whether to generate peer card based on content.',
          },
          use: {
            type: 'boolean',
            title: 'Use',
            description: 'Whether to use peer card related to this peer during deriver process.',
          },
        },
      },
      summary_configuration: {
        type: 'object',
        title: 'SummaryConfiguration',
        properties: {
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether to enable summary functionality.',
          },
          messages_per_long_summary: {
            type: 'integer',
            title: 'Messages Per Long Summary',
            description:
              'Number of messages per long summary. Must be positive, greater than or equal to 20, and greater than messages_per_short_summary.',
          },
          messages_per_short_summary: {
            type: 'integer',
            title: 'Messages Per Short Summary',
            description:
              'Number of messages per short summary. Must be positive, greater than or equal to 10, and less than messages_per_long_summary.',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { workspace_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.workspaces.sessions.getOrCreate(workspace_id, body)),
    );
  } catch (error) {
    if (error instanceof Honcho.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
