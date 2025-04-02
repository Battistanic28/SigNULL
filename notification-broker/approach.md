# Notification Broker Service (TODO)

### Requirements:
- Standalone application that can receive a data from the API service and will mock sending an email notification

### Assumptions:
Server:
- Build notification server in isolation from front end and backend (`/notification-broker`).
- Server should rely on Webhooks to provide notifications in real-time.
- Server should allow users to subscribe and listen for new connections.
- Server should emit notifications to the correct user.

API:
- Backend needs to emit a Websocket event when new message is created (`POST: /users/:id/messages`)

Client:
- User should subscibe to Websocket upon login.
- Client listens to the socket connection.
- Frontend calls API endpoint which triggers email.
- Fontend handles visual representation of notification (red circle beside username on dashboard).

### Tech:
- `socket.io` (server side)
- `socket.io-client` (client side)
- `nodemailer` Node module to help with email sending (backend)