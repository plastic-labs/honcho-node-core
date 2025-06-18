// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Honcho from '@honcho/core';
import { Response } from 'node-fetch';

const client = new Honcho({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource peers', () => {
  test('update', async () => {
    const responsePromise = client.workspaces.peers.update('workspace_id', 'peer_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.workspaces.peers.list('workspace_id');
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
      client.workspaces.peers.list('workspace_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workspaces.peers.list(
        'workspace_id',
        { page: 1, reverse: true, size: 1, filter: { foo: 'bar' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('chat: only required params', async () => {
    const responsePromise = client.workspaces.peers.chat('workspace_id', 'peer_id', { queries: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('chat: required and optional params', async () => {
    const response = await client.workspaces.peers.chat('workspace_id', 'peer_id', {
      queries: 'string',
      session_id: 'session_id',
      stream: true,
      target: 'target',
    });
  });

  test('getOrCreate: only required params', async () => {
    const responsePromise = client.workspaces.peers.getOrCreate('workspace_id', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getOrCreate: required and optional params', async () => {
    const response = await client.workspaces.peers.getOrCreate('workspace_id', {
      id: 'id',
      feature_flags: { foo: 'bar' },
      metadata: { foo: 'bar' },
    });
  });

  test('search: only required params', async () => {
    const responsePromise = client.workspaces.peers.search('workspace_id', 'peer_id', { body: 'body' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.workspaces.peers.search('workspace_id', 'peer_id', {
      body: 'body',
      page: 1,
      size: 1,
    });
  });

  test('workingRepresentation: only required params', async () => {
    const responsePromise = client.workspaces.peers.workingRepresentation('workspace_id', 'peer_id', {
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('workingRepresentation: required and optional params', async () => {
    const response = await client.workspaces.peers.workingRepresentation('workspace_id', 'peer_id', {
      session_id: 'session_id',
      target: 'target',
    });
  });
});
