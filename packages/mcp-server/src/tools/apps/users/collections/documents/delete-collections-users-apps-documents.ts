// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'honcho-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.collections.documents',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/collections/{collection_id}/documents/{document_id}',
  operationId:
    'delete_document_v1_apps__app_id__users__user_id__collections__collection_id__documents__document_id__delete',
};

export const tool: Tool = {
  name: 'delete_collections_users_apps_documents',
  description: 'Delete a Document by ID',
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
      document_id: {
        type: 'string',
        title: 'Document Id',
        description: 'ID of the document to delete',
      },
    },
  },
};

export const handler = async (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, collection_id, document_id, ...body } = args as any;
  return asTextContentResult(
    (await client.apps.users.collections.documents.delete(
      app_id,
      user_id,
      collection_id,
      document_id,
    )) as object,
  );
};

export default { metadata, tool, handler };
