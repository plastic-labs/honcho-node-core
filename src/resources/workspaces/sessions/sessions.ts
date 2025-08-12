// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MessagesAPI from './messages';
import {
  Message,
  MessageCreate,
  MessageCreateParams,
  MessageCreateResponse,
  MessageListParams,
  MessageUpdateParams,
  MessageUploadParams,
  MessageUploadResponse,
  Messages,
  MessagesPage,
} from './messages';
import * as PeersAPI from './peers';
import {
  PeerAddParams,
  PeerListParams,
  PeerRemoveParams,
  PeerSetConfigParams,
  PeerSetConfigResponse,
  PeerSetParams,
  Peers,
  SessionPeerConfig,
} from './peers';
import { Page, type PageParams } from '../../../pagination';

export class Sessions extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);

  /**
   * Update the metadata of a Session
   */
  update(
    workspaceId: string,
    sessionId: string,
    body: SessionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.put(`/v2/workspaces/${workspaceId}/sessions/${sessionId}`, { body, ...options });
  }

  /**
   * Get All Sessions in a Workspace
   */
  list(
    workspaceId: string,
    params?: SessionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsPage, Session>;
  list(workspaceId: string, options?: Core.RequestOptions): Core.PagePromise<SessionsPage, Session>;
  list(
    workspaceId: string,
    params: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsPage, Session> {
    if (isRequestOptions(params)) {
      return this.list(workspaceId, {}, params);
    }
    const { page, size, ...body } = params;
    return this._client.getAPIList(`/v2/workspaces/${workspaceId}/sessions/list`, SessionsPage, {
      query: { page, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Delete a session by marking it as inactive
   */
  delete(workspaceId: string, sessionId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/v2/workspaces/${workspaceId}/sessions/${sessionId}`, options);
  }

  /**
   * Clone a session, optionally up to a specific message
   */
  clone(
    workspaceId: string,
    sessionId: string,
    query?: SessionCloneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session>;
  clone(workspaceId: string, sessionId: string, options?: Core.RequestOptions): Core.APIPromise<Session>;
  clone(
    workspaceId: string,
    sessionId: string,
    query: SessionCloneParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    if (isRequestOptions(query)) {
      return this.clone(workspaceId, sessionId, {}, query);
    }
    return this._client.get(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/clone`, {
      query,
      ...options,
    });
  }

  /**
   * Produce a context object from the session. The caller provides an optional token
   * limit which the entire context must fit into. If not provided, the context will
   * be exhaustive (within configured max tokens). To do this, we allocate 40% of the
   * token limit to the summary, and 60% to recent messages -- as many as can fit.
   * Note that the summary will usually take up less space than this. If the caller
   * does not want a summary, we allocate all the tokens to recent messages.
   */
  getContext(
    workspaceId: string,
    sessionId: string,
    query?: SessionGetContextParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetContextResponse>;
  getContext(
    workspaceId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetContextResponse>;
  getContext(
    workspaceId: string,
    sessionId: string,
    query: SessionGetContextParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetContextResponse> {
    if (isRequestOptions(query)) {
      return this.getContext(workspaceId, sessionId, {}, query);
    }
    return this._client.get(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/context`, {
      query,
      ...options,
    });
  }

  /**
   * Get a specific session in a workspace.
   *
   * If session_id is provided as a query parameter, it verifies the session is in
   * the workspace. Otherwise, it uses the session_id from the JWT for verification.
   */
  getOrCreate(
    workspaceId: string,
    body: SessionGetOrCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.post(`/v2/workspaces/${workspaceId}/sessions`, { body, ...options });
  }

  /**
   * Search a Session
   */
  search(
    workspaceId: string,
    sessionId: string,
    body: SessionSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionSearchResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/search`, {
      body,
      ...options,
    });
  }

  /**
   * Get available summaries for a session.
   *
   * Returns both short and long summaries if available, including metadata like the
   * message ID they cover up to, creation timestamp, and token count.
   */
  summaries(
    workspaceId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionSummariesResponse> {
    return this._client.get(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/summaries`, options);
  }
}

export class SessionsPage extends Page<Session> {}

export interface Session {
  id: string;

  created_at: string;

  is_active: boolean;

  workspace_id: string;

  configuration?: { [key: string]: unknown };

  metadata?: { [key: string]: unknown };
}

export type SessionDeleteResponse = unknown;

export interface SessionGetContextResponse {
  id: string;

  messages: Array<MessagesAPI.Message>;

  /**
   * The summary if available
   */
  summary?: SessionGetContextResponse.Summary | null;
}

export namespace SessionGetContextResponse {
  /**
   * The summary if available
   */
  export interface Summary {
    /**
     * The summary text
     */
    content: string;

    /**
     * The timestamp of when the summary was created (ISO format)
     */
    created_at: string;

    /**
     * The ID of the message that this summary covers up to
     */
    message_id: number;

    /**
     * The type of summary (short or long)
     */
    summary_type: string;

    /**
     * The number of tokens in the summary text
     */
    token_count: number;
  }
}

export type SessionSearchResponse = Array<MessagesAPI.Message>;

export interface SessionSummariesResponse {
  id: string;

  /**
   * The long summary if available
   */
  long_summary?: SessionSummariesResponse.LongSummary | null;

  /**
   * The short summary if available
   */
  short_summary?: SessionSummariesResponse.ShortSummary | null;
}

export namespace SessionSummariesResponse {
  /**
   * The long summary if available
   */
  export interface LongSummary {
    /**
     * The summary text
     */
    content: string;

    /**
     * The timestamp of when the summary was created (ISO format)
     */
    created_at: string;

    /**
     * The ID of the message that this summary covers up to
     */
    message_id: number;

    /**
     * The type of summary (short or long)
     */
    summary_type: string;

    /**
     * The number of tokens in the summary text
     */
    token_count: number;
  }

  /**
   * The short summary if available
   */
  export interface ShortSummary {
    /**
     * The summary text
     */
    content: string;

    /**
     * The timestamp of when the summary was created (ISO format)
     */
    created_at: string;

    /**
     * The ID of the message that this summary covers up to
     */
    message_id: number;

    /**
     * The type of summary (short or long)
     */
    summary_type: string;

    /**
     * The number of tokens in the summary text
     */
    token_count: number;
  }
}

export interface SessionUpdateParams {
  configuration?: { [key: string]: unknown } | null;

  metadata?: { [key: string]: unknown } | null;
}

export interface SessionListParams extends PageParams {
  /**
   * Body param:
   */
  filters?: { [key: string]: unknown } | null;
}

export interface SessionCloneParams {
  /**
   * Message ID to cut off the clone at
   */
  message_id?: string | null;
}

export interface SessionGetContextParams {
  /**
   * Whether or not to include a summary _if_ one is available for the session
   */
  summary?: boolean;

  /**
   * Number of tokens to use for the context. Includes summary if set to true. If not
   * provided, the context will be exhaustive (within 100000 tokens)
   */
  tokens?: number | null;
}

export interface SessionGetOrCreateParams {
  id: string;

  configuration?: { [key: string]: unknown } | null;

  metadata?: { [key: string]: unknown } | null;

  peers?: { [key: string]: PeersAPI.SessionPeerConfig } | null;
}

export interface SessionSearchParams {
  /**
   * Search query
   */
  query: string;

  /**
   * Filters to scope the search
   */
  filters?: { [key: string]: unknown } | null;

  /**
   * Number of results to return
   */
  limit?: number;
}

Sessions.SessionsPage = SessionsPage;
Sessions.Messages = Messages;
Sessions.MessagesPage = MessagesPage;
Sessions.Peers = Peers;

export declare namespace Sessions {
  export {
    type Session as Session,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionGetContextResponse as SessionGetContextResponse,
    type SessionSearchResponse as SessionSearchResponse,
    type SessionSummariesResponse as SessionSummariesResponse,
    SessionsPage as SessionsPage,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
    type SessionCloneParams as SessionCloneParams,
    type SessionGetContextParams as SessionGetContextParams,
    type SessionGetOrCreateParams as SessionGetOrCreateParams,
    type SessionSearchParams as SessionSearchParams,
  };

  export {
    Messages as Messages,
    type Message as Message,
    type MessageCreate as MessageCreate,
    type MessageCreateResponse as MessageCreateResponse,
    type MessageUploadResponse as MessageUploadResponse,
    MessagesPage as MessagesPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
    type MessageUploadParams as MessageUploadParams,
  };

  export {
    Peers as Peers,
    type SessionPeerConfig as SessionPeerConfig,
    type PeerSetConfigResponse as PeerSetConfigResponse,
    type PeerListParams as PeerListParams,
    type PeerAddParams as PeerAddParams,
    type PeerRemoveParams as PeerRemoveParams,
    type PeerSetParams as PeerSetParams,
    type PeerSetConfigParams as PeerSetConfigParams,
  };
}
