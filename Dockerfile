# Stage 1 - the build process
FROM node:12.8.0-alpine as build-deps

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.17.2-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/mydefault.conf
EXPOSE 80
CMD /bin/bash -c "envsubst < /etc/nginx/mydefault.conf > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"