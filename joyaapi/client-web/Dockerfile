FROM node:14.18 as builder
WORKDIR '/app'
RUN npm i -g npm@8.5.1
COPY ./package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx:1.19
LABEL author="Client Web"
COPY ./proxy/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
ENV NODE_ENV=production

EXPOSE 3000