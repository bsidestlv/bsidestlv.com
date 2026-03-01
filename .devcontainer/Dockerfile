ARG NODE_VARIANT=24@sha256:9b6ea344f7873aeea807726b1e8a59001389f83c3d47cf17f1d7218dca5eca35
FROM mcr.microsoft.com/devcontainers/javascript-node:${NODE_VARIANT}

# Install Bun globally (accessible to all users)
RUN curl -fsSL https://bun.sh/install | BUN_INSTALL=/usr/local bash

# Install Playwright browser system dependencies
RUN npx -y playwright install-deps chromium webkit

EXPOSE 4321
