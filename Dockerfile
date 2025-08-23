# Dockerfile
FROM node:18-alpine
WORKDIR /app

# Install deps (reproducible); don't delete package-lock
COPY package*.json ./
RUN npm ci --no-audit --no-fund || npm install --legacy-peer-deps --no-audit --no-fund

# Copy sources & build (prod)
COPY . .
RUN npx ng build --configuration production

# Static server
RUN npm i -g serve
# Adjust DIST_DIR if your output doesn’t have /browser
ENV DIST_DIR=dist/edumig-angular/browser

EXPOSE 80
CMD ["sh","-c","serve -s \"$DIST_DIR\" -l 80"]
