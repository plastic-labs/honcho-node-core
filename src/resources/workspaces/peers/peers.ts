// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MessagesAPI from './messages';
import { MessageCreateParams, MessageCreateResponse, MessageListParams, Messages } from './messages';
import * as SessionsAPI from './sessions';
import { SessionListParams, Sessions } from './sessions';
import * as SessionsMessagesAPI from '../sessions/messages';
import { MessagesPage } from '../sessions/messages';
import * as SessionsSessionsAPI from '../sessions/sessions';
import { Page, type PageParams } from '../../../pagination';

export class Peers extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

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
   * workspace_id). Otherwise, it uses the peer_id from the JWT token.
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
    params: PeerSearchParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, SessionsMessagesAPI.Message> {
    const { page, size, ...body } = params;
    return this._client.getAPIList(`/v2/workspaces/${workspaceId}/peers/${peerId}/search`, MessagesPage, {
      query: { page, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Get a peer's working representation for a session.
   *
   * If a session_id is provided in the body, we get the working representation of
   * the peer in that session.
   *
   * In the current implementation, we don't offer representations of `target` so
   * that parameter is ignored. Future releases will allow for this.
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
  filter?: { [key: string]: unknown } | null;
}

export interface PeerChatResponse {
  content: string;
}

export type PeerWorkingRepresentationResponse = { [key: string]: unknown };

export interface PeerUpdateParams {
  configuration?: { [key: string]: unknown } | null;

  metadata?: { [key: string]: unknown } | null;
}

export interface PeerListParams extends PageParams {
  /**
   * Body param:
   */
  filter?: { [key: string]: unknown } | null;
}

export interface PeerChatParams {
  queries: string | Array<string>;

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

export interface PeerSearchParams extends PageParams {
  /**
   * Body param: Search query
   */
  query: string;

  /**
   * Body param: Whether to explicitly use semantic search to filter the results
   */
  semantic?: boolean | null;
}

export interface PeerWorkingRepresentationParams {
  /**
   * Get the working representation within this session
   */
  session_id: string;

  /**
   * Optional peer ID to get the representation for, from the perspective of this
   * peer
   */
  target?: string | null;
}

Peers.PeersPage = PeersPage;
Peers.Sessions = Sessions;
Peers.Messages = Messages;

export declare namespace Peers {
  export {
    type PageSession as PageSession,
    type Peer as Peer,
    type SessionGet as SessionGet,
    type PeerChatResponse as PeerChatResponse,
    type PeerWorkingRepresentationResponse as PeerWorkingRepresentationResponse,
    PeersPage as PeersPage,
    type PeerUpdateParams as PeerUpdateParams,
    type PeerListParams as PeerListParams,
    type PeerChatParams as PeerChatParams,
    type PeerGetOrCreateParams as PeerGetOrCreateParams,
    type PeerSearchParams as PeerSearchParams,
    type PeerWorkingRepresentationParams as PeerWorkingRepresentationParams,
  };

  export { Sessions as Sessions, type SessionListParams as SessionListParams };

  export {
    Messages as Messages,
    type MessageCreateResponse as MessageCreateResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}

export { MessagesPage };
