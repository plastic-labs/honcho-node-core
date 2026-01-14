// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Page, type PageParams } from '../../pagination';

export class Conclusions extends APIResource {
  /**
   * Create one or more Conclusions.
   *
   * Conclusions are logical certainties derived from interactions between Peers.
   * They form the basis of a Peer's Representation.
   */
  create(
    workspaceId: string,
    body: ConclusionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConclusionCreateResponse> {
    return this._client.post(`/v2/workspaces/${workspaceId}/conclusions`, { body, ...options });
  }

  /**
   * List Conclusions using optional filters, ordered by recency unless `reverse` is
   * true. Results are paginated.
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
   * Delete a single Conclusion by ID.
   *
   * This action cannot be undone.
   */
  delete(workspaceId: string, conclusionId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v2/workspaces/${workspaceId}/conclusions/${conclusionId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Query Conclusions using semantic search. Use `top_k` to control the number of
   * results returned.
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

export type ConclusionCreateResponse = Array<Conclusion>;

export type ConclusionQueryResponse = Array<Conclusion>;

export interface ConclusionCreateParams {
  conclusions: Array<ConclusionCreateParams.Conclusion>;
}

export namespace ConclusionCreateParams {
  /**
   * Schema for creating a single conclusion.
   */
  export interface Conclusion {
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
}

export interface ConclusionListParams extends PageParams {
  /**
   * Query param: Whether to reverse the order of results
   */
  reverse?: boolean | null;

  /**
   * Body param
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
    type ConclusionCreateResponse as ConclusionCreateResponse,
    type ConclusionQueryResponse as ConclusionQueryResponse,
    ConclusionsPage as ConclusionsPage,
    type ConclusionCreateParams as ConclusionCreateParams,
    type ConclusionListParams as ConclusionListParams,
    type ConclusionQueryParams as ConclusionQueryParams,
  };
}
