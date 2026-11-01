ARG NODE_VARIANT=26@sha256:045e66010973363cc211c8d86133580eb6106713314797066efe60cba970b9a8
FROM mcr.microsoft.com/devcontainers/javascript-node:${NODE_VARIANT}

# Install Bun globally (accessible to all users)
RUN curl -fsSL https://bun.sh/install | BUN_INSTALL=/usr/local bash

# Install Playwright browser system dependencies
RUN npx -y playwright install-deps chromium webkit

EXPOSE 4321
