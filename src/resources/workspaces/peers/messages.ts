// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as SessionsMessagesAPI from '../sessions/messages';
import { MessagesPage } from '../sessions/messages';
import { type PageParams } from '../../../pagination';

export class Messages extends APIResource {
  /**
   * Create messages for a peer
   */
  create(
    workspaceId: string,
    peerId: string,
    body: MessageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageCreateResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/peers/${peerId}/messages`, { body, ...options });
  }

  /**
   * Get all messages for a peer
   */
  list(
    workspaceId: string,
    peerId: string,
    params?: MessageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, SessionsMessagesAPI.Message>;
  list(
    workspaceId: string,
    peerId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, SessionsMessagesAPI.Message>;
  list(
    workspaceId: string,
    peerId: string,
    params: MessageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, SessionsMessagesAPI.Message> {
    if (isRequestOptions(params)) {
      return this.list(workspaceId, peerId, {}, params);
    }
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(
      `/v2/workspaces/${workspaceId}/peers/${peerId}/messages/list`,
      MessagesPage,
      { query: { page, reverse, size }, body, method: 'post', ...options },
    );
  }

  /**
   * Create messages from uploaded files for a peer. Files are converted to text and
   * split into multiple messages.
   */
  upload(
    workspaceId: string,
    peerId: string,
    body: MessageUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageUploadResponse> {
    return this._client.post(
      `/v2/workspaces/${workspaceId}/peers/${peerId}/messages/upload`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export type MessageCreateResponse = Array<SessionsMessagesAPI.Message>;

export type MessageUploadResponse = Array<SessionsMessagesAPI.Message>;

export interface MessageCreateParams {
  messages: Array<SessionsMessagesAPI.MessageCreate>;
}

export interface MessageListParams extends PageParams {
  /**
   * Query param: Whether to reverse the order of results
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filter?: { [key: string]: unknown } | null;
}

export interface MessageUploadParams {
  file: Core.Uploadable;
}

export declare namespace Messages {
  export {
    type MessageCreateResponse as MessageCreateResponse,
    type MessageUploadResponse as MessageUploadResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
    type MessageUploadParams as MessageUploadParams,
  };
}

export { MessagesPage };
