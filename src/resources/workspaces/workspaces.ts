// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ConclusionsAPI from './conclusions';
import {
  Conclusion,
  ConclusionCreateParams,
  ConclusionCreateResponse,
  ConclusionListParams,
  ConclusionQueryParams,
  ConclusionQueryResponse,
  Conclusions,
  ConclusionsPage,
} from './conclusions';
import * as QueueAPI from './queue';
import { Queue, QueueStatusParams, QueueStatusResponse } from './queue';
import * as WebhooksAPI from './webhooks';
import {
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
  PeerContextParams,
  PeerContextResponse,
  PeerGetOrCreateParams,
  PeerListParams,
  PeerRepresentationParams,
  PeerRepresentationResponse,
  PeerSearchParams,
  PeerSearchResponse,
  PeerSetCardParams,
  PeerUpdateParams,
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
  SessionContextParams,
  SessionContextResponse,
  SessionDeleteResponse,
  SessionGetOrCreateParams,
  SessionListParams,
  SessionSearchParams,
  SessionSearchResponse,
  SessionSummariesResponse,
  SessionUpdateParams,
  Sessions,
  SessionsPage,
  Summary,
} from './sessions/sessions';
import { Page, type PageParams } from '../../pagination';

export class Workspaces extends APIResource {
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  queue: QueueAPI.Queue = new QueueAPI.Queue(this._client);
  conclusions: ConclusionsAPI.Conclusions = new ConclusionsAPI.Conclusions(this._client);

  /**
   * Update Workspace metadata and/or configuration.
   */
  update(
    workspaceId: string,
    body: WorkspaceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Workspace> {
    return this._client.put(`/v2/workspaces/${workspaceId}`, { body, ...options });
  }

  /**
   * Get all Workspaces, paginated with optional filters.
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
   * Delete a Workspace. This will permanently delete all sessions, peers, messages,
   * and conclusions associated with the workspace.
   *
   * This action cannot be undone.
   */
  delete(workspaceId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v2/workspaces/${workspaceId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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
   * Manually schedule a dream task for a specific collection.
   *
   * This endpoint bypasses all automatic dream conditions (document threshold,
   * minimum hours between dreams) and schedules the dream task for a future
   * execution.
   *
   * Currently this endpoint only supports scheduling immediate dreams. In the
   * future, users may pass a cron-style expression to schedule dreams at specific
   * times.
   */
  scheduleDream(
    workspaceId: string,
    body: WorkspaceScheduleDreamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/v2/workspaces/${workspaceId}/schedule_dream`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Search messages in a Workspace using optional filters. Use `limit` to control
   * the number of results returned.
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

export interface DreamConfiguration {
  /**
   * Whether to enable dream functionality. If reasoning is disabled, dreams will
   * also be disabled and this setting will be ignored.
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
   * Whether to use peer card related to this peer during reasoning process.
   */
  use?: boolean | null;
}

export interface ReasoningConfiguration {
  /**
   * TODO: currently unused. Custom instructions to use for the reasoning system on
   * this workspace/session/message.
   */
  custom_instructions?: string | null;

  /**
   * Whether to enable reasoning functionality.
   */
  enabled?: boolean | null;
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
   * Configuration for dream functionality. If reasoning is disabled, dreams will
   * also be disabled and these settings will be ignored.
   */
  dream?: DreamConfiguration | null;

  /**
   * Configuration for peer card functionality. If reasoning is disabled, peer cards
   * will also be disabled and these settings will be ignored.
   */
  peer_card?: PeerCardConfiguration | null;

  /**
   * Configuration for reasoning functionality.
   */
  reasoning?: ReasoningConfiguration | null;

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

export interface WorkspaceScheduleDreamParams {
  /**
   * Type of dream to schedule
   */
  dream_type: 'omni';

  /**
   * Observer peer name
   */
  observer: string;

  /**
   * Session ID to scope the dream to
   */
  session_id: string;

  /**
   * Observed peer name (defaults to observer if not specified)
   */
  observed?: string | null;
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
Workspaces.Sessions = Sessions;
Workspaces.SessionsPage = SessionsPage;
Workspaces.Webhooks = Webhooks;
Workspaces.WebhookEndpointsPage = WebhookEndpointsPage;
Workspaces.Queue = Queue;
Workspaces.Conclusions = Conclusions;
Workspaces.ConclusionsPage = ConclusionsPage;

export declare namespace Workspaces {
  export {
    type DreamConfiguration as DreamConfiguration,
    type MessageSearchOptions as MessageSearchOptions,
    type PeerCardConfiguration as PeerCardConfiguration,
    type ReasoningConfiguration as ReasoningConfiguration,
    type SummaryConfiguration as SummaryConfiguration,
    type Workspace as Workspace,
    type WorkspaceConfiguration as WorkspaceConfiguration,
    type WorkspaceSearchResponse as WorkspaceSearchResponse,
    WorkspacesPage as WorkspacesPage,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
    type WorkspaceListParams as WorkspaceListParams,
    type WorkspaceGetOrCreateParams as WorkspaceGetOrCreateParams,
    type WorkspaceScheduleDreamParams as WorkspaceScheduleDreamParams,
    type WorkspaceSearchParams as WorkspaceSearchParams,
  };

  export {
    Peers as Peers,
    type PagePeer as PagePeer,
    type PageSession as PageSession,
    type Peer as Peer,
    type PeerCardResponse as PeerCardResponse,
    type SessionGet as SessionGet,
    type PeerChatResponse as PeerChatResponse,
    type PeerContextResponse as PeerContextResponse,
    type PeerRepresentationResponse as PeerRepresentationResponse,
    type PeerSearchResponse as PeerSearchResponse,
    PeersPage as PeersPage,
    type PeerUpdateParams as PeerUpdateParams,
    type PeerListParams as PeerListParams,
    type PeerCardParams as PeerCardParams,
    type PeerChatParams as PeerChatParams,
    type PeerContextParams as PeerContextParams,
    type PeerGetOrCreateParams as PeerGetOrCreateParams,
    type PeerRepresentationParams as PeerRepresentationParams,
    type PeerSearchParams as PeerSearchParams,
    type PeerSetCardParams as PeerSetCardParams,
  };

  export {
    Sessions as Sessions,
    type Session as Session,
    type SessionConfiguration as SessionConfiguration,
    type Summary as Summary,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionContextResponse as SessionContextResponse,
    type SessionSearchResponse as SessionSearchResponse,
    type SessionSummariesResponse as SessionSummariesResponse,
    SessionsPage as SessionsPage,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
    type SessionCloneParams as SessionCloneParams,
    type SessionContextParams as SessionContextParams,
    type SessionGetOrCreateParams as SessionGetOrCreateParams,
    type SessionSearchParams as SessionSearchParams,
  };

  export {
    Webhooks as Webhooks,
    type WebhookEndpoint as WebhookEndpoint,
    type WebhookTestEmitResponse as WebhookTestEmitResponse,
    WebhookEndpointsPage as WebhookEndpointsPage,
    type WebhookListParams as WebhookListParams,
    type WebhookGetOrCreateParams as WebhookGetOrCreateParams,
  };

  export {
    Queue as Queue,
    type QueueStatusResponse as QueueStatusResponse,
    type QueueStatusParams as QueueStatusParams,
  };

  export {
    Conclusions as Conclusions,
    type Conclusion as Conclusion,
    type ConclusionCreateResponse as ConclusionCreateResponse,
    type ConclusionQueryResponse as ConclusionQueryResponse,
    ConclusionsPage as ConclusionsPage,
    type ConclusionCreateParams as ConclusionCreateParams,
    type ConclusionListParams as ConclusionListParams,
    type ConclusionQueryParams as ConclusionQueryParams,
  };
}
