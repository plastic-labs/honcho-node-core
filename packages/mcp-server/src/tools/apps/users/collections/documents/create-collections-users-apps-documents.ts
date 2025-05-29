// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.collections.documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/apps/{app_id}/users/{user_id}/collections/{collection_id}/documents',
  operationId: 'create_document_v1_apps__app_id__users__user_id__collections__collection_id__documents_post',
};

export const tool: Tool = {
  name: 'create_collections_users_apps_documents',
  description: 'Embed text as a vector and create a Document',
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
      content: {
        type: 'string',
        title: 'Content',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, collection_id, ...body } = args as any;
  return client.apps.users.collections.documents.create(app_id, user_id, collection_id, body);
};

export default { metadata, tool, handler };
