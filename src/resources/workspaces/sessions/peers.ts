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
    return this._client.getAPIList(`/v1/workspaces/${workspaceId}/sessions/${sessionId}/peers`, PeersPage, {
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
    return this._client.post(`/v1/workspaces/${workspaceId}/sessions/${sessionId}/peers`, {
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
  ): Core.APIPromise<PeerGetConfigResponse> {
    return this._client.get(
      `/v1/workspaces/${workspaceId}/sessions/${sessionId}/peers/${peerId}/config`,
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
    return this._client.delete(`/v1/workspaces/${workspaceId}/sessions/${sessionId}/peers`, {
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
    return this._client.put(`/v1/workspaces/${workspaceId}/sessions/${sessionId}/peers`, {
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
    return this._client.post(`/v1/workspaces/${workspaceId}/sessions/${sessionId}/peers/${peerId}/config`, {
      body,
      ...options,
    });
  }
}

export interface PeerGetConfigResponse {
  /**
   * Whether other peers in this session should try to form a session-level
   * theory-of-mind representation of this peer
   */
  observe_me?: boolean;

  /**
   * Whether this peer should form a session-level theory-of-mind representation of
   * other peers in the session
   */
  observe_others?: boolean;
}

export type PeerSetConfigResponse = unknown;

export interface PeerListParams extends PageParams {}

export type PeerAddParams = Record<string, PeerAddParams.Body>;

export namespace PeerAddParams {
  export interface Body {
    /**
     * Whether other peers in this session should try to form a session-level
     * theory-of-mind representation of this peer
     */
    observe_me?: boolean;

    /**
     * Whether this peer should form a session-level theory-of-mind representation of
     * other peers in the session
     */
    observe_others?: boolean;
  }
}

export type PeerRemoveParams = Array<string>;

export type PeerSetParams = Record<string, PeerSetParams.Body>;

export namespace PeerSetParams {
  export interface Body {
    /**
     * Whether other peers in this session should try to form a session-level
     * theory-of-mind representation of this peer
     */
    observe_me?: boolean;

    /**
     * Whether this peer should form a session-level theory-of-mind representation of
     * other peers in the session
     */
    observe_others?: boolean;
  }
}

export interface PeerSetConfigParams {
  /**
   * Whether other peers in this session should try to form a session-level
   * theory-of-mind representation of this peer
   */
  observe_me?: boolean;

  /**
   * Whether this peer should form a session-level theory-of-mind representation of
   * other peers in the session
   */
  observe_others?: boolean;
}

export declare namespace Peers {
  export {
    type PeerGetConfigResponse as PeerGetConfigResponse,
    type PeerSetConfigResponse as PeerSetConfigResponse,
    type PeerListParams as PeerListParams,
    type PeerAddParams as PeerAddParams,
    type PeerRemoveParams as PeerRemoveParams,
    type PeerSetParams as PeerSetParams,
    type PeerSetConfigParams as PeerSetConfigParams,
  };
}

export { PeersPage };
