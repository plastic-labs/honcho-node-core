// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Honcho } from './index';

export abstract class APIResource {
  protected _client: Honcho;

  constructor(client: Honcho) {
    this._client = client;
  }
}
