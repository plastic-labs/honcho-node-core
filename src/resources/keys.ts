// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Keys extends APIResource {
  /**
   * Create a new Key
   */
  create(params?: KeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  create(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  create(
    params: KeyCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
    const { expires_at, peer_id, session_id, workspace_id } = params;
    return this._client.post('/v1/keys', {
      query: { expires_at, peer_id, session_id, workspace_id },
      ...options,
    });
  }
}

export type KeyCreateResponse = unknown;

export interface KeyCreateParams {
  expires_at?: string | null;

  /**
   * ID of the peer to scope the key to
   */
  peer_id?: string | null;

  /**
   * ID of the session to scope the key to
   */
  session_id?: string | null;

  /**
   * ID of the workspace to scope the key to
   */
  workspace_id?: string | null;
}

export declare namespace Keys {
  export { type KeyCreateResponse as KeyCreateResponse, type KeyCreateParams as KeyCreateParams };
}
