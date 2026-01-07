// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Queue extends APIResource {
  /**
   * Get the processing queue status for a Workspace, optionally scoped to an
   * observer, sender, and/or session.
   */
  getStatus(
    workspaceId: string,
    query?: QueueGetStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueGetStatusResponse>;
  getStatus(workspaceId: string, options?: Core.RequestOptions): Core.APIPromise<QueueGetStatusResponse>;
  getStatus(
    workspaceId: string,
    query: QueueGetStatusParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueGetStatusResponse> {
    if (isRequestOptions(query)) {
      return this.getStatus(workspaceId, {}, query);
    }
    return this._client.get(`/v2/workspaces/${workspaceId}/queue/status`, { query, ...options });
  }
}

/**
 * Aggregated processing queue status.
 */
export interface QueueGetStatusResponse {
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
  sessions?: { [key: string]: QueueGetStatusResponse.Sessions } | null;
}

export namespace QueueGetStatusResponse {
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

export interface QueueGetStatusParams {
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
  export {
    type QueueGetStatusResponse as QueueGetStatusResponse,
    type QueueGetStatusParams as QueueGetStatusParams,
  };
}
