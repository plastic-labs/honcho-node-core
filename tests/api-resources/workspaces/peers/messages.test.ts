// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Honcho from '@honcho-ai/core';
import { Response } from 'node-fetch';

const client = new Honcho({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  test('create: only required params', async () => {
    const responsePromise = client.workspaces.peers.messages.create('workspace_id', 'peer_id', {
      messages: [{ content: 'content', peer_id: 'peer_id' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.workspaces.peers.messages.create('workspace_id', 'peer_id', {
      messages: [{ content: 'content', peer_id: 'peer_id', metadata: { foo: 'bar' } }],
    });
  });

  test('list', async () => {
    const responsePromise = client.workspaces.peers.messages.list('workspace_id', 'peer_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workspaces.peers.messages.list('workspace_id', 'peer_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workspaces.peers.messages.list(
        'workspace_id',
        'peer_id',
        { page: 1, reverse: true, size: 1, filter: { foo: 'bar' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Honcho.NotFoundError);
  });
});
