FROM nginx:1.20.0-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./example-ui /var/www/example-ui

COPY ./ssl/localhost.crt /etc/ssl/certs/localhost.crt
COPY ./ssl/localhost.key /etc/ssl/private/localhost.key

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
