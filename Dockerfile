# build environment
FROM node:9.6.1 as builder
ARG REACT_APP_TMS_API_URL
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
COPY . /usr/src/app
RUN npm run build REACT_APP_TMS_API_URL=$REACT_APP_TMS_API_URL 

# production environment
FROM nginx:1.13.9-alpine as deploy
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]