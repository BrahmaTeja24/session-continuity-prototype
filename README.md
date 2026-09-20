# Session Continuity — Interactive MVP Prototype

This is a **concept prototype** for the iQOO Hackathon Productivity-track submission.

It demonstrates:
- a mobile task in progress
- controlled session interruption
- context capture/status
- AI-generated task/progress/next-action summary
- user-confirmed session recovery
- resumed workflow

## Important scope

This prototype demonstrates the **user experience**, not universal Android OS-level recovery or access to arbitrary apps.

The hackathon MVP can later use a supported/demo Android application and controlled lifecycle interruption to demonstrate the technical implementation.

## Run locally

Requirements:
- Node.js 18+ recommended

```bash
npm install
npm run dev
```

Open the localhost URL shown by Vite.

## Build

```bash
npm run build
```

The production files will be in `dist/`.

## Deploy

The project can be deployed to Vercel, Netlify, Cloudflare Pages, or another static hosting service.

For a hackathon submission, deploy the production build and put the public URL in the optional Prototype URL field.

## Demo flow

1. OPEN SESSION
2. CONTINUE
3. SIMULATE INTERRUPTION
4. RETURN TO APP
5. RESUME SESSION
6. TASK COMPLETE

The important moment is the recovery screen: the system explains the task, progress, and next action before asking the user to resume.
