# Production aşaması
FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile && bun add -d typescript

COPY . .

RUN bun run build

# Production aşaması
FROM oven/bun:latest AS production

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --production --frozen-lockfile && bun add -d typescript

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD ["bun", "run", "start", "-H", "0.0.0.0"]