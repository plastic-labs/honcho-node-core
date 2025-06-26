// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as PeersAPI from './peers/peers';
import {
  PageSession,
  Peer,
  PeerChatParams,
  PeerChatResponse,
  PeerGetOrCreateParams,
  PeerListParams,
  PeerSearchParams,
  PeerUpdateParams,
  PeerWorkingRepresentationParams,
  PeerWorkingRepresentationResponse,
  Peers,
  PeersPage,
  SessionGet,
} from './peers/peers';
import * as MessagesAPI from './sessions/messages';
import { MessagesPage } from './sessions/messages';
import * as SessionsAPI from './sessions/sessions';
import {
  Session,
  SessionCloneParams,
  SessionDeleteResponse,
  SessionGetContextParams,
  SessionGetContextResponse,
  SessionGetOrCreateParams,
  SessionListParams,
  SessionSearchParams,
  SessionUpdateParams,
  Sessions,
  SessionsPage,
} from './sessions/sessions';
import { Page, type PageParams } from '../../pagination';

export class Workspaces extends APIResource {
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);

  /**
   * Update a Workspace
   */
  update(
    workspaceId: string,
    body: WorkspaceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Workspace> {
    return this._client.put(`/v2/workspaces/${workspaceId}`, { body, ...options });
  }

  /**
   * Get all Workspaces
   */
  list(
    params?: WorkspaceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WorkspacesPage, Workspace>;
  list(options?: Core.RequestOptions): Core.PagePromise<WorkspacesPage, Workspace>;
  list(
    params: WorkspaceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<WorkspacesPage, Workspace> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { page, size, ...body } = params;
    return this._client.getAPIList('/v2/workspaces/list', WorkspacesPage, {
      query: { page, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Get the deriver processing status, optionally scoped to a peer and/or session
   */
  deriverStatus(
    workspaceId: string,
    query?: WorkspaceDeriverStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeriverStatus>;
  deriverStatus(workspaceId: string, options?: Core.RequestOptions): Core.APIPromise<DeriverStatus>;
  deriverStatus(
    workspaceId: string,
    query: WorkspaceDeriverStatusParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeriverStatus> {
    if (isRequestOptions(query)) {
      return this.deriverStatus(workspaceId, {}, query);
    }
    return this._client.get(`/v2/workspaces/${workspaceId}/deriver/status`, { query, ...options });
  }

  /**
   * Get a Workspace by ID.
   *
   * If workspace_id is provided as a query parameter, it uses that (must match JWT
   * workspace_id). Otherwise, it uses the workspace_id from the JWT token.
   */
  getOrCreate(body: WorkspaceGetOrCreateParams, options?: Core.RequestOptions): Core.APIPromise<Workspace> {
    return this._client.post('/v2/workspaces', { body, ...options });
  }

  /**
   * Search a Workspace
   */
  search(
    workspaceId: string,
    params: WorkspaceSearchParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, MessagesAPI.Message> {
    const { body, page, size } = params;
    return this._client.getAPIList(`/v2/workspaces/${workspaceId}/search`, MessagesPage, {
      query: { page, size },
      body: body,
      method: 'post',
      ...options,
    });
  }
}

export class WorkspacesPage extends Page<Workspace> {}

export interface DeriverStatus {
  /**
   * Completed work units
   */
  completed_work_units: number;

  /**
   * Work units currently being processed
   */
  in_progress_work_units: number;

  /**
   * Work units waiting to be processed
   */
  pending_work_units: number;

  /**
   * Total work units
   */
  total_work_units: number;

  /**
   * ID of the peer (optional when filtering by session only)
   */
  peer_id?: string | null;

  /**
   * Session ID if filtered by session
   */
  session_id?: string | null;

  /**
   * Per-session status when not filtered by session
   */
  sessions?: { [key: string]: DeriverStatus } | null;
}

export interface Workspace {
  id: string;

  created_at: string;

  configuration?: { [key: string]: unknown };

  metadata?: { [key: string]: unknown };
}

export interface WorkspaceUpdateParams {
  configuration?: { [key: string]: unknown } | null;

  metadata?: { [key: string]: unknown } | null;
}

export interface WorkspaceListParams extends PageParams {
  /**
   * Body param:
   */
  filter?: { [key: string]: unknown } | null;
}

export interface WorkspaceDeriverStatusParams {
  /**
   * Include work units triggered by this peer
   */
  include_sender?: boolean;

  /**
   * Optional peer ID to filter by
   */
  peer_id?: string | null;

  /**
   * Optional session ID to filter by
   */
  session_id?: string | null;
}

export interface WorkspaceGetOrCreateParams {
  id: string;

  configuration?: { [key: string]: unknown };

  metadata?: { [key: string]: unknown };
}

export interface WorkspaceSearchParams extends PageParams {
  /**
   * Body param: Search query
   */
  body: string;
}

Workspaces.WorkspacesPage = WorkspacesPage;
Workspaces.Peers = Peers;
Workspaces.PeersPage = PeersPage;
Workspaces.Sessions = Sessions;
Workspaces.SessionsPage = SessionsPage;

export declare namespace Workspaces {
  export {
    type DeriverStatus as DeriverStatus,
    type Workspace as Workspace,
    WorkspacesPage as WorkspacesPage,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
    type WorkspaceListParams as WorkspaceListParams,
    type WorkspaceDeriverStatusParams as WorkspaceDeriverStatusParams,
    type WorkspaceGetOrCreateParams as WorkspaceGetOrCreateParams,
    type WorkspaceSearchParams as WorkspaceSearchParams,
  };

  export {
    Peers as Peers,
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

  export {
    Sessions as Sessions,
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
}

export { MessagesPage };
