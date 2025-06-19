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
    return this._client.put(`/v1/workspaces/${workspaceId}`, { body, ...options });
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
    return this._client.getAPIList('/v1/workspaces/list', WorkspacesPage, {
      query: { page, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Get a Workspace by ID.
   *
   * If workspace_id is provided as a query parameter, it uses that (must match JWT
   * workspace_id). Otherwise, it uses the workspace_id from the JWT token.
   */
  getOrCreate(body: WorkspaceGetOrCreateParams, options?: Core.RequestOptions): Core.APIPromise<Workspace> {
    return this._client.post('/v1/workspaces', { body, ...options });
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
    return this._client.getAPIList(`/v1/workspaces/${workspaceId}/search`, MessagesPage, {
      query: { page, size },
      body: body,
      method: 'post',
      ...options,
    });
  }
}

export class WorkspacesPage extends Page<Workspace> {}

export interface Workspace {
  id: string;

  created_at: string;

  configuration?: Record<string, unknown>;

  metadata?: Record<string, unknown>;
}

export interface WorkspaceUpdateParams {
  configuration?: Record<string, unknown> | null;

  metadata?: Record<string, unknown> | null;
}

export interface WorkspaceListParams extends PageParams {
  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;
}

export interface WorkspaceGetOrCreateParams {
  id: string;

  configuration?: Record<string, unknown>;

  metadata?: Record<string, unknown>;
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
    type Workspace as Workspace,
    WorkspacesPage as WorkspacesPage,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
    type WorkspaceListParams as WorkspaceListParams,
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
