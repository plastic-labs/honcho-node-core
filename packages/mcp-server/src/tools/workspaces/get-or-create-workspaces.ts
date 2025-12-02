// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@honcho-ai/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@honcho-ai/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Honcho from '@honcho-ai/core';

export const metadata: Metadata = {
  resource: 'workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/workspaces',
  operationId: 'get_or_create_workspace_v2_workspaces_post',
};

export const tool: Tool = {
  name: 'get_or_create_workspaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a Workspace by ID.\n\nIf workspace_id is provided as a query parameter, it uses that (must match JWT workspace_id).\nOtherwise, it uses the workspace_id from the JWT.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/workspace',\n  $defs: {\n    workspace: {\n      type: 'object',\n      title: 'Workspace',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        configuration: {\n          type: 'object',\n          title: 'Configuration',\n          additionalProperties: true\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'created_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        title: 'Id',
      },
      configuration: {
        $ref: '#/$defs/workspace_configuration',
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
    required: ['id'],
    $defs: {
      workspace_configuration: {
        type: 'object',
        title: 'WorkspaceConfiguration',
        description:
          'The set of options that can be in a workspace DB-level configuration dictionary.\n\nAll fields are optional. Session-level configuration overrides workspace-level configuration, which overrides global configuration.',
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
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.workspaces.getOrCreate(body)));
  } catch (error) {
    if (error instanceof Honcho.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
