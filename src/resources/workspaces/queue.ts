// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Queue extends APIResource {
  /**
   * Get the processing queue status for a Workspace, optionally scoped to an
   * observer, sender, and/or session.
   */
  status(
    workspaceId: string,
    query?: QueueStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueStatusResponse>;
  status(workspaceId: string, options?: Core.RequestOptions): Core.APIPromise<QueueStatusResponse>;
  status(
    workspaceId: string,
    query: QueueStatusParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueStatusResponse> {
    if (isRequestOptions(query)) {
      return this.status(workspaceId, {}, query);
    }
    return this._client.get(`/v2/workspaces/${workspaceId}/queue/status`, { query, ...options });
  }
}

/**
 * Aggregated processing queue status.
 */
export interface QueueStatusResponse {
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
  sessions?: { [key: string]: QueueStatusResponse.Sessions } | null;
}

export namespace QueueStatusResponse {
  /**
   * Status for a specific session within the processing queue.
   */
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

export interface QueueStatusParams {
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

export declare namespace Queue {
  export { type QueueStatusResponse as QueueStatusResponse, type QueueStatusParams as QueueStatusParams };
}
