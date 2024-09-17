# Probonio Fullstack Challenge

## Backend

Backend was created with nest.js (express), prisma ORM, postgresql and docker.

### Get started

Starting postgres docker image

`docker compose up db -d`

Starting nest.js backend

`npm run start`

For db migration have a look at
`npx prisma`

## Frontend

Frontend was created with vite.js, mui, react(tanstack)-query

### Get started

Starting dev env

`npm run dev`

## Improvements

- Move prisma into nest.js service for more performant db connections
- Improved error handling for fetching inital data set
- Logging
- Env / Staging for backend and frontend
- Writing Tests for backend and frontend
- Frontend add more generic http handling for errors
- Create monorepo for type sharing frontend/backend
