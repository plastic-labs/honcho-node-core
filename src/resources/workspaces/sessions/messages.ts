// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { Page, type PageParams } from '../../../pagination';

export class Messages extends APIResource {
  /**
   * Create Messages For Session
   */
  create(
    workspaceId: string,
    sessionId: string,
    body: MessageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageCreateResponse> {
    return this._client.post(`/v1/workspaces/${workspaceId}/sessions/${sessionId}/messages/`, {
      body,
      ...options,
    });
  }

  /**
   * Get a Message by ID
   */
  retrieve(
    workspaceId: string,
    sessionId: string,
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Message> {
    return this._client.get(
      `/v1/workspaces/${workspaceId}/sessions/${sessionId}/messages/${messageId}`,
      options,
    );
  }

  /**
   * Update the metadata of a Message
   */
  update(
    workspaceId: string,
    sessionId: string,
    messageId: string,
    body: MessageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Message> {
    return this._client.put(`/v1/workspaces/${workspaceId}/sessions/${sessionId}/messages/${messageId}`, {
      body,
      ...options,
    });
  }

  /**
   * Get all messages for a session
   */
  list(
    workspaceId: string,
    sessionId: string,
    params?: MessageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, Message>;
  list(
    workspaceId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, Message>;
  list(
    workspaceId: string,
    sessionId: string,
    params: MessageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, Message> {
    if (isRequestOptions(params)) {
      return this.list(workspaceId, sessionId, {}, params);
    }
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(
      `/v1/workspaces/${workspaceId}/sessions/${sessionId}/messages/list`,
      MessagesPage,
      { query: { page, reverse, size }, body, method: 'post', ...options },
    );
  }
}

export class MessagesPage extends Page<Message> {}

export interface Message {
  id: string;

  content: string;

  created_at: string;

  peer_name: string;

  session_name: string | null;

  token_count: number;

  workspace_name: string;

  metadata?: Record<string, unknown>;
}

export interface MessageCreate {
  content: string;

  peer_id: string;

  metadata?: Record<string, unknown> | null;
}

export type MessageCreateResponse = Array<Message>;

export interface MessageCreateParams {
  messages: Array<MessageCreate>;
}

export interface MessageUpdateParams {
  metadata: Record<string, unknown>;
}

export interface MessageListParams extends PageParams {
  /**
   * Query param: Whether to reverse the order of results
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;
}

Messages.MessagesPage = MessagesPage;

export declare namespace Messages {
  export {
    type Message as Message,
    type MessageCreate as MessageCreate,
    type MessageCreateResponse as MessageCreateResponse,
    MessagesPage as MessagesPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
  };
}
