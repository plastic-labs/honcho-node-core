# Workspaces

Types:

- <code><a href="./src/resources/workspaces/workspaces.ts">DreamConfiguration</a></code>
- <code><a href="./src/resources/workspaces/workspaces.ts">MessageSearchOptions</a></code>
- <code><a href="./src/resources/workspaces/workspaces.ts">PeerCardConfiguration</a></code>
- <code><a href="./src/resources/workspaces/workspaces.ts">ReasoningConfiguration</a></code>
- <code><a href="./src/resources/workspaces/workspaces.ts">SummaryConfiguration</a></code>
- <code><a href="./src/resources/workspaces/workspaces.ts">Workspace</a></code>
- <code><a href="./src/resources/workspaces/workspaces.ts">WorkspaceConfiguration</a></code>
- <code><a href="./src/resources/workspaces/workspaces.ts">WorkspaceSearchResponse</a></code>

Methods:

- <code title="put /v2/workspaces/{workspace_id}">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">update</a>(workspaceId, { ...params }) -> Workspace</code>
- <code title="post /v2/workspaces/list">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">list</a>({ ...params }) -> WorkspacesPage</code>
- <code title="delete /v2/workspaces/{workspace_id}">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">delete</a>(workspaceId) -> void</code>
- <code title="post /v2/workspaces">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">getOrCreate</a>({ ...params }) -> Workspace</code>
- <code title="post /v2/workspaces/{workspace_id}/schedule_dream">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">scheduleDream</a>(workspaceId, { ...params }) -> void</code>
- <code title="post /v2/workspaces/{workspace_id}/search">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">search</a>(workspaceId, { ...params }) -> WorkspaceSearchResponse</code>

## Peers

Types:

- <code><a href="./src/resources/workspaces/peers/peers.ts">PagePeer</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">PageSession</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">Peer</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">PeerCardResponse</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">SessionGet</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">PeerChatResponse</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">PeerGetContextResponse</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">PeerGetRepresentationResponse</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">PeerSearchResponse</a></code>

Methods:

- <code title="put /v2/workspaces/{workspace_id}/peers/{peer_id}">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">update</a>(workspaceId, peerId, { ...params }) -> Peer</code>
- <code title="post /v2/workspaces/{workspace_id}/peers/list">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">list</a>(workspaceId, { ...params }) -> PeersPage</code>
- <code title="get /v2/workspaces/{workspace_id}/peers/{peer_id}/card">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">card</a>(workspaceId, peerId, { ...params }) -> PeerCardResponse</code>
- <code title="post /v2/workspaces/{workspace_id}/peers/{peer_id}/chat">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">chat</a>(workspaceId, peerId, { ...params }) -> PeerChatResponse</code>
- <code title="get /v2/workspaces/{workspace_id}/peers/{peer_id}/context">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">getContext</a>(workspaceId, peerId, { ...params }) -> PeerGetContextResponse</code>
- <code title="post /v2/workspaces/{workspace_id}/peers">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">getOrCreate</a>(workspaceId, { ...params }) -> Peer</code>
- <code title="post /v2/workspaces/{workspace_id}/peers/{peer_id}/representation">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">getRepresentation</a>(workspaceId, peerId, { ...params }) -> PeerGetRepresentationResponse</code>
- <code title="post /v2/workspaces/{workspace_id}/peers/{peer_id}/search">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">search</a>(workspaceId, peerId, { ...params }) -> PeerSearchResponse</code>
- <code title="put /v2/workspaces/{workspace_id}/peers/{peer_id}/card">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">setCard</a>(workspaceId, peerId, { ...params }) -> PeerCardResponse</code>

### Sessions

Methods:

- <code title="post /v2/workspaces/{workspace_id}/peers/{peer_id}/sessions">client.workspaces.peers.sessions.<a href="./src/resources/workspaces/peers/sessions.ts">list</a>(workspaceId, peerId, { ...params }) -> SessionsPage</code>

## Sessions

Types:

- <code><a href="./src/resources/workspaces/sessions/sessions.ts">Session</a></code>
- <code><a href="./src/resources/workspaces/sessions/sessions.ts">SessionConfiguration</a></code>
- <code><a href="./src/resources/workspaces/sessions/sessions.ts">Summary</a></code>
- <code><a href="./src/resources/workspaces/sessions/sessions.ts">SessionDeleteResponse</a></code>
- <code><a href="./src/resources/workspaces/sessions/sessions.ts">SessionGetContextResponse</a></code>
- <code><a href="./src/resources/workspaces/sessions/sessions.ts">SessionSearchResponse</a></code>
- <code><a href="./src/resources/workspaces/sessions/sessions.ts">SessionSummariesResponse</a></code>

Methods:

- <code title="put /v2/workspaces/{workspace_id}/sessions/{session_id}">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">update</a>(workspaceId, sessionId, { ...params }) -> Session</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/list">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">list</a>(workspaceId, { ...params }) -> SessionsPage</code>
- <code title="delete /v2/workspaces/{workspace_id}/sessions/{session_id}">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">delete</a>(workspaceId, sessionId) -> unknown</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/clone">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">clone</a>(workspaceId, sessionId, { ...params }) -> Session</code>
- <code title="get /v2/workspaces/{workspace_id}/sessions/{session_id}/context">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">getContext</a>(workspaceId, sessionId, { ...params }) -> SessionGetContextResponse</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">getOrCreate</a>(workspaceId, { ...params }) -> Session</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/search">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">search</a>(workspaceId, sessionId, { ...params }) -> SessionSearchResponse</code>
- <code title="get /v2/workspaces/{workspace_id}/sessions/{session_id}/summaries">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">summaries</a>(workspaceId, sessionId) -> SessionSummariesResponse</code>

### Messages

Types:

- <code><a href="./src/resources/workspaces/sessions/messages.ts">Message</a></code>
- <code><a href="./src/resources/workspaces/sessions/messages.ts">MessageCreate</a></code>
- <code><a href="./src/resources/workspaces/sessions/messages.ts">MessageCreateResponse</a></code>
- <code><a href="./src/resources/workspaces/sessions/messages.ts">MessageUploadResponse</a></code>

Methods:

- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/messages">client.workspaces.sessions.messages.<a href="./src/resources/workspaces/sessions/messages.ts">create</a>(workspaceId, sessionId, { ...params }) -> MessageCreateResponse</code>
- <code title="get /v2/workspaces/{workspace_id}/sessions/{session_id}/messages/{message_id}">client.workspaces.sessions.messages.<a href="./src/resources/workspaces/sessions/messages.ts">retrieve</a>(workspaceId, sessionId, messageId) -> Message</code>
- <code title="put /v2/workspaces/{workspace_id}/sessions/{session_id}/messages/{message_id}">client.workspaces.sessions.messages.<a href="./src/resources/workspaces/sessions/messages.ts">update</a>(workspaceId, sessionId, messageId, { ...params }) -> Message</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/messages/list">client.workspaces.sessions.messages.<a href="./src/resources/workspaces/sessions/messages.ts">list</a>(workspaceId, sessionId, { ...params }) -> MessagesPage</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/messages/upload">client.workspaces.sessions.messages.<a href="./src/resources/workspaces/sessions/messages.ts">upload</a>(workspaceId, sessionId, { ...params }) -> MessageUploadResponse</code>

### Peers

Types:

- <code><a href="./src/resources/workspaces/sessions/peers.ts">SessionPeerConfig</a></code>

Methods:

- <code title="get /v2/workspaces/{workspace_id}/sessions/{session_id}/peers">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">list</a>(workspaceId, sessionId, { ...params }) -> PeersPage</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/peers">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">add</a>(workspaceId, sessionId, { ...params }) -> Session</code>
- <code title="get /v2/workspaces/{workspace_id}/sessions/{session_id}/peers/{peer_id}/config">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">getConfig</a>(workspaceId, sessionId, peerId) -> SessionPeerConfig</code>
- <code title="delete /v2/workspaces/{workspace_id}/sessions/{session_id}/peers">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">remove</a>(workspaceId, sessionId, [ ...body ]) -> Session</code>
- <code title="put /v2/workspaces/{workspace_id}/sessions/{session_id}/peers">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">set</a>(workspaceId, sessionId, { ...params }) -> Session</code>
- <code title="put /v2/workspaces/{workspace_id}/sessions/{session_id}/peers/{peer_id}/config">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">setConfig</a>(workspaceId, sessionId, peerId, { ...params }) -> void</code>

## Webhooks

Types:

- <code><a href="./src/resources/workspaces/webhooks.ts">WebhookEndpoint</a></code>
- <code><a href="./src/resources/workspaces/webhooks.ts">WebhookTestEmitResponse</a></code>

Methods:

- <code title="get /v2/workspaces/{workspace_id}/webhooks">client.workspaces.webhooks.<a href="./src/resources/workspaces/webhooks.ts">list</a>(workspaceId, { ...params }) -> WebhookEndpointsPage</code>
- <code title="delete /v2/workspaces/{workspace_id}/webhooks/{endpoint_id}">client.workspaces.webhooks.<a href="./src/resources/workspaces/webhooks.ts">delete</a>(workspaceId, endpointId) -> void</code>
- <code title="post /v2/workspaces/{workspace_id}/webhooks">client.workspaces.webhooks.<a href="./src/resources/workspaces/webhooks.ts">getOrCreate</a>(workspaceId, { ...params }) -> WebhookEndpoint</code>
- <code title="get /v2/workspaces/{workspace_id}/webhooks/test">client.workspaces.webhooks.<a href="./src/resources/workspaces/webhooks.ts">testEmit</a>(workspaceId) -> unknown</code>

## Queue

Types:

- <code><a href="./src/resources/workspaces/queue.ts">QueueGetStatusResponse</a></code>

Methods:

- <code title="get /v2/workspaces/{workspace_id}/queue/status">client.workspaces.queue.<a href="./src/resources/workspaces/queue.ts">getStatus</a>(workspaceId, { ...params }) -> QueueGetStatusResponse</code>

## Conclusions

Types:

- <code><a href="./src/resources/workspaces/conclusions.ts">Conclusion</a></code>
- <code><a href="./src/resources/workspaces/conclusions.ts">ConclusionCreateResponse</a></code>
- <code><a href="./src/resources/workspaces/conclusions.ts">ConclusionQueryResponse</a></code>

Methods:

- <code title="post /v2/workspaces/{workspace_id}/conclusions">client.workspaces.conclusions.<a href="./src/resources/workspaces/conclusions.ts">create</a>(workspaceId, { ...params }) -> ConclusionCreateResponse</code>
- <code title="post /v2/workspaces/{workspace_id}/conclusions/list">client.workspaces.conclusions.<a href="./src/resources/workspaces/conclusions.ts">list</a>(workspaceId, { ...params }) -> ConclusionsPage</code>
- <code title="delete /v2/workspaces/{workspace_id}/conclusions/{conclusion_id}">client.workspaces.conclusions.<a href="./src/resources/workspaces/conclusions.ts">delete</a>(workspaceId, conclusionId) -> void</code>
- <code title="post /v2/workspaces/{workspace_id}/conclusions/query">client.workspaces.conclusions.<a href="./src/resources/workspaces/conclusions.ts">query</a>(workspaceId, { ...params }) -> ConclusionQueryResponse</code>

# Keys

Types:

- <code><a href="./src/resources/keys.ts">KeyCreateResponse</a></code>

Methods:

- <code title="post /v2/keys">client.keys.<a href="./src/resources/keys.ts">create</a>({ ...params }) -> unknown</code>
