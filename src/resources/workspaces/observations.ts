// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Page, type PageParams } from '../../pagination';

export class Observations extends APIResource {
  /**
   * List all observations using custom filters. Observations are listed by recency
   * unless `reverse` is set to `true`.
   *
   * Observations can be filtered by session_id, observer_id and observed_id using
   * the filters parameter.
   */
  list(
    workspaceId: string,
    params?: ObservationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ObservationsPage, Observations>;
  list(workspaceId: string, options?: Core.RequestOptions): Core.PagePromise<ObservationsPage, Observations>;
  list(
    workspaceId: string,
    params: ObservationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ObservationsPage, Observations> {
    if (isRequestOptions(params)) {
      return this.list(workspaceId, {}, params);
    }
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(`/v2/workspaces/${workspaceId}/observations/list`, ObservationsPage, {
      query: { page, reverse, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Delete a specific observation.
   *
   * This permanently deletes the observation (document) from the theory-of-mind
   * system. This action cannot be undone.
   */
  delete(
    workspaceId: string,
    observationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(`/v2/workspaces/${workspaceId}/observations/${observationId}`, options);
  }

  /**
   * Query observations using semantic search.
   *
   * Performs vector similarity search on observations to find semantically relevant
   * results. Observer and observed are required for semantic search and must be
   * provided in filters.
   */
  query(
    workspaceId: string,
    body: ObservationQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObservationQueryResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/observations/query`, { body, ...options });
  }
}

export class ObservationsPage extends Page<Observations> {}

/**
 * Schema for listing observations with optional filters
 */
export interface ObservationGet {
  filters?: { [key: string]: unknown } | null;
}

/**
 * Query parameters for semantic search of observations
 */
export interface ObservationQuery {
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

/**
 * Observation response - external view of a document
 */
export interface Observations {
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

export interface PageObservation {
  items: Array<Observations>;

  page: number;

  size: number;

  pages?: number;

  total?: number;
}

export type ObservationDeleteResponse = unknown;

export type ObservationQueryResponse = Array<Observations>;

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
    type ObservationGet as ObservationGet,
    type ObservationQuery as ObservationQuery,
    type Observations as Observations,
    type PageObservation as PageObservation,
    type ObservationDeleteResponse as ObservationDeleteResponse,
    type ObservationQueryResponse as ObservationQueryResponse,
    ObservationsPage as ObservationsPage,
    type ObservationListParams as ObservationListParams,
    type ObservationQueryParams as ObservationQueryParams,
  };
}
