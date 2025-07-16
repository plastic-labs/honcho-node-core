# Workspaces

Types:

- <code><a href="./src/resources/workspaces/workspaces.ts">DeriverStatus</a></code>
- <code><a href="./src/resources/workspaces/workspaces.ts">Workspace</a></code>

Methods:

- <code title="put /v2/workspaces/{workspace_id}">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">update</a>(workspaceId, { ...params }) -> Workspace</code>
- <code title="post /v2/workspaces/list">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">list</a>({ ...params }) -> WorkspacesPage</code>
- <code title="get /v2/workspaces/{workspace_id}/deriver/status">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">deriverStatus</a>(workspaceId, { ...params }) -> DeriverStatus</code>
- <code title="post /v2/workspaces">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">getOrCreate</a>({ ...params }) -> Workspace</code>
- <code title="post /v2/workspaces/{workspace_id}/search">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">search</a>(workspaceId, { ...params }) -> MessagesPage</code>

## Peers

Types:

- <code><a href="./src/resources/workspaces/peers/peers.ts">PageSession</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">Peer</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">SessionGet</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">PeerChatResponse</a></code>
- <code><a href="./src/resources/workspaces/peers/peers.ts">PeerWorkingRepresentationResponse</a></code>

Methods:

- <code title="put /v2/workspaces/{workspace_id}/peers/{peer_id}">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">update</a>(workspaceId, peerId, { ...params }) -> Peer</code>
- <code title="post /v2/workspaces/{workspace_id}/peers/list">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">list</a>(workspaceId, { ...params }) -> PeersPage</code>
- <code title="post /v2/workspaces/{workspace_id}/peers/{peer_id}/chat">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">chat</a>(workspaceId, peerId, { ...params }) -> PeerChatResponse</code>
- <code title="post /v2/workspaces/{workspace_id}/peers">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">getOrCreate</a>(workspaceId, { ...params }) -> Peer</code>
- <code title="post /v2/workspaces/{workspace_id}/peers/{peer_id}/search">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">search</a>(workspaceId, peerId, { ...params }) -> MessagesPage</code>
- <code title="post /v2/workspaces/{workspace_id}/peers/{peer_id}/representation">client.workspaces.peers.<a href="./src/resources/workspaces/peers/peers.ts">workingRepresentation</a>(workspaceId, peerId, { ...params }) -> PeerWorkingRepresentationResponse</code>

### Sessions

Methods:

- <code title="post /v2/workspaces/{workspace_id}/peers/{peer_id}/sessions">client.workspaces.peers.sessions.<a href="./src/resources/workspaces/peers/sessions.ts">list</a>(workspaceId, peerId, { ...params }) -> SessionsPage</code>

## Sessions

Types:

- <code><a href="./src/resources/workspaces/sessions/sessions.ts">Session</a></code>
- <code><a href="./src/resources/workspaces/sessions/sessions.ts">SessionDeleteResponse</a></code>
- <code><a href="./src/resources/workspaces/sessions/sessions.ts">SessionGetContextResponse</a></code>

Methods:

- <code title="put /v2/workspaces/{workspace_id}/sessions/{session_id}">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">update</a>(workspaceId, sessionId, { ...params }) -> Session</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/list">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">list</a>(workspaceId, { ...params }) -> SessionsPage</code>
- <code title="delete /v2/workspaces/{workspace_id}/sessions/{session_id}">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">delete</a>(workspaceId, sessionId) -> unknown</code>
- <code title="get /v2/workspaces/{workspace_id}/sessions/{session_id}/clone">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">clone</a>(workspaceId, sessionId, { ...params }) -> Session</code>
- <code title="get /v2/workspaces/{workspace_id}/sessions/{session_id}/context">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">getContext</a>(workspaceId, sessionId, { ...params }) -> SessionGetContextResponse</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">getOrCreate</a>(workspaceId, { ...params }) -> Session</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/search">client.workspaces.sessions.<a href="./src/resources/workspaces/sessions/sessions.ts">search</a>(workspaceId, sessionId, { ...params }) -> MessagesPage</code>

### Messages

Types:

- <code><a href="./src/resources/workspaces/sessions/messages.ts">Message</a></code>
- <code><a href="./src/resources/workspaces/sessions/messages.ts">MessageCreate</a></code>
- <code><a href="./src/resources/workspaces/sessions/messages.ts">MessageCreateResponse</a></code>
- <code><a href="./src/resources/workspaces/sessions/messages.ts">MessageUploadResponse</a></code>

Methods:

- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/messages/">client.workspaces.sessions.messages.<a href="./src/resources/workspaces/sessions/messages.ts">create</a>(workspaceId, sessionId, { ...params }) -> MessageCreateResponse</code>
- <code title="get /v2/workspaces/{workspace_id}/sessions/{session_id}/messages/{message_id}">client.workspaces.sessions.messages.<a href="./src/resources/workspaces/sessions/messages.ts">retrieve</a>(workspaceId, sessionId, messageId) -> Message</code>
- <code title="put /v2/workspaces/{workspace_id}/sessions/{session_id}/messages/{message_id}">client.workspaces.sessions.messages.<a href="./src/resources/workspaces/sessions/messages.ts">update</a>(workspaceId, sessionId, messageId, { ...params }) -> Message</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/messages/list">client.workspaces.sessions.messages.<a href="./src/resources/workspaces/sessions/messages.ts">list</a>(workspaceId, sessionId, { ...params }) -> MessagesPage</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/messages/upload">client.workspaces.sessions.messages.<a href="./src/resources/workspaces/sessions/messages.ts">upload</a>(workspaceId, sessionId, { ...params }) -> MessageUploadResponse</code>

### Peers

Types:

- <code><a href="./src/resources/workspaces/sessions/peers.ts">PeerGetConfigResponse</a></code>
- <code><a href="./src/resources/workspaces/sessions/peers.ts">PeerSetConfigResponse</a></code>

Methods:

- <code title="get /v2/workspaces/{workspace_id}/sessions/{session_id}/peers">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">list</a>(workspaceId, sessionId, { ...params }) -> PeersPage</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/peers">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">add</a>(workspaceId, sessionId, { ...params }) -> Session</code>
- <code title="get /v2/workspaces/{workspace_id}/sessions/{session_id}/peers/{peer_id}/config">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">getConfig</a>(workspaceId, sessionId, peerId) -> PeerGetConfigResponse</code>
- <code title="delete /v2/workspaces/{workspace_id}/sessions/{session_id}/peers">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">remove</a>(workspaceId, sessionId, [ ...body ]) -> Session</code>
- <code title="put /v2/workspaces/{workspace_id}/sessions/{session_id}/peers">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">set</a>(workspaceId, sessionId, { ...params }) -> Session</code>
- <code title="post /v2/workspaces/{workspace_id}/sessions/{session_id}/peers/{peer_id}/config">client.workspaces.sessions.peers.<a href="./src/resources/workspaces/sessions/peers.ts">setConfig</a>(workspaceId, sessionId, peerId, { ...params }) -> unknown</code>

# Keys

Types:

- <code><a href="./src/resources/keys.ts">KeyCreateResponse</a></code>

Methods:

- <code title="post /v2/keys">client.keys.<a href="./src/resources/keys.ts">create</a>({ ...params }) -> unknown</code>
