// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as SessionsSessionsAPI from '../sessions/sessions';
import { SessionsPage } from '../sessions/sessions';
import { type PageParams } from '../../../pagination';

export class Sessions extends APIResource {
  /**
   * Get all Sessions for a Peer, paginated with optional filters.
   */
  list(
    workspaceId: string,
    peerId: string,
    params?: SessionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsPage, SessionsSessionsAPI.Session>;
  list(
    workspaceId: string,
    peerId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsPage, SessionsSessionsAPI.Session>;
  list(
    workspaceId: string,
    peerId: string,
    params: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsPage, SessionsSessionsAPI.Session> {
    if (isRequestOptions(params)) {
      return this.list(workspaceId, peerId, {}, params);
    }
    const { page, size, ...body } = params;
    return this._client.getAPIList(`/v2/workspaces/${workspaceId}/peers/${peerId}/sessions`, SessionsPage, {
      query: { page, size },
      body,
      method: 'post',
      ...options,
    });
  }
}

export interface SessionListParams extends PageParams {
  /**
   * Body param:
   */
  filters?: { [key: string]: unknown } | null;
}

export declare namespace Sessions {
  export { type SessionListParams as SessionListParams };
}

export { SessionsPage };
