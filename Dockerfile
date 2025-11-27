# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose Docusaurus port
EXPOSE 3000

# Start dev server binding to 0.0.0.0
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
