// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Honcho from '@honcho/core';
import { Response } from 'node-fetch';

const client = new Honcho({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('update: only required params', async () => {
    const responsePromise = client.workspaces.sessions.update('workspace_id', 'session_id', {
      metadata: { foo: 'bar' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.workspaces.sessions.update('workspace_id', 'session_id', {
      metadata: { foo: 'bar' },
      peer_id: 'peer_id',
      feature_flags: { foo: 'bar' },
    });
  });

  test('list', async () => {
    const responsePromise = client.workspaces.sessions.list('workspace_id');
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
      client.workspaces.sessions.list('workspace_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workspaces.sessions.list(
        'workspace_id',
        { page: 1, reverse: true, size: 1, filter: { foo: 'bar' }, is_active: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.workspaces.sessions.delete('workspace_id', 'session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workspaces.sessions.delete('workspace_id', 'session_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('clone', async () => {
    const responsePromise = client.workspaces.sessions.clone('workspace_id', 'session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('clone: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workspaces.sessions.clone('workspace_id', 'session_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('clone: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workspaces.sessions.clone(
        'workspace_id',
        'session_id',
        { message_id: 'message_id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('getContext', async () => {
    const responsePromise = client.workspaces.sessions.getContext('workspace_id', 'session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getContext: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workspaces.sessions.getContext('workspace_id', 'session_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('getContext: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workspaces.sessions.getContext(
        'workspace_id',
        'session_id',
        { summary: true, tokens: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Honcho.NotFoundError);
  });

  test('getOrCreate: only required params', async () => {
    const responsePromise = client.workspaces.sessions.getOrCreate('workspace_id', { id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getOrCreate: required and optional params', async () => {
    const response = await client.workspaces.sessions.getOrCreate('workspace_id', {
      id: 'x',
      feature_flags: { foo: 'bar' },
      metadata: { foo: 'bar' },
      peer_names: { foo: { observe_me: true, observe_others: true } },
    });
  });

  test('search: only required params', async () => {
    const responsePromise = client.workspaces.sessions.search('workspace_id', 'session_id', { body: 'body' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.workspaces.sessions.search('workspace_id', 'session_id', {
      body: 'body',
      page: 1,
      size: 1,
    });
  });
});
