FROM nginx:stable-alpine

LABEL maintainer="Your Name <you@example.com>"
LABEL description="Static portfolio site served with nginx"

RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- --timeout=2 http://localhost/ || exit 1

