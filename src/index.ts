// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type PageParams, PageResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { KeyCreateParams, KeyCreateResponse, Keys } from './resources/keys';
import {
  Workspace,
  WorkspaceGetOrCreateParams,
  WorkspaceListParams,
  WorkspaceSearchParams,
  WorkspaceUpdateParams,
  Workspaces,
  WorkspacesPage,
} from './resources/workspaces/workspaces';

const environments = {
  demo: 'https://demo.honcho.dev',
  local: 'http://localhost:8000',
  production: 'https://api.honcho.dev',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['HONCHO_API_KEY'].
   */
  apiKey?: string | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `demo` corresponds to `https://demo.honcho.dev`
   * - `local` corresponds to `http://localhost:8000`
   * - `production` corresponds to `https://api.honcho.dev`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['HONCHO_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Honcho API.
 */
export class Honcho extends Core.APIClient {
  apiKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Honcho API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['HONCHO_API_KEY'] ?? null]
   * @param {Environment} [opts.environment=demo] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['HONCHO_BASE_URL'] ?? https://demo.honcho.dev] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('HONCHO_BASE_URL'),
    apiKey = Core.readEnv('HONCHO_API_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'demo',
    };

    if (baseURL && opts.environment) {
      throw new Errors.HonchoError(
        'Ambiguous URL; The `baseURL` option (or HONCHO_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'demo'],
      baseURLOverridden: baseURL ? baseURL !== environments[options.environment || 'demo'] : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  workspaces: API.Workspaces = new API.Workspaces(this);
  keys: API.Keys = new API.Keys(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'demo'];
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.apiKey == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  static Honcho = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static HonchoError = Errors.HonchoError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Honcho.Workspaces = Workspaces;
Honcho.WorkspacesPage = WorkspacesPage;
Honcho.Keys = Keys;
export declare namespace Honcho {
  export type RequestOptions = Core.RequestOptions;

  export import Page = Pagination.Page;
  export { type PageParams as PageParams, type PageResponse as PageResponse };

  export {
    Workspaces as Workspaces,
    type Workspace as Workspace,
    WorkspacesPage as WorkspacesPage,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
    type WorkspaceListParams as WorkspaceListParams,
    type WorkspaceGetOrCreateParams as WorkspaceGetOrCreateParams,
    type WorkspaceSearchParams as WorkspaceSearchParams,
  };

  export {
    Keys as Keys,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyCreateParams as KeyCreateParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  HonchoError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Honcho;
