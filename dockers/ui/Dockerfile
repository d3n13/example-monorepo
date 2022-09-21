FROM nginx:1.20.0-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./example-ui /var/www/example-ui

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
