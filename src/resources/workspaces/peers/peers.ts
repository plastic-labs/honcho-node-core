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
   * Update a Peer's metadata and/or configuration.
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
   * Get all Peers for a Workspace, paginated with optional filters.
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
   * Query a Peer's representation using natural language. Performs agentic search
   * and reasoning to comprehensively answer the query based on all latent knowledge
   * gathered about the peer from their messages and conclusions.
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
   * Get context for a peer, including their representation and peer card.
   *
   * This endpoint returns a curated subset of the representation and peer card for a
   * peer. If a target is specified, returns the context for the target from the
   * observer peer's perspective. If no target is specified, returns the peer's own
   * context (self-observation).
   *
   * This is useful for getting all the context needed about a peer without making
   * multiple API calls.
   */
  getContext(
    workspaceId: string,
    peerId: string,
    query?: PeerGetContextParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerGetContextResponse>;
  getContext(
    workspaceId: string,
    peerId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerGetContextResponse>;
  getContext(
    workspaceId: string,
    peerId: string,
    query: PeerGetContextParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerGetContextResponse> {
    if (isRequestOptions(query)) {
      return this.getContext(workspaceId, peerId, {}, query);
    }
    return this._client.get(`/v2/workspaces/${workspaceId}/peers/${peerId}/context`, { query, ...options });
  }

  /**
   * Get a Peer by ID or create a new Peer with the given ID.
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
   * Get a curated subset of a Peer's Representation. A Representation is always a
   * subset of the total knowledge about the Peer. The subset can be scoped and
   * filtered in various ways.
   *
   * If a session_id is provided in the body, we get the Representation of the Peer
   * scoped to that Session. If a target is provided, we get the Representation of
   * the target from the perspective of the Peer. If no target is provided, we get
   * the omniscient Honcho Representation of the Peer.
   */
  getRepresentation(
    workspaceId: string,
    peerId: string,
    body: PeerGetRepresentationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerGetRepresentationResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/peers/${peerId}/representation`, {
      body,
      ...options,
    });
  }

  /**
   * Search a Peer's messages, optionally filtered by various criteria.
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
   * Set a peer card for a specific peer relationship.
   *
   * Sets the peer card that the observer peer has for the target peer. If no target
   * is specified, sets the observer's own peer card.
   */
  setCard(
    workspaceId: string,
    peerId: string,
    params: PeerSetCardParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerCardResponse> {
    const { target, ...body } = params;
    return this._client.put(`/v2/workspaces/${workspaceId}/peers/${peerId}/card`, {
      query: { target },
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

export interface PeerCardResponse {
  /**
   * The peer card content, or None if not found
   */
  peer_card?: Array<string> | null;
}

export interface SessionGet {
  filters?: { [key: string]: unknown } | null;
}

export interface PeerChatResponse {
  content: string;
}

/**
 * Context for a peer, including representation and peer card.
 */
export interface PeerGetContextResponse {
  /**
   * The ID of the peer
   */
  peer_id: string;

  /**
   * The ID of the target peer being observed
   */
  target_id: string;

  /**
   * The peer card for the target peer from the observer's perspective
   */
  peer_card?: Array<string> | null;

  /**
   * A curated subset of the representation of the target peer from the observer's
   * perspective
   */
  representation?: string | null;
}

export interface PeerGetRepresentationResponse {
  representation: string;
}

export type PeerSearchResponse = Array<MessagesAPI.Message>;

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
   * Optional target peer to retrieve a card for, from the observer's perspective. If
   * not provided, returns the observer's own card
   */
  target?: string | null;
}

export interface PeerChatParams {
  /**
   * Dialectic API Prompt
   */
  query: string;

  /**
   * Level of reasoning to apply: minimal, low, medium, high, or extra-high
   */
  reasoning_level?: 'minimal' | 'low' | 'medium' | 'high' | 'extra-high';

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

export interface PeerGetContextParams {
  /**
   * Whether to include the most frequent conclusions in the representation
   */
  include_most_frequent?: boolean;

  /**
   * Maximum number of conclusions to include in the representation
   */
  max_conclusions?: number | null;

  /**
   * Only used if `search_query` is provided. Maximum distance for semantically
   * relevant conclusions
   */
  search_max_distance?: number | null;

  /**
   * Optional query to curate the representation around semantic search results
   */
  search_query?: string | null;

  /**
   * Only used if `search_query` is provided. Number of semantic-search-retrieved
   * conclusions to include
   */
  search_top_k?: number | null;

  /**
   * Optional target peer to get context for, from the observer's perspective. If not
   * provided, returns the observer's own context (self-observation)
   */
  target?: string | null;
}

export interface PeerGetOrCreateParams {
  id: string;

  configuration?: { [key: string]: unknown } | null;

  metadata?: { [key: string]: unknown } | null;
}

export interface PeerGetRepresentationParams {
  /**
   * Only used if `search_query` is provided. Whether to include the most frequent
   * conclusions in the representation
   */
  include_most_frequent?: boolean | null;

  /**
   * Only used if `search_query` is provided. Maximum number of conclusions to
   * include in the representation
   */
  max_conclusions?: number | null;

  /**
   * Only used if `search_query` is provided. Maximum distance to search for
   * semantically relevant conclusions
   */
  search_max_distance?: number | null;

  /**
   * Optional input to curate the representation around semantic search results
   */
  search_query?: string | null;

  /**
   * Only used if `search_query` is provided. Number of semantic-search-retrieved
   * conclusions to include in the representation
   */
  search_top_k?: number | null;

  /**
   * Optional session ID within which to scope the representation
   */
  session_id?: string | null;

  /**
   * Optional peer ID to get the representation for, from the perspective of this
   * peer
   */
  target?: string | null;
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

export interface PeerSetCardParams {
  /**
   * Body param: The peer card content to set
   */
  peer_card: Array<string>;

  /**
   * Query param: Optional target peer to set a card for, from the observer's
   * perspective. If not provided, sets the observer's own card
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
    type PeerCardResponse as PeerCardResponse,
    type SessionGet as SessionGet,
    type PeerChatResponse as PeerChatResponse,
    type PeerGetContextResponse as PeerGetContextResponse,
    type PeerGetRepresentationResponse as PeerGetRepresentationResponse,
    type PeerSearchResponse as PeerSearchResponse,
    PeersPage as PeersPage,
    type PeerUpdateParams as PeerUpdateParams,
    type PeerListParams as PeerListParams,
    type PeerCardParams as PeerCardParams,
    type PeerChatParams as PeerChatParams,
    type PeerGetContextParams as PeerGetContextParams,
    type PeerGetOrCreateParams as PeerGetOrCreateParams,
    type PeerGetRepresentationParams as PeerGetRepresentationParams,
    type PeerSearchParams as PeerSearchParams,
    type PeerSetCardParams as PeerSetCardParams,
  };

  export { Sessions as Sessions, type SessionListParams as SessionListParams };
}
