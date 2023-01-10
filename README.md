# RelativeCI agent GitHub action setup example for Vite

[![RelativeCI](https://badges.relative-ci.com/badges/1l4Xqi6L7hJIDV2cU2eP?branch=master)](https://app.relative-ci.com/projects/1l4Xqi6L7hJIDV2cU2eP)

## Install

### `@relative-ci/agent`

```shell
npm install --dev @relative-ci/agent
```

or 

```shell
yarn add --dev @relative-ci/agent
```

### `rollup-plugin-webpack-stats`

```shell
npm install --dev rollup-plugin-webpack-stats
```

or 

```shell
yarn add --dev rollup-plugin-webpack-stats
```

## Configure

### `rollup-plugin-webpack-stats`

Output Vite stats JSON with a webpack stats structure supported by `@relative-ci/agent`

```js
// vite.config.js
import { defineConfig } from 'vite';
import { webpackStats } from 'rollup-plugin-webpack-stats';

export default defineConfig((env) => ({
  plugins: [
    // Output webpack-stats.json file
    webpackStats(),
  ],
}));
```

## Configuree @relative-ci/agent GitHub action

```yaml
# .github/workflow/build.yml
name: Build
on: push
jobs:
  build:
    steps:
    - name: Build application & bundle stats 
      run: npm run build

    - name: Send bundle stats and build information to RelativeCI
      uses: relative-ci/agent-action@v2
      with:
        key: ${{ secrets.RELATIVE_CI_KEY }}
        webpackStatsFile: ./webpack-stats.json
```

[Read more](https://relative-ci.com/documentation/setup/agent/github-action)
