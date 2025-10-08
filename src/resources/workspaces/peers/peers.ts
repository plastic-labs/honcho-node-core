// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as SessionsAPI from './sessions';
import { SessionListParams, Sessions } from './sessions';
import * as MessagesAPI from '../sessions/messages';
import * as SessionsSessionsAPI from '../sessions/sessions';
import { Page, type PageParams } from '../../../pagination';

export class Peers extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);

  /**
   * Update a Peer's name and/or metadata
   */
  update(
    workspaceId: string,
    peerId: string,
    body: PeerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Peer> {
    return this._client.put(`/v2/workspaces/${workspaceId}/peers/${peerId}`, { body, ...options });
  }

  /**
   * Get All Peers for a Workspace
   */
  list(
    workspaceId: string,
    params?: PeerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PeersPage, Peer>;
  list(workspaceId: string, options?: Core.RequestOptions): Core.PagePromise<PeersPage, Peer>;
  list(
    workspaceId: string,
    params: PeerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PeersPage, Peer> {
    if (isRequestOptions(params)) {
      return this.list(workspaceId, {}, params);
    }
    const { page, size, ...body } = params;
    return this._client.getAPIList(`/v2/workspaces/${workspaceId}/peers/list`, PeersPage, {
      query: { page, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Get a peer card for a specific peer relationship.
   *
   * Returns the peer card that the observer peer has for the target peer if it
   * exists. If no target is specified, returns the observer's own peer card.
   */
  card(
    workspaceId: string,
    peerId: string,
    query?: PeerCardParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerCardResponse>;
  card(workspaceId: string, peerId: string, options?: Core.RequestOptions): Core.APIPromise<PeerCardResponse>;
  card(
    workspaceId: string,
    peerId: string,
    query: PeerCardParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerCardResponse> {
    if (isRequestOptions(query)) {
      return this.card(workspaceId, peerId, {}, query);
    }
    return this._client.get(`/v2/workspaces/${workspaceId}/peers/${peerId}/card`, { query, ...options });
  }

  /**
   * Chat
   */
  chat(
    workspaceId: string,
    peerId: string,
    body: PeerChatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerChatResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/peers/${peerId}/chat`, { body, ...options });
  }

  /**
   * Get a Peer by ID
   *
   * If peer_id is provided as a query parameter, it uses that (must match JWT
   * workspace_id). Otherwise, it uses the peer_id from the JWT.
   */
  getOrCreate(
    workspaceId: string,
    body: PeerGetOrCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Peer> {
    return this._client.post(`/v2/workspaces/${workspaceId}/peers`, { body, ...options });
  }

  /**
   * Search a Peer
   */
  search(
    workspaceId: string,
    peerId: string,
    body: PeerSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerSearchResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/peers/${peerId}/search`, { body, ...options });
  }

  /**
   * Get a peer's working representation for a session.
   *
   * If a session_id is provided in the body, we get the working representation of
   * the peer in that session. If a target is provided, we get the representation of
   * the target from the perspective of the peer. If no target is provided, we get
   * the omniscient Honcho representation of the peer.
   */
  workingRepresentation(
    workspaceId: string,
    peerId: string,
    body: PeerWorkingRepresentationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerWorkingRepresentationResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/peers/${peerId}/representation`, {
      body,
      ...options,
    });
  }
}

export class PeersPage extends Page<Peer> {}

export interface PagePeer {
  items: Array<Peer>;

  page: number;

  size: number;

  pages?: number;

  total?: number;
}

export interface PageSession {
  items: Array<SessionsSessionsAPI.Session>;

  page: number;

  size: number;

  pages?: number;

  total?: number;
}

export interface Peer {
  id: string;

  created_at: string;

  workspace_id: string;

  configuration?: { [key: string]: unknown };

  metadata?: { [key: string]: unknown };
}

export interface SessionGet {
  filters?: { [key: string]: unknown } | null;
}

export interface PeerCardResponse {
  /**
   * The peer card content, or None if not found
   */
  peer_card?: Array<string> | null;
}

export interface PeerChatResponse {
  content: string;
}

export type PeerSearchResponse = Array<MessagesAPI.Message>;

export type PeerWorkingRepresentationResponse = { [key: string]: unknown };

export interface PeerUpdateParams {
  configuration?: { [key: string]: unknown } | null;

  metadata?: { [key: string]: unknown } | null;
}

export interface PeerListParams extends PageParams {
  /**
   * Body param:
   */
  filters?: { [key: string]: unknown } | null;
}

export interface PeerCardParams {
  /**
   * The peer whose card to retrieve. If not provided, returns the observer's own
   * card
   */
  target?: string | null;
}

export interface PeerChatParams {
  /**
   * Dialectic API Prompt
   */
  query: string;

  /**
   * ID of the session to scope the representation to
   */
  session_id?: string | null;

  stream?: boolean;

  /**
   * Optional peer to get the representation for, from the perspective of this peer
   */
  target?: string | null;
}

export interface PeerGetOrCreateParams {
  id: string;

  configuration?: { [key: string]: unknown } | null;

  metadata?: { [key: string]: unknown } | null;
}

export interface PeerSearchParams {
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

export interface PeerWorkingRepresentationParams {
  /**
   * Get the working representation within this session
   */
  session_id?: string | null;

  /**
   * Optional peer ID to get the representation for, from the perspective of this
   * peer
   */
  target?: string | null;
}

Peers.PeersPage = PeersPage;
Peers.Sessions = Sessions;

export declare namespace Peers {
  export {
    type PagePeer as PagePeer,
    type PageSession as PageSession,
    type Peer as Peer,
    type SessionGet as SessionGet,
    type PeerCardResponse as PeerCardResponse,
    type PeerChatResponse as PeerChatResponse,
    type PeerSearchResponse as PeerSearchResponse,
    type PeerWorkingRepresentationResponse as PeerWorkingRepresentationResponse,
    PeersPage as PeersPage,
    type PeerUpdateParams as PeerUpdateParams,
    type PeerListParams as PeerListParams,
    type PeerCardParams as PeerCardParams,
    type PeerChatParams as PeerChatParams,
    type PeerGetOrCreateParams as PeerGetOrCreateParams,
    type PeerSearchParams as PeerSearchParams,
    type PeerWorkingRepresentationParams as PeerWorkingRepresentationParams,
  };

  export { Sessions as Sessions, type SessionListParams as SessionListParams };
}
