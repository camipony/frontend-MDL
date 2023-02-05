# Usamos una imagen Node.js como base
FROM node:14

# Establecemos la carpeta de trabajo
WORKDIR /app

# Copiamos los archivos de la aplicación a la carpeta de trabajo
COPY . .

# Instalamos las dependencias
RUN npm install

# Exponemos el puerto 3000 para que la aplicación pueda recibir solicitudes
EXPOSE 3000

# Ejecutamos la aplicación
CMD ["npm", "start"]
