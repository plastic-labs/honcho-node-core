// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as MessagesAPI from './messages';
import {
  Message,
  MessageBatchParams,
  MessageBatchResponse,
  MessageCreateParams,
  MessageListParams,
  MessageUpdateParams,
  Messages,
  MessagesPage,
  PageMessage,
} from './messages';
import { Page, type PageParams } from '../../../../pagination';

export class Sessions extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Create a Session for a User
   */
  create(
    appId: string,
    userId: string,
    body: SessionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.post(`/v1/apps/${appId}/users/${userId}/sessions`, { body, ...options });
  }

  /**
   * Update the metadata of a Session
   */
  update(
    appId: string,
    userId: string,
    sessionId: string,
    body: SessionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.put(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}`, { body, ...options });
  }

  /**
   * Get All Sessions for a User
   */
  list(
    appId: string,
    userId: string,
    params?: SessionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsPage, Session>;
  list(appId: string, userId: string, options?: Core.RequestOptions): Core.PagePromise<SessionsPage, Session>;
  list(
    appId: string,
    userId: string,
    params: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsPage, Session> {
    if (isRequestOptions(params)) {
      return this.list(appId, userId, {}, params);
    }
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(`/v1/apps/${appId}/users/${userId}/sessions/list`, SessionsPage, {
      query: { page, reverse, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Delete a session by marking it as inactive
   */
  delete(
    appId: string,
    userId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}`, options);
  }

  /**
   * Chat with the Dialectic API
   */
  chat(
    appId: string,
    userId: string,
    sessionId: string,
    body: SessionChatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DialecticResponse> {
    return this._client.post(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/chat`, {
      body,
      ...options,
    });
  }

  /**
   * Clone a session, optionally up to a specific message
   */
  clone(
    appId: string,
    userId: string,
    sessionId: string,
    query?: SessionCloneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session>;
  clone(
    appId: string,
    userId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session>;
  clone(
    appId: string,
    userId: string,
    sessionId: string,
    query: SessionCloneParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    if (isRequestOptions(query)) {
      return this.clone(appId, userId, sessionId, {}, query);
    }
    return this._client.get(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/clone`, {
      query,
      ...options,
    });
  }

  /**
   * Get a specific session for a user.
   *
   * If session_id is provided as a query parameter, it uses that (must match JWT
   * session_id). Otherwise, it uses the session_id from the JWT token.
   */
  get(
    appId: string,
    userId: string,
    query?: SessionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session>;
  get(appId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<Session>;
  get(
    appId: string,
    userId: string,
    query: SessionGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    if (isRequestOptions(query)) {
      return this.get(appId, userId, {}, query);
    }
    return this._client.get(`/v1/apps/${appId}/users/${userId}/sessions`, { query, ...options });
  }
}

export class SessionsPage extends Page<Session> {}

// ---- Trace types ----

export interface FactWithSource {
  fact: string;
  message_id?: string | null;
  message_content?: string | null;
}

export interface ChatTrace {
  queries: Array<string>;
  facts: Array<FactWithSource>;
  tom_inference: string;
  user_representation?: string | null;
  latency_ms?: number | null;
}

export interface DialecticResponse {
  content: string;
  trace?: ChatTrace;
}

export interface PageSession {
  items: Array<Session>;

  page: number;

  size: number;

  total: number;

  pages?: number;
}

export interface Session {
  id: string;

  app_id: string;

  created_at: string;

  is_active: boolean;

  user_id: string;

  metadata?: Record<string, unknown>;
}

export type SessionDeleteResponse = unknown;

export interface SessionCreateParams {
  metadata?: Record<string, unknown>;
}

export interface SessionUpdateParams {
  metadata: Record<string, unknown>;
}

export interface SessionListParams extends PageParams {
  /**
   * Query param: Whether to reverse the order of results
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;

  /**
   * Body param:
   */
  is_active?: boolean;
}

export interface SessionChatParams {
  queries: string | Array<string>;

  stream?: boolean;

  include_trace?: boolean;
}

export interface SessionCloneParams {
  /**
   * Whether to deep copy metamessages
   */
  deep_copy?: boolean;

  /**
   * Message ID to cut off the clone at
   */
  message_id?: string | null;
}

export interface SessionGetParams {
  /**
   * Session ID to retrieve. If not provided, uses JWT token
   */
  session_id?: string | null;
}

Sessions.SessionsPage = SessionsPage;
Sessions.Messages = Messages;
Sessions.MessagesPage = MessagesPage;

export declare namespace Sessions {
  export {
    type DialecticResponse as DialecticResponse,
    type PageSession as PageSession,
    type Session as Session,
    type SessionDeleteResponse as SessionDeleteResponse,
    SessionsPage as SessionsPage,
    type SessionCreateParams as SessionCreateParams,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
    type SessionChatParams as SessionChatParams,
    type SessionCloneParams as SessionCloneParams,
    type SessionGetParams as SessionGetParams,
  };

  export {
    Messages as Messages,
    type Message as Message,
    type PageMessage as PageMessage,
    type MessageBatchResponse as MessageBatchResponse,
    MessagesPage as MessagesPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
    type MessageBatchParams as MessageBatchParams,
  };

  export {
    type ChatTrace as ChatTrace,
    type FactWithSource as FactWithSource,
  };
}
