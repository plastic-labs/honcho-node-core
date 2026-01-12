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
   * Get all Peers in a Session. Results are paginated.
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
   * Add Peers to a Session. If a Peer does not yet exist, it will be created
   * automatically.
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
   * Get the configuration for a Peer in a Session.
   */
  config(
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
   * Remove Peers by ID from a Session.
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
   * Set the Peers in a Session. If a Peer does not yet exist, it will be created
   * automatically.
   *
   * This will fully replace the current set of Peers in the Session.
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
   * Set the configuration for a Peer in a Session.
   */
  setConfig(
    workspaceId: string,
    sessionId: string,
    peerId: string,
    body: PeerSetConfigParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/peers/${peerId}/config`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface SessionPeerConfig {
  /**
   * Whether Honcho will use reasoning to form a representation of this peer
   */
  observe_me?: boolean | null;

  /**
   * Whether this peer should form a session-level theory-of-mind representation of
   * other peers in the session
   */
  observe_others?: boolean | null;
}

export interface PeerListParams extends PageParams {}

export type PeerAddParams = { [key: string]: SessionPeerConfig };

export type PeerRemoveParams = Array<string>;

export type PeerSetParams = { [key: string]: SessionPeerConfig };

export interface PeerSetConfigParams {
  /**
   * Whether Honcho will use reasoning to form a representation of this peer
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
    type PeerListParams as PeerListParams,
    type PeerAddParams as PeerAddParams,
    type PeerRemoveParams as PeerRemoveParams,
    type PeerSetParams as PeerSetParams,
    type PeerSetConfigParams as PeerSetConfigParams,
  };
}

export { PeersPage };
