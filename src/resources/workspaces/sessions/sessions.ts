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
  Messages,
  MessagesPage,
} from './messages';
import * as PeersAPI from './peers';
import {
  PeerAddParams,
  PeerGetConfigResponse,
  PeerListParams,
  PeerRemoveParams,
  PeerSetConfigParams,
  PeerSetConfigResponse,
  PeerSetParams,
  Peers,
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
    params: SessionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    const { peer_id, ...body } = params;
    return this._client.put(`/v1/workspaces/${workspaceId}/sessions/${sessionId}`, {
      query: { peer_id },
      body,
      ...options,
    });
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
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(`/v1/workspaces/${workspaceId}/sessions/list`, SessionsPage, {
      query: { page, reverse, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Delete a session by marking it as inactive
   */
  delete(workspaceId: string, sessionId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/v1/workspaces/${workspaceId}/sessions/${sessionId}`, options);
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
    return this._client.get(`/v1/workspaces/${workspaceId}/sessions/${sessionId}/clone`, {
      query,
      ...options,
    });
  }

  /**
   * Get Session Context
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
    return this._client.get(`/v1/workspaces/${workspaceId}/sessions/${sessionId}/context`, {
      query,
      ...options,
    });
  }

  /**
   * Get a specific session in a workspace.
   *
   * If peer_id is provided as a query parameter, it verifies the peer is in the
   * session. Otherwise, it uses the peer_id from the JWT token for verification.
   */
  getOrCreate(
    workspaceId: string,
    body: SessionGetOrCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.post(`/v1/workspaces/${workspaceId}/sessions`, { body, ...options });
  }

  /**
   * Search a Session
   */
  search(
    workspaceId: string,
    sessionId: string,
    params: SessionSearchParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, MessagesAPI.Message> {
    const { body, page, size } = params;
    return this._client.getAPIList(
      `/v1/workspaces/${workspaceId}/sessions/${sessionId}/search`,
      MessagesPage,
      { query: { page, size }, body: body, method: 'post', ...options },
    );
  }
}

export class SessionsPage extends Page<Session> {}

export interface Session {
  id: string;

  created_at: string;

  is_active: boolean;

  workspace_name: string;

  feature_flags?: Record<string, unknown>;

  metadata?: Record<string, unknown>;
}

export type SessionDeleteResponse = unknown;

export interface SessionGetContextResponse {
  id: string;

  messages: Array<MessagesAPI.Message>;

  summary: string;
}

export interface SessionUpdateParams {
  /**
   * Body param:
   */
  metadata: Record<string, unknown>;

  /**
   * Query param: Peer ID to verify access
   */
  peer_id?: string | null;

  /**
   * Body param:
   */
  feature_flags?: Record<string, unknown> | null;
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

export interface SessionCloneParams {
  /**
   * Message ID to cut off the clone at
   */
  message_id?: string | null;
}

export interface SessionGetContextParams {
  /**
   * Whether to summarize the session history prior to the cutoff message
   */
  summary?: boolean;

  /**
   * Number of tokens to use for the context. Includes summary if set to true
   */
  tokens?: number | null;
}

export interface SessionGetOrCreateParams {
  id: string;

  feature_flags?: Record<string, unknown>;

  metadata?: Record<string, unknown>;

  peer_names?: Record<string, SessionGetOrCreateParams.PeerNames> | null;
}

export namespace SessionGetOrCreateParams {
  export interface PeerNames {
    /**
     * Whether other peers in this session should try to form a session-level
     * theory-of-mind representation of this peer
     */
    observe_me?: boolean;

    /**
     * Whether this peer should form a session-level theory-of-mind representation of
     * other peers in the session
     */
    observe_others?: boolean;
  }
}

export interface SessionSearchParams extends PageParams {
  /**
   * Body param: Search query
   */
  body: string;
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
    MessagesPage as MessagesPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
  };

  export {
    Peers as Peers,
    type PeerGetConfigResponse as PeerGetConfigResponse,
    type PeerSetConfigResponse as PeerSetConfigResponse,
    type PeerListParams as PeerListParams,
    type PeerAddParams as PeerAddParams,
    type PeerRemoveParams as PeerRemoveParams,
    type PeerSetParams as PeerSetParams,
    type PeerSetConfigParams as PeerSetConfigParams,
  };
}

export { MessagesPage };
