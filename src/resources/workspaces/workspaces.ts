// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as WebhooksAPI from './webhooks';
import {
  WebhookDeleteResponse,
  WebhookEndpoint,
  WebhookEndpointsPage,
  WebhookGetOrCreateParams,
  WebhookListParams,
  WebhookTestEmitResponse,
  Webhooks,
} from './webhooks';
import * as PeersAPI from './peers/peers';
import {
  PagePeer,
  PageSession,
  Peer,
  PeerCardParams,
  PeerCardResponse,
  PeerChatParams,
  PeerChatResponse,
  PeerGetOrCreateParams,
  PeerListParams,
  PeerSearchParams,
  PeerSearchResponse,
  PeerSetCardParams,
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
  SessionConfiguration,
  SessionDeleteResponse,
  SessionGetContextParams,
  SessionGetContextResponse,
  SessionGetOrCreateParams,
  SessionListParams,
  SessionSearchParams,
  SessionSearchResponse,
  SessionSummariesResponse,
  SessionUpdateParams,
  Sessions as SessionsAPISessions,
  SessionsPage,
  Summary,
} from './sessions/sessions';
import { Page, type PageParams } from '../../pagination';

export class Workspaces extends APIResource {
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);

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
   * Delete a Workspace
   */
  delete(workspaceId: string, options?: Core.RequestOptions): Core.APIPromise<Workspace> {
    return this._client.delete(`/v2/workspaces/${workspaceId}`, options);
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

  /**
   * Manually trigger a dream task immediately for a specific collection.
   *
   * This endpoint bypasses all automatic dream conditions (document threshold,
   * minimum hours between dreams) and executes the dream task immediately without
   * delay.
   */
  triggerDream(
    workspaceId: string,
    body: WorkspaceTriggerDreamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/v2/workspaces/${workspaceId}/trigger_dream`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class WorkspacesPage extends Page<Workspace> {}

export interface DeriverConfiguration {
  /**
   * TODO: currently unused. Custom instructions to use for the deriver on this
   * workspace/session/message.
   */
  custom_instructions?: string | null;

  /**
   * Whether to enable deriver functionality.
   */
  enabled?: boolean | null;
}

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

export interface DreamConfiguration {
  /**
   * Whether to enable dream functionality. If deriver is disabled, dreams will also
   * be disabled and this setting will be ignored.
   */
  enabled?: boolean | null;
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

export interface PeerCardConfiguration {
  /**
   * Whether to generate peer card based on content.
   */
  create?: boolean | null;

  /**
   * Whether to use peer card related to this peer during deriver process.
   */
  use?: boolean | null;
}

export interface SummaryConfiguration {
  /**
   * Whether to enable summary functionality.
   */
  enabled?: boolean | null;

  /**
   * Number of messages per long summary. Must be positive, greater than or equal to
   * 20, and greater than messages_per_short_summary.
   */
  messages_per_long_summary?: number | null;

  /**
   * Number of messages per short summary. Must be positive, greater than or equal to
   * 10, and less than messages_per_long_summary.
   */
  messages_per_short_summary?: number | null;
}

export interface Workspace {
  id: string;

  created_at: string;

  configuration?: { [key: string]: unknown };

  metadata?: { [key: string]: unknown };
}

/**
 * The set of options that can be in a workspace DB-level configuration dictionary.
 *
 * All fields are optional. Session-level configuration overrides workspace-level
 * configuration, which overrides global configuration.
 */
export interface WorkspaceConfiguration {
  /**
   * Configuration for deriver functionality.
   */
  deriver?: DeriverConfiguration | null;

  /**
   * Configuration for dream functionality. If deriver is disabled, dreams will also
   * be disabled and these settings will be ignored.
   */
  dream?: DreamConfiguration | null;

  /**
   * Configuration for peer card functionality. If deriver is disabled, peer cards
   * will also be disabled and these settings will be ignored.
   */
  peer_card?: PeerCardConfiguration | null;

  /**
   * Configuration for summary functionality.
   */
  summary?: SummaryConfiguration | null;

  [k: string]: unknown;
}

export type WorkspaceSearchResponse = Array<MessagesAPI.Message>;

export interface WorkspaceUpdateParams {
  /**
   * The set of options that can be in a workspace DB-level configuration dictionary.
   *
   * All fields are optional. Session-level configuration overrides workspace-level
   * configuration, which overrides global configuration.
   */
  configuration?: WorkspaceConfiguration | null;

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

  /**
   * The set of options that can be in a workspace DB-level configuration dictionary.
   *
   * All fields are optional. Session-level configuration overrides workspace-level
   * configuration, which overrides global configuration.
   */
  configuration?: WorkspaceConfiguration;

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

export interface WorkspaceTriggerDreamParams {
  /**
   * Type of dream to trigger
   */
  dream_type: 'consolidate' | 'agent';

  /**
   * Observer peer name
   */
  observer: string;

  /**
   * Observed peer name (defaults to observer if not specified)
   */
  observed?: string | null;
}

Workspaces.WorkspacesPage = WorkspacesPage;
Workspaces.Peers = Peers;
Workspaces.PeersPage = PeersPage;
Workspaces.Sessions = SessionsAPISessions;
Workspaces.SessionsPage = SessionsPage;
Workspaces.Webhooks = Webhooks;
Workspaces.WebhookEndpointsPage = WebhookEndpointsPage;

export declare namespace Workspaces {
  export {
    type DeriverConfiguration as DeriverConfiguration,
    type DeriverStatus as DeriverStatus,
    type DreamConfiguration as DreamConfiguration,
    type MessageSearchOptions as MessageSearchOptions,
    type PeerCardConfiguration as PeerCardConfiguration,
    type SummaryConfiguration as SummaryConfiguration,
    type Workspace as Workspace,
    type WorkspaceConfiguration as WorkspaceConfiguration,
    type WorkspaceSearchResponse as WorkspaceSearchResponse,
    WorkspacesPage as WorkspacesPage,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
    type WorkspaceListParams as WorkspaceListParams,
    type WorkspaceDeriverStatusParams as WorkspaceDeriverStatusParams,
    type WorkspaceGetOrCreateParams as WorkspaceGetOrCreateParams,
    type WorkspaceSearchParams as WorkspaceSearchParams,
    type WorkspaceTriggerDreamParams as WorkspaceTriggerDreamParams,
  };

  export {
    Peers as Peers,
    type PagePeer as PagePeer,
    type PageSession as PageSession,
    type Peer as Peer,
    type PeerCardResponse as PeerCardResponse,
    type SessionGet as SessionGet,
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
    type PeerSetCardParams as PeerSetCardParams,
    type PeerWorkingRepresentationParams as PeerWorkingRepresentationParams,
  };

  export {
    SessionsAPISessions as Sessions,
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
    Webhooks as Webhooks,
    type WebhookEndpoint as WebhookEndpoint,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookTestEmitResponse as WebhookTestEmitResponse,
    WebhookEndpointsPage as WebhookEndpointsPage,
    type WebhookListParams as WebhookListParams,
    type WebhookGetOrCreateParams as WebhookGetOrCreateParams,
  };
}
