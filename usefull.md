1- Init Nodes
npm init
npm install typescript
npx -p typescript tsc --init

2- Install jest
npm install --save-dev jest
npm i -D babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest

// babel.config.js
module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript',
    ],
};

2- Décorateur
npm install --save-dev @babel/plugin-proposal-decorators



//Run test
npm run test
