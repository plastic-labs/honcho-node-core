// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as WorkspacesAPI from '../workspaces';
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
  PeerSetParams,
  Peers,
  SessionPeerConfig,
} from './peers';
import { Page, type PageParams } from '../../../pagination';

export class Sessions extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);

  /**
   * Update a Session's metadata and/or configuration.
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
   * Get all Sessions for a Workspace, paginated with optional filters.
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
   * Delete a Session and all associated messages.
   *
   * The Session is marked as inactive immediately and returns 202 Accepted. The
   * actual deletion of all related data happens asynchronously via the queue with
   * retry support.
   *
   * This action cannot be undone.
   */
  delete(workspaceId: string, sessionId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/v2/workspaces/${workspaceId}/sessions/${sessionId}`, options);
  }

  /**
   * Clone a Session, optionally up to a specific message ID.
   */
  clone(
    workspaceId: string,
    sessionId: string,
    params?: SessionCloneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session>;
  clone(workspaceId: string, sessionId: string, options?: Core.RequestOptions): Core.APIPromise<Session>;
  clone(
    workspaceId: string,
    sessionId: string,
    params: SessionCloneParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    if (isRequestOptions(params)) {
      return this.clone(workspaceId, sessionId, {}, params);
    }
    const { message_id } = params;
    return this._client.post(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/clone`, {
      query: { message_id },
      ...options,
    });
  }

  /**
   * Produce a context object from the Session. The caller provides an optional token
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
   * Get a Session by ID or create a new Session with the given ID.
   *
   * If Session ID is provided as a parameter, it verifies the Session is in the
   * Workspace. Otherwise, it uses the session_id from the JWT for verification.
   */
  getOrCreate(
    workspaceId: string,
    body: SessionGetOrCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.post(`/v2/workspaces/${workspaceId}/sessions`, { body, ...options });
  }

  /**
   * Search a Session with optional filters. Use `limit` to control the number of
   * results returned.
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
   * Get available summaries for a Session.
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

/**
 * The set of options that can be in a session DB-level configuration dictionary.
 *
 * All fields are optional. Session-level configuration overrides workspace-level
 * configuration, which overrides global configuration.
 */
export interface SessionConfiguration {
  /**
   * Configuration for dream functionality. If reasoning is disabled, dreams will
   * also be disabled and these settings will be ignored.
   */
  dream?: WorkspacesAPI.DreamConfiguration | null;

  /**
   * Configuration for peer card functionality. If reasoning is disabled, peer cards
   * will also be disabled and these settings will be ignored.
   */
  peer_card?: WorkspacesAPI.PeerCardConfiguration | null;

  /**
   * Configuration for reasoning functionality.
   */
  reasoning?: WorkspacesAPI.ReasoningConfiguration | null;

  /**
   * Configuration for summary functionality.
   */
  summary?: WorkspacesAPI.SummaryConfiguration | null;

  [k: string]: unknown;
}

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
   * The public ID of the message that this summary covers up to
   */
  message_id: string;

  /**
   * The type of summary (short or long)
   */
  summary_type: string;

  /**
   * The number of tokens in the summary text
   */
  token_count: number;
}

export type SessionDeleteResponse = unknown;

export interface SessionGetContextResponse {
  id: string;

  messages: Array<MessagesAPI.Message>;

  /**
   * The peer card, if context is requested from a specific perspective
   */
  peer_card?: Array<string> | null;

  /**
   * A curated subset of a peer representation, if context is requested from a
   * specific perspective
   */
  peer_representation?: string | null;

  /**
   * The summary if available
   */
  summary?: Summary | null;
}

export type SessionSearchResponse = Array<MessagesAPI.Message>;

export interface SessionSummariesResponse {
  id: string;

  /**
   * The long summary if available
   */
  long_summary?: Summary | null;

  /**
   * The short summary if available
   */
  short_summary?: Summary | null;
}

export interface SessionUpdateParams {
  /**
   * The set of options that can be in a session DB-level configuration dictionary.
   *
   * All fields are optional. Session-level configuration overrides workspace-level
   * configuration, which overrides global configuration.
   */
  configuration?: SessionConfiguration | null;

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
   * Only used if `last_message` is provided. Whether to include the most frequent
   * conclusions in the representation
   */
  include_most_frequent?: boolean;

  /**
   * The most recent message, used to fetch semantically relevant conclusions
   */
  last_message?: string | null;

  /**
   * Only used if `last_message` is provided. Whether to limit the representation to
   * the session (as opposed to everything known about the target peer)
   */
  limit_to_session?: boolean;

  /**
   * Only used if `last_message` is provided. The maximum number of conclusions to
   * include in the representation
   */
  max_conclusions?: number | null;

  /**
   * A peer to get context for. If given, response will attempt to include
   * representation and card from the perspective of that peer. Must be provided with
   * `peer_target`.
   */
  peer_perspective?: string | null;

  /**
   * The target of the perspective. If given without `peer_perspective`, will get the
   * Honcho-level representation and peer card for this peer. If given with
   * `peer_perspective`, will get the representation and card for this peer _from the
   * perspective of that peer_.
   */
  peer_target?: string | null;

  /**
   * Only used if `last_message` is provided. The maximum distance to search for
   * semantically relevant conclusions
   */
  search_max_distance?: number | null;

  /**
   * Only used if `last_message` is provided. The number of semantic-search-retrieved
   * conclusions to include in the representation
   */
  search_top_k?: number | null;

  /**
   * Whether or not to include a summary _if_ one is available for the session
   */
  summary?: boolean;

  /**
   * Number of tokens to use for the context. Includes summary if set to true.
   * Includes representation and peer card if they are included in the response. If
   * not provided, the context will be exhaustive (within 100000 tokens)
   */
  tokens?: number | null;
}

export interface SessionGetOrCreateParams {
  id: string;

  /**
   * The set of options that can be in a session DB-level configuration dictionary.
   *
   * All fields are optional. Session-level configuration overrides workspace-level
   * configuration, which overrides global configuration.
   */
  configuration?: SessionConfiguration | null;

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
    type SessionConfiguration as SessionConfiguration,
    type Summary as Summary,
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
    type PeerListParams as PeerListParams,
    type PeerAddParams as PeerAddParams,
    type PeerRemoveParams as PeerRemoveParams,
    type PeerSetParams as PeerSetParams,
    type PeerSetConfigParams as PeerSetConfigParams,
  };
}
