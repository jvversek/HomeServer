# Használd a hivatalos Node.js image-t
FROM node:18

# Munkakönyvtár beállítása
WORKDIR /app

# Csomagok másolása és telepítése
COPY package*.json ./
RUN npm install

# Alkalmazás másolása
COPY . .

# Port beállítása
EXPOSE 8080

# Alkalmazás indítása
CMD ["npm", "run", "start"]
