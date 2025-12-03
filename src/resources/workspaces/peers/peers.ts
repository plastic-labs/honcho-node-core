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
   * Get context for a peer, including their representation and peer card.
   *
   * This endpoint returns the working representation and peer card for a peer. If a
   * target is specified, returns the context for the target from the observer peer's
   * perspective. If no target is specified, returns the peer's own context
   * (self-observation).
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
   * A Representation is a traversable and diffable map of observations. At the base,
   * we have a list of explicit observations, derived from a peer's messages.
   *
   * From there, deductive observations can be made by establishing logical
   * relationships between explicit observations.
   *
   * In the future, we can add more levels of reasoning on top of these.
   *
   * All of a peer's observations are stored as documents in a collection. These
   * documents can be queried in various ways to produce this Representation object.
   *
   * Additionally, a "working representation" is a version of this data structure
   * representing the most recent observations within a single session.
   *
   * A representation can have a maximum number of observations, which is applied
   * individually to each level of reasoning. If a maximum is set, observations are
   * added and removed in FIFO order.
   */
  representation?: PeerGetContextResponse.Representation | null;
}

export namespace PeerGetContextResponse {
  /**
   * A Representation is a traversable and diffable map of observations. At the base,
   * we have a list of explicit observations, derived from a peer's messages.
   *
   * From there, deductive observations can be made by establishing logical
   * relationships between explicit observations.
   *
   * In the future, we can add more levels of reasoning on top of these.
   *
   * All of a peer's observations are stored as documents in a collection. These
   * documents can be queried in various ways to produce this Representation object.
   *
   * Additionally, a "working representation" is a version of this data structure
   * representing the most recent observations within a single session.
   *
   * A representation can have a maximum number of observations, which is applied
   * individually to each level of reasoning. If a maximum is set, observations are
   * added and removed in FIFO order.
   */
  export interface Representation {
    /**
     * Conclusions that MUST be true given explicit facts and premises - strict logical
     * necessities. Each deduction should have premises and a single conclusion.
     */
    deductive?: Array<Representation.Deductive>;

    /**
     * Facts LITERALLY stated by the user - direct quotes or clear paraphrases only, no
     * interpretation or inference. Example: ['The user is 25 years old', 'The user has
     * a dog']
     */
    explicit?: Array<Representation.Explicit>;
  }

  export namespace Representation {
    /**
     * Deductive observation with multiple premises and one conclusion, plus metadata.
     */
    export interface Deductive {
      /**
       * The deductive conclusion
       */
      conclusion: string;

      created_at: string;

      message_ids: Array<number>;

      session_name: string;

      /**
       * Supporting premises or evidence for this conclusion
       */
      premises?: Array<string>;
    }

    /**
     * Explicit observation with content and metadata.
     */
    export interface Explicit {
      /**
       * The explicit observation
       */
      content: string;

      created_at: string;

      message_ids: Array<number>;

      session_name: string;
    }
  }
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

export interface PeerGetContextParams {
  /**
   * Whether to include the most derived observations in the representation
   */
  include_most_derived?: boolean;

  /**
   * Maximum number of observations to include in the representation
   */
  max_observations?: number | null;

  /**
   * Only used if `search_query` is provided. Maximum distance for semantically
   * relevant observations
   */
  search_max_distance?: number | null;

  /**
   * Optional query to curate the representation around semantic search results
   */
  search_query?: string | null;

  /**
   * Only used if `search_query` is provided. Number of semantic-search-retrieved
   * observations to include
   */
  search_top_k?: number | null;

  /**
   * The target peer to get context for. If not provided, returns the peer's own
   * context (self-observation)
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

export interface PeerSetCardParams {
  /**
   * Body param: The peer card content to set
   */
  peer_card: Array<string>;

  /**
   * Query param: The peer whose card to set. If not provided, sets the observer's
   * own card
   */
  target?: string | null;
}

export interface PeerWorkingRepresentationParams {
  /**
   * Only used if `search_query` is provided. Whether to include the most derived
   * observations in the representation
   */
  include_most_derived?: boolean | null;

  /**
   * Only used if `search_query` is provided. Maximum number of observations to
   * include in the representation
   */
  max_observations?: number | null;

  /**
   * Only used if `search_query` is provided. Maximum distance to search for
   * semantically relevant observations
   */
  search_max_distance?: number | null;

  /**
   * Optional input to curate the representation around semantic search results
   */
  search_query?: string | null;

  /**
   * Only used if `search_query` is provided. Number of semantic-search-retrieved
   * observations to include in the representation
   */
  search_top_k?: number | null;

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
    type PeerCardResponse as PeerCardResponse,
    type SessionGet as SessionGet,
    type PeerChatResponse as PeerChatResponse,
    type PeerGetContextResponse as PeerGetContextResponse,
    type PeerSearchResponse as PeerSearchResponse,
    type PeerWorkingRepresentationResponse as PeerWorkingRepresentationResponse,
    PeersPage as PeersPage,
    type PeerUpdateParams as PeerUpdateParams,
    type PeerListParams as PeerListParams,
    type PeerCardParams as PeerCardParams,
    type PeerChatParams as PeerChatParams,
    type PeerGetContextParams as PeerGetContextParams,
    type PeerGetOrCreateParams as PeerGetOrCreateParams,
    type PeerSearchParams as PeerSearchParams,
    type PeerSetCardParams as PeerSetCardParams,
    type PeerWorkingRepresentationParams as PeerWorkingRepresentationParams,
  };

  export { Sessions as Sessions, type SessionListParams as SessionListParams };
}
