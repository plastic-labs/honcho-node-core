// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Honcho from '@honcho-ai/core';
import { Response } from 'node-fetch';

const client = new Honcho({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource peers', () => {
  test('list', async () => {
    const responsePromise = client.workspaces.sessions.peers.list('workspace_id', 'session_id');
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
      client.workspaces.sessions.peers.list('workspace_id', 'session_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workspaces.sessions.peers.list(
        'workspace_id',
        'session_id',
        { page: 1, size: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('add: only required params', async () => {
    const responsePromise = client.workspaces.sessions.peers.add('workspace_id', 'session_id', { foo: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: required and optional params', async () => {
    const response = await client.workspaces.sessions.peers.add('workspace_id', 'session_id', {
      foo: { observe_me: true, observe_others: true },
    });
  });

  test('config', async () => {
    const responsePromise = client.workspaces.sessions.peers.config('workspace_id', 'session_id', 'peer_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('config: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workspaces.sessions.peers.config('workspace_id', 'session_id', 'peer_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('remove: only required params', async () => {
    const responsePromise = client.workspaces.sessions.peers.remove('workspace_id', 'session_id', ['string']);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('remove: required and optional params', async () => {
    const response = await client.workspaces.sessions.peers.remove('workspace_id', 'session_id', ['string']);
  });

  test('set: only required params', async () => {
    const responsePromise = client.workspaces.sessions.peers.set('workspace_id', 'session_id', { foo: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('set: required and optional params', async () => {
    const response = await client.workspaces.sessions.peers.set('workspace_id', 'session_id', {
      foo: { observe_me: true, observe_others: true },
    });
  });

  test('setConfig', async () => {
    const responsePromise = client.workspaces.sessions.peers.setConfig(
      'workspace_id',
      'session_id',
      'peer_id',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
