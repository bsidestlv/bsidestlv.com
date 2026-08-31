ARG NODE_VARIANT=26@sha256:5e292d58f9996e2e625f119d69ea774a57b1e47cc853bf7b5f1986e1834bda4c
FROM mcr.microsoft.com/devcontainers/javascript-node:${NODE_VARIANT}

# Install Bun globally (accessible to all users)
RUN curl -fsSL https://bun.sh/install | BUN_INSTALL=/usr/local bash

# Install Playwright browser system dependencies
RUN npx -y playwright install-deps chromium webkit

EXPOSE 4321
