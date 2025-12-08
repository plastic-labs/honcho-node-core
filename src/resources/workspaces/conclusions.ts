// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Page, type PageParams } from '../../pagination';

export class Conclusions extends APIResource {
  /**
   * Create one or more conclusions.
   *
   * Conclusions are theory-of-mind facts derived from interactions between peers.
   */
  create(
    workspaceId: string,
    body: ConclusionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConclusionCreateResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/conclusions`, { body, ...options });
  }

  /**
   * List conclusions using custom filters, ordered by recency unless `reverse` is
   * true.
   */
  list(
    workspaceId: string,
    params?: ConclusionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConclusionsPage, Conclusion>;
  list(workspaceId: string, options?: Core.RequestOptions): Core.PagePromise<ConclusionsPage, Conclusion>;
  list(
    workspaceId: string,
    params: ConclusionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConclusionsPage, Conclusion> {
    if (isRequestOptions(params)) {
      return this.list(workspaceId, {}, params);
    }
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(`/v2/workspaces/${workspaceId}/conclusions/list`, ConclusionsPage, {
      query: { page, reverse, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Delete a specific conclusion (document).
   */
  delete(workspaceId: string, conclusionId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/v2/workspaces/${workspaceId}/conclusions/${conclusionId}`, options);
  }

  /**
   * Query conclusions using semantic search.
   */
  query(
    workspaceId: string,
    body: ConclusionQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConclusionQueryResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/conclusions/query`, { body, ...options });
  }
}

export class ConclusionsPage extends Page<Conclusion> {}

/**
 * Conclusion response - external view of a document.
 */
export interface Conclusion {
  id: string;

  content: string;

  created_at: string;

  /**
   * The peer the conclusion is about
   */
  observed_id: string;

  /**
   * The peer who made the conclusion
   */
  observer_id: string;

  session_id: string;
}

/**
 * Schema for creating a single conclusion.
 */
export interface ConclusionCreate {
  content: string;

  /**
   * The peer the conclusion is about
   */
  observed_id: string;

  /**
   * The peer making the conclusion
   */
  observer_id: string;

  /**
   * The session this conclusion relates to
   */
  session_id: string;
}

/**
 * Schema for listing conclusions with optional filters.
 */
export interface ConclusionGet {
  filters?: { [key: string]: unknown } | null;
}

/**
 * Query parameters for semantic search of conclusions.
 */
export interface ConclusionQuery {
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

export interface PageConclusion {
  items: Array<Conclusion>;

  page: number;

  size: number;

  pages?: number;

  total?: number;
}

export type ConclusionCreateResponse = Array<Conclusion>;

export type ConclusionDeleteResponse = unknown;

export type ConclusionQueryResponse = Array<Conclusion>;

export interface ConclusionCreateParams {
  conclusions: Array<ConclusionCreate>;
}

export interface ConclusionListParams extends PageParams {
  /**
   * Query param: Whether to reverse the order of results
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filters?: { [key: string]: unknown } | null;
}

export interface ConclusionQueryParams {
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

Conclusions.ConclusionsPage = ConclusionsPage;

export declare namespace Conclusions {
  export {
    type Conclusion as Conclusion,
    type ConclusionCreate as ConclusionCreate,
    type ConclusionGet as ConclusionGet,
    type ConclusionQuery as ConclusionQuery,
    type PageConclusion as PageConclusion,
    type ConclusionCreateResponse as ConclusionCreateResponse,
    type ConclusionDeleteResponse as ConclusionDeleteResponse,
    type ConclusionQueryResponse as ConclusionQueryResponse,
    ConclusionsPage as ConclusionsPage,
    type ConclusionCreateParams as ConclusionCreateParams,
    type ConclusionListParams as ConclusionListParams,
    type ConclusionQueryParams as ConclusionQueryParams,
  };
}
