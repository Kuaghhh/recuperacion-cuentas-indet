FROM nginx:alpine

# Copia todo el frontend
COPY . /usr/share/nginx/html

# Nginx escucha en el puerto 80 dentro del contenedor
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]