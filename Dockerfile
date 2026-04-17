# Usamos la imagen oficial de Nginx, la versión 'alpine' es muy pequeña
FROM nginx:alpine

# Copiamos todos los archivos de nuestra web al directorio donde Nginx los sirve
# El punto . copia todo el contenido de la carpeta actual al contenedor
COPY . /usr/share/nginx/html

# Le indicamos a Docker que el contenedor usará el puerto 80 (el puerto por defecto de Nginx)
EXPOSE 80

# Este comando inicia Nginx en primer plano (necesario para que el contenedor no se detenga)
CMD ["nginx", "-g", "daemon off;"]
#docker build -d web1