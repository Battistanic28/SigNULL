# Sig{NULL} Messenger

## What is it?
Sig{NULL} Messenger provides the scaffolding for a simple user management application with endpoints for sending messages between users.

### Technologies:
- Nest.ts
- React.ts
- Postgres
- TypeORM

### TODO:
- Build standalone Notification Sender Service.
- Clean up type definitions, add definition where type is "any"
- Add unit testing
- Add real JWT authentication

## API Documentation:
- GET: /users
- GET: /users/:id
- DELETE: /users/:id
- POST: /register
- GET: /users/:id/messages
- POST: /users/:id/messages

View the docs or experiement with the endpoints at the Postman workspace provided below.

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/11559675-8b6362b3-e691-450e-b78d-a1c1260f5c28?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D11559675-8b6362b3-e691-450e-b78d-a1c1260f5c28%26entityType%3Dcollection%26workspaceId%3Db9a50d8f-47b6-498a-8388-182fa78e1dbf)


## Run the App (Docker)
From directory root,

🟢 start container: 
```bash
docker rm messenger_db
docker-compose down -v && docker-compose up --build
```

View app at: http://localhost:5173 🚀

🔴 stop container: 
```bash
docker-compose down
```

## Backend (running locally)
Since this is a demo application, I will share a set of environment variables that can be used to interact with the database locally.

```
    POSTGRES_HOST=localhost
    POSTGRES_PORT=5433
    POSTGRES_DB=messenger_db
    POSTGRES_USER=root
    POSTGRES_PASSWORD=mypassword
    POSTGRES_SYNC=true
```
create a `.env` file in the root of the backend directory. Copy the values above into your new `.env` file and save changes.

From directory root,
1. Start database
```bash
source. env
cd backend
docker rm messenger_db
docker-compose down -v && docker-compose up --build
```
2. Start server
```bash
# In a seperate terminal
source. env
cd backend
npm install
npm run start:dev
```
Server runs on http://localhost:3000/

## Frontend (running locally)
From directory root,

```bash
cd frontend
npm install
npm run dev
```
App runs on http://localhost:5173/