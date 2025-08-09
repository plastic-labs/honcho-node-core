// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Page, type PageParams } from '../../pagination';

export class Webhooks extends APIResource {
  /**
   * List all webhook endpoints, optionally filtered by workspace.
   */
  list(
    workspaceId: string,
    query?: WebhookListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WebhookEndpointsPage, WebhookEndpoint>;
  list(
    workspaceId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WebhookEndpointsPage, WebhookEndpoint>;
  list(
    workspaceId: string,
    query: WebhookListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<WebhookEndpointsPage, WebhookEndpoint> {
    if (isRequestOptions(query)) {
      return this.list(workspaceId, {}, query);
    }
    return this._client.getAPIList(`/v2/workspaces/${workspaceId}/webhooks`, WebhookEndpointsPage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a specific webhook endpoint.
   */
  delete(workspaceId: string, endpointId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/v2/workspaces/${workspaceId}/webhooks/${endpointId}`, options);
  }

  /**
   * Get or create a webhook endpoint URL.
   */
  getOrCreate(
    workspaceId: string,
    body: WebhookGetOrCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookEndpoint> {
    return this._client.post(`/v2/workspaces/${workspaceId}/webhooks`, { body, ...options });
  }

  /**
   * Test publishing a webhook event.
   */
  testEmit(workspaceId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/v2/workspaces/${workspaceId}/webhooks/test`, options);
  }
}

export class WebhookEndpointsPage extends Page<WebhookEndpoint> {}

export interface WebhookEndpoint {
  id: string;

  created_at: string;

  url: string;

  workspace_id: string | null;
}

export type WebhookDeleteResponse = unknown;

export type WebhookTestEmitResponse = unknown;

export interface WebhookListParams extends PageParams {}

export interface WebhookGetOrCreateParams {
  url: string;
}

Webhooks.WebhookEndpointsPage = WebhookEndpointsPage;

export declare namespace Webhooks {
  export {
    type WebhookEndpoint as WebhookEndpoint,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookTestEmitResponse as WebhookTestEmitResponse,
    WebhookEndpointsPage as WebhookEndpointsPage,
    type WebhookListParams as WebhookListParams,
    type WebhookGetOrCreateParams as WebhookGetOrCreateParams,
  };
}
