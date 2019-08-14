# Stage 1 - the build process
FROM node:12.8.0-alpine as build-deps

ARG BACKGROUND_URL
ARG LOGO_URL
ARG CEST_DATE
ENV REACT_APP_BACKGROUND_URL=$BACKGROUND_URL
ENV REACT_APP_LOGO_URL=$LOGO_URL
ENV REACT_APP_CEST_DATE=$CEST_DATE

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]