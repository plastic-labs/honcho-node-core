// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.collections.documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/collections/{collection_id}/documents/query',
  operationId:
    'query_documents_v1_apps__app_id__users__user_id__collections__collection_id__documents_query_post',
};

export const tool: Tool = {
  name: 'query_collections_users_apps_documents',
  description: 'Cosine Similarity Search for Documents',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
        description: 'ID of the app',
      },
      user_id: {
        type: 'string',
        title: 'User Id',
        description: 'ID of the user',
      },
      collection_id: {
        type: 'string',
        title: 'Collection Id',
        description: 'ID of the collection',
      },
      query: {
        type: 'string',
        title: 'Query',
      },
      filter: {
        type: 'object',
        title: 'Filter',
      },
      top_k: {
        type: 'integer',
        title: 'Top K',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, collection_id, ...body } = args as any;
  return asTextContentResult(
    await client.apps.users.collections.documents.query(app_id, user_id, collection_id, body),
  );
};

export default { metadata, tool, handler };
