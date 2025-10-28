// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { Page, type PageParams } from '../../../pagination';

export class Observations extends APIResource {
  /**
   * List all observations for a session.
   *
   * Returns paginated observations (documents) associated with this session.
   * Observations can be filtered by observer_id and observed_id using the filters
   * parameter.
   */
  list(
    workspaceId: string,
    sessionId: string,
    params?: ObservationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ObservationsPage, Observation>;
  list(
    workspaceId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ObservationsPage, Observation>;
  list(
    workspaceId: string,
    sessionId: string,
    params: ObservationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ObservationsPage, Observation> {
    if (isRequestOptions(params)) {
      return this.list(workspaceId, sessionId, {}, params);
    }
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(
      `/v2/workspaces/${workspaceId}/sessions/${sessionId}/observations/list`,
      ObservationsPage,
      { query: { page, reverse, size }, body, method: 'post', ...options },
    );
  }

  /**
   * Delete a specific observation.
   *
   * This permanently deletes the observation (document) from the theory-of-mind
   * system. This action cannot be undone.
   */
  delete(
    workspaceId: string,
    sessionId: string,
    observationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(
      `/v2/workspaces/${workspaceId}/sessions/${sessionId}/observations/${observationId}`,
      options,
    );
  }

  /**
   * Query observations using semantic search.
   *
   * Performs vector similarity search on observations to find semantically relevant
   * results. If observer_id and observed_id are provided in filters, only
   * observations matching those criteria will be searched. Otherwise, all
   * observations for the session are searched.
   */
  query(
    workspaceId: string,
    sessionId: string,
    body: ObservationQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObservationQueryResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/sessions/${sessionId}/observations/query`, {
      body,
      ...options,
    });
  }
}

export class ObservationsPage extends Page<Observation> {}

/**
 * Observation response - external view of a document
 */
export interface Observation {
  id: string;

  content: string;

  created_at: string;

  /**
   * The peer being observed
   */
  observed_id: string;

  /**
   * The peer who made the observation
   */
  observer_id: string;

  session_id: string;
}

export type ObservationDeleteResponse = unknown;

export type ObservationQueryResponse = Array<Observation>;

export interface ObservationListParams extends PageParams {
  /**
   * Query param: Whether to reverse the order of results
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filters?: { [key: string]: unknown } | null;
}

export interface ObservationQueryParams {
  /**
   * Semantic search query
   */
  query: string;

  /**
   * Maximum cosine distance threshold for results
   */
  distance?: number | null;

  /**
   * Additional filters to apply
   */
  filters?: { [key: string]: unknown } | null;

  /**
   * Number of results to return
   */
  top_k?: number;
}

Observations.ObservationsPage = ObservationsPage;

export declare namespace Observations {
  export {
    type Observation as Observation,
    type ObservationDeleteResponse as ObservationDeleteResponse,
    type ObservationQueryResponse as ObservationQueryResponse,
    ObservationsPage as ObservationsPage,
    type ObservationListParams as ObservationListParams,
    type ObservationQueryParams as ObservationQueryParams,
  };
}
