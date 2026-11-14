# Multi-stage Dockerfile for Next.js 14 (Node server, next start)
# Runtime: Node 20 LTS Alpine
# Start: next start -H 0.0.0.0 -p 3005

# ---- Build Stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies (package-lock.json → npm ci)
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy source (excluding node_modules, .next, etc via .dockerignore)
COPY . .

# Build Next.js app
RUN npm run build

# ---- Run Stage ----
FROM node:20-alpine AS run
WORKDIR /app

# Install production dependencies only
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund

# Copy built assets from build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/lib ./lib

# Set production environment
ENV NODE_ENV=production

# Expose port 3005
EXPOSE 3005

# Start Next.js server on port 3005
CMD ["npm", "start", "--", "-H", "0.0.0.0", "-p", "3005"]