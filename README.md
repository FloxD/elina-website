# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
# npm
npm run dev

# yarn
yarn dev -o
```

## Production

Build the application for production:

```bash
# npm
npm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# yarn
yarn preview
```

## Deployment

```bash
# local
docker build -f Dockerfile -t elina:latest .
docker tag elina:latest myregistry.com/elina:latest
docker push myregistry.com/elina:latest

# on server
docker pull myregistry.com/elina:latest
docker run -d --restart always -p 30160:3000 myregistry.com/elina:latest
```
