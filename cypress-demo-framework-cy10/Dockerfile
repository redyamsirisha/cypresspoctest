# Use an official Node.js runtime as the base image
FROM cypress/base:14.16.0

# Set a working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire project to the working directory
COPY . .

# Run Cypress
CMD ["npx", "cypress", "run", "--config-file", "cypress.config.ts"]