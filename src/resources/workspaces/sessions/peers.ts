// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as PeersAPI from '../peers/peers';
import { PeersPage } from '../peers/peers';
import * as SessionsAPI from './sessions';
import { type PageParams } from '../../../pagination';

export class Peers extends APIResource {
  /**
   * Get peers from a session
   */
  list(
    workspaceId: string,
    sessionId: string,
    query?: PeerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PeersPage, PeersAPI.Peer>;
  list(
    workspaceId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PeersPage, PeersAPI.Peer>;
  list(
    workspaceId: string,
    sessionId: string,
    query: PeerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PeersPage, PeersAPI.Peer> {
    if (isRequestOptions(query)) {
      return this.list(workspaceId, sessionId, {}, query);
    }
    return this._client.getAPIList(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/peers`, PeersPage, {
      query,
      ...options,
    });
  }

  /**
   * Add peers to a session
   */
  add(
    workspaceId: string,
    sessionId: string,
    body: PeerAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionsAPI.Session> {
    return this._client.post(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/peers`, {
      body,
      ...options,
    });
  }

  /**
   * Get the configuration for a peer in a session
   */
  getConfig(
    workspaceId: string,
    sessionId: string,
    peerId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionPeerConfig> {
    return this._client.get(
      `/v2/workspaces/${workspaceId}/sessions/${sessionId}/peers/${peerId}/config`,
      options,
    );
  }

  /**
   * Remove peers from a session
   */
  remove(
    workspaceId: string,
    sessionId: string,
    body: PeerRemoveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionsAPI.Session> {
    return this._client.delete(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/peers`, {
      body,
      ...options,
    });
  }

  /**
   * Set the peers in a session
   */
  set(
    workspaceId: string,
    sessionId: string,
    body: PeerSetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionsAPI.Session> {
    return this._client.put(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/peers`, {
      body,
      ...options,
    });
  }

  /**
   * Set the configuration for a peer in a session
   */
  setConfig(
    workspaceId: string,
    sessionId: string,
    peerId: string,
    body: PeerSetConfigParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/peers/${peerId}/config`, {
      body,
      ...options,
    });
  }
}

export interface SessionPeerConfig {
  /**
   * Whether honcho should form a global theory-of-mind representation of this peer
   */
  observe_me?: boolean | null;

  /**
   * Whether this peer should form a session-level theory-of-mind representation of
   * other peers in the session
   */
  observe_others?: boolean | null;
}

export type PeerSetConfigResponse = unknown;

export interface PeerListParams extends PageParams {}

export type PeerAddParams = { [key: string]: SessionPeerConfig };

export type PeerRemoveParams = Array<string>;

export type PeerSetParams = { [key: string]: SessionPeerConfig };

export interface PeerSetConfigParams {
  /**
   * Whether honcho should form a global theory-of-mind representation of this peer
   */
  observe_me?: boolean | null;

  /**
   * Whether this peer should form a session-level theory-of-mind representation of
   * other peers in the session
   */
  observe_others?: boolean | null;
}

export declare namespace Peers {
  export {
    type SessionPeerConfig as SessionPeerConfig,
    type PeerSetConfigResponse as PeerSetConfigResponse,
    type PeerListParams as PeerListParams,
    type PeerAddParams as PeerAddParams,
    type PeerRemoveParams as PeerRemoveParams,
    type PeerSetParams as PeerSetParams,
    type PeerSetConfigParams as PeerSetConfigParams,
  };
}

export { PeersPage };
