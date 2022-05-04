ARG NODE_VARIANT=18

# [Choice] Node.js version: 14, 12, 10
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${NODE_VARIANT}

ARG HUGO_VARIANT=hugo_extended
ARG HUGO_VERSION=0.81.0

ENV HUGO_ID=${HUGO_VARIANT}_${HUGO_VERSION}
RUN case $(uname -m) in \
    aarch64) \
    ARCH=ARM64 \
    ;; \
    amd64) \
    ARCH=64bit \
    ;; \
    *) \
    printf "%s is not a recognized architecture" >&2 \
    exit 1 \
    ;; \
    esac && \
    mkdir /tmp/hugo && \
    wget -O - https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_ID}_Linux-${ARCH}.tar.gz | tar -xz -C /tmp/hugo && \
    mkdir -p /usr/local/sbin && \
    mv /tmp/hugo/hugo /usr/local/sbin/hugo && \
    rm -rf /tmp/hugo

EXPOSE 1313

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends hugo

# [Optional] Uncomment if you want to install more global node modules
RUN su node -c "npm install -g npm-check-updates"
