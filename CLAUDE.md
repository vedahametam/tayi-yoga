# Tayi Yoga Project Context

Frontend: React + Vite (TypeScript). Use Tailwind CSS for styling.

Backend: Hono framework running on Cloudflare Workers.

Deployment: Cloudflare Pages/Workers.

Rules:

- NEVER use Node.js specific APIs (like fs, path) in the runtime code.

- ALWAYS use standard Web APIs (fetch, Request, Response).

- For database, assume we will use Cloudflare D1 (if needed later).

- When creating new React components, place them in src/components.
