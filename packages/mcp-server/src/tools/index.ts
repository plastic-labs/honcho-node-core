// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import update_workspaces from './workspaces/update-workspaces';
import list_workspaces from './workspaces/list-workspaces';
import deriver_status_workspaces from './workspaces/deriver-status-workspaces';
import get_or_create_workspaces from './workspaces/get-or-create-workspaces';
import search_workspaces from './workspaces/search-workspaces';
import update_workspaces_peers from './workspaces/peers/update-workspaces-peers';
import list_workspaces_peers from './workspaces/peers/list-workspaces-peers';
import card_workspaces_peers from './workspaces/peers/card-workspaces-peers';
import chat_workspaces_peers from './workspaces/peers/chat-workspaces-peers';
import get_or_create_workspaces_peers from './workspaces/peers/get-or-create-workspaces-peers';
import search_workspaces_peers from './workspaces/peers/search-workspaces-peers';
import working_representation_workspaces_peers from './workspaces/peers/working-representation-workspaces-peers';
import list_peers_workspaces_sessions from './workspaces/peers/sessions/list-peers-workspaces-sessions';
import update_workspaces_sessions from './workspaces/sessions/update-workspaces-sessions';
import list_workspaces_sessions from './workspaces/sessions/list-workspaces-sessions';
import delete_workspaces_sessions from './workspaces/sessions/delete-workspaces-sessions';
import clone_workspaces_sessions from './workspaces/sessions/clone-workspaces-sessions';
import get_context_workspaces_sessions from './workspaces/sessions/get-context-workspaces-sessions';
import get_or_create_workspaces_sessions from './workspaces/sessions/get-or-create-workspaces-sessions';
import search_workspaces_sessions from './workspaces/sessions/search-workspaces-sessions';
import summaries_workspaces_sessions from './workspaces/sessions/summaries-workspaces-sessions';
import create_sessions_workspaces_messages from './workspaces/sessions/messages/create-sessions-workspaces-messages';
import retrieve_sessions_workspaces_messages from './workspaces/sessions/messages/retrieve-sessions-workspaces-messages';
import update_sessions_workspaces_messages from './workspaces/sessions/messages/update-sessions-workspaces-messages';
import list_sessions_workspaces_messages from './workspaces/sessions/messages/list-sessions-workspaces-messages';
import upload_sessions_workspaces_messages from './workspaces/sessions/messages/upload-sessions-workspaces-messages';
import list_sessions_workspaces_peers from './workspaces/sessions/peers/list-sessions-workspaces-peers';
import add_sessions_workspaces_peers from './workspaces/sessions/peers/add-sessions-workspaces-peers';
import get_config_sessions_workspaces_peers from './workspaces/sessions/peers/get-config-sessions-workspaces-peers';
import remove_sessions_workspaces_peers from './workspaces/sessions/peers/remove-sessions-workspaces-peers';
import set_sessions_workspaces_peers from './workspaces/sessions/peers/set-sessions-workspaces-peers';
import set_config_sessions_workspaces_peers from './workspaces/sessions/peers/set-config-sessions-workspaces-peers';
import list_workspaces_webhooks from './workspaces/webhooks/list-workspaces-webhooks';
import delete_workspaces_webhooks from './workspaces/webhooks/delete-workspaces-webhooks';
import get_or_create_workspaces_webhooks from './workspaces/webhooks/get-or-create-workspaces-webhooks';
import test_emit_workspaces_webhooks from './workspaces/webhooks/test-emit-workspaces-webhooks';
import create_keys from './keys/create-keys';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(update_workspaces);
addEndpoint(list_workspaces);
addEndpoint(deriver_status_workspaces);
addEndpoint(get_or_create_workspaces);
addEndpoint(search_workspaces);
addEndpoint(update_workspaces_peers);
addEndpoint(list_workspaces_peers);
addEndpoint(card_workspaces_peers);
addEndpoint(chat_workspaces_peers);
addEndpoint(get_or_create_workspaces_peers);
addEndpoint(search_workspaces_peers);
addEndpoint(working_representation_workspaces_peers);
addEndpoint(list_peers_workspaces_sessions);
addEndpoint(update_workspaces_sessions);
addEndpoint(list_workspaces_sessions);
addEndpoint(delete_workspaces_sessions);
addEndpoint(clone_workspaces_sessions);
addEndpoint(get_context_workspaces_sessions);
addEndpoint(get_or_create_workspaces_sessions);
addEndpoint(search_workspaces_sessions);
addEndpoint(summaries_workspaces_sessions);
addEndpoint(create_sessions_workspaces_messages);
addEndpoint(retrieve_sessions_workspaces_messages);
addEndpoint(update_sessions_workspaces_messages);
addEndpoint(list_sessions_workspaces_messages);
addEndpoint(upload_sessions_workspaces_messages);
addEndpoint(list_sessions_workspaces_peers);
addEndpoint(add_sessions_workspaces_peers);
addEndpoint(get_config_sessions_workspaces_peers);
addEndpoint(remove_sessions_workspaces_peers);
addEndpoint(set_sessions_workspaces_peers);
addEndpoint(set_config_sessions_workspaces_peers);
addEndpoint(list_workspaces_webhooks);
addEndpoint(delete_workspaces_webhooks);
addEndpoint(get_or_create_workspaces_webhooks);
addEndpoint(test_emit_workspaces_webhooks);
addEndpoint(create_keys);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
