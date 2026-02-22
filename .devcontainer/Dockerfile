ARG NODE_VARIANT=24
FROM mcr.microsoft.com/devcontainers/javascript-node:${NODE_VARIANT}

# Install Bun globally (accessible to all users)
RUN curl -fsSL https://bun.sh/install | BUN_INSTALL=/usr/local bash

# Install Playwright browser system dependencies
RUN npx -y playwright install-deps chromium webkit

EXPOSE 4321
