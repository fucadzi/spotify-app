This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Spotify Track search app

## Setting up project

First, install packages

```
npm install
```

Create local `.env.local` file that contains Spotify client ID and secret, add it to project root folder

```
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
```

To run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run tests:

```
npm run test
```

## About this project

This is simple search app for Spotify tracks.

- Searching for tracks by keywords
- Track names contain links to Spotify track
- Saving tracks in favourites in global store
- Favourites list available in separate page `/favourites`
- Possibility to remove track from favourites
