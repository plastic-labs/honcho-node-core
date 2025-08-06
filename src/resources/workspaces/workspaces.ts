// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as PeersAPI from './peers/peers';
import {
  PagePeer,
  PageSession,
  Peer,
  PeerChatParams,
  PeerChatResponse,
  PeerGetOrCreateParams,
  PeerListParams,
  PeerSearchParams,
  PeerSearchResponse,
  PeerUpdateParams,
  PeerWorkingRepresentationParams,
  PeerWorkingRepresentationResponse,
  Peers,
  PeersPage,
  SessionGet,
} from './peers/peers';
import * as MessagesAPI from './sessions/messages';
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
  SessionSearchResponse,
  SessionUpdateParams,
  Sessions as SessionsAPISessions,
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
   * Get the deriver processing status, optionally scoped to an observer, sender,
   * and/or session
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
   * workspace_id). Otherwise, it uses the workspace_id from the JWT.
   */
  getOrCreate(body: WorkspaceGetOrCreateParams, options?: Core.RequestOptions): Core.APIPromise<Workspace> {
    return this._client.post('/v2/workspaces', { body, ...options });
  }

  /**
   * Search a Workspace
   */
  search(
    workspaceId: string,
    body: WorkspaceSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkspaceSearchResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/search`, { body, ...options });
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
   * Per-session status when not filtered by session
   */
  sessions?: { [key: string]: DeriverStatus.Sessions } | null;
}

export namespace DeriverStatus {
  export interface Sessions {
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
     * Session ID if filtered by session
     */
    session_id?: string | null;
  }
}

export interface MessageSearchOptions {
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

export interface Workspace {
  id: string;

  created_at: string;

  configuration?: { [key: string]: unknown };

  metadata?: { [key: string]: unknown };
}

export type WorkspaceSearchResponse = Array<MessagesAPI.Message>;

export interface WorkspaceUpdateParams {
  configuration?: { [key: string]: unknown } | null;

  metadata?: { [key: string]: unknown } | null;
}

export interface WorkspaceListParams extends PageParams {
  /**
   * Body param:
   */
  filters?: { [key: string]: unknown } | null;
}

export interface WorkspaceDeriverStatusParams {
  /**
   * Optional observer ID to filter by
   */
  observer_id?: string | null;

  /**
   * Optional sender ID to filter by
   */
  sender_id?: string | null;

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

export interface WorkspaceSearchParams {
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

Workspaces.WorkspacesPage = WorkspacesPage;
Workspaces.Peers = Peers;
Workspaces.PeersPage = PeersPage;
Workspaces.Sessions = SessionsAPISessions;
Workspaces.SessionsPage = SessionsPage;

export declare namespace Workspaces {
  export {
    type DeriverStatus as DeriverStatus,
    type MessageSearchOptions as MessageSearchOptions,
    type Workspace as Workspace,
    type WorkspaceSearchResponse as WorkspaceSearchResponse,
    WorkspacesPage as WorkspacesPage,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
    type WorkspaceListParams as WorkspaceListParams,
    type WorkspaceDeriverStatusParams as WorkspaceDeriverStatusParams,
    type WorkspaceGetOrCreateParams as WorkspaceGetOrCreateParams,
    type WorkspaceSearchParams as WorkspaceSearchParams,
  };

  export {
    Peers as Peers,
    type PagePeer as PagePeer,
    type PageSession as PageSession,
    type Peer as Peer,
    type SessionGet as SessionGet,
    type PeerChatResponse as PeerChatResponse,
    type PeerSearchResponse as PeerSearchResponse,
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
    SessionsAPISessions as Sessions,
    type Session as Session,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionGetContextResponse as SessionGetContextResponse,
    type SessionSearchResponse as SessionSearchResponse,
    SessionsPage as SessionsPage,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
    type SessionCloneParams as SessionCloneParams,
    type SessionGetContextParams as SessionGetContextParams,
    type SessionGetOrCreateParams as SessionGetOrCreateParams,
    type SessionSearchParams as SessionSearchParams,
  };
}
