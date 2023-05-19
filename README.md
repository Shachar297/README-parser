# README-parser starter.

```json
// > package.json
"scripts": {
    "build": "rimraf dist && npx tsc",
    "prestart": "npm run build",
    "start": "node dist/app.js",
    "preserve": "npm run build",
    "serve": "concurrently \"npx tsc -w\" \"nodemon dist/app.js\""
  }

```

use ```npm run serve``` to execute the application at dev mode. (nodemon watch mode).

test :

1. ``` npm run serve``` -> start app
2. open browser at https://localhost/openapi.yaml
3. change route to, https://localhost/.well-known/ai-plugin.json