# Webpack 5 Module Federation with React/Typescript/Yarn

This project consist of three pieces, a host app `container` and two remotes `app1` `app2`.

Forked from [ogzhanolguncu/micro-frontends-with-module-federation](https://github.com/ogzhanolguncu/react-typescript-module-federation)

## Workspaces

- `app1` expose CounterAppOne component.
- `app2` expose CounterAppTwo header component.
- `container` import CounterAppOne and CounterAppTwo component.

## Running Demo

```bash
nvm use
yarn
yarn start
```

This will start all your projects in parallel and open your browser.

- http://localhost:3000/ (container)
- http://localhost:3001/ (app1)
- http://localhost:3002/ (app2)

## Article

See: [Introduction to Micro Frontends with Module Federation, React and Typescript](https://ogzhanolguncu.com/blog/micro-frontends-with-module-federation)
