# Stage 1: Build the React application for production
# We use a Node.js image to have access to npm and build tools.
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY ./package.json ./
COPY ./package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the app for production
# This command is specified in your package.json scripts
RUN npm run build

# Stage 2: Serve the production build with NGINX
# We use a very lightweight NGINX image to serve the static files.
FROM nginx:stable-alpine

# Copy the built files from the 'builder' stage to NGINX's public directory
# The 'build' directory is where 'npm run build' outputs the static files
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# The default NGINX command runs, which serves the content
CMD ["nginx", "-g", "daemon off;"]