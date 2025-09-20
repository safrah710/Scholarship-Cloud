# Step 1: Build the frontend
FROM node:18-alpine AS build

WORKDIR /app

# Copy only package.json and package-lock.json first (better cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the app
RUN npm run build


# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy built files
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config if using React Router
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
