# rl-squad-stats-web

A website for tracking Rocket League player stats!

## Development

> Note: Requires an instance of [rl-squad-stats-server](https://github.com/switchswap/rl-squad-stats-server) to work.

### Setup

1. `yarn install` to setup project.
2. Create `.env` in the project root and add `VITE_API_BASE_URL=<your server url here>`.

### Available Scripts

In the project directory, you can run:

#### `yarn run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

#### `yarn run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

I deploy with [Netlify](https://www.netlify.com)!
