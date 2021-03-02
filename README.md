# XKCD  Image fetcher

A vue,js application to fetch the images from the [XKCD](https://xkcd.com/) by providing a JSON file. XKCD does not allow CORS requests thus project uses a proxy server, namely [XKCD](https://xkcd.now.sh/).

## Installation

Prerequisites:
* node.js
* the package manager of your own choice(npm, yarn)

Setup:
```
$ git clone https://github.com/hawkend/image-fetcher.git
$ cd image-fetcher
$ npm install
$ npm run dev
```

yarn version:
```
$ git clone https://github.com/hawkend/image-fetcher.git
$ cd image-fetcher
$ yarn
$ yarn run dev
```

## Available commands
| Command name | Execution                    | Description                                           |
|--------------|------------------------------|-------------------------------------------------------|
| dev          | [npm \| yarn] run dev        | Run the webpack's development server.                 |
| build-dev    | [npm \| yarn] run build-dev  | Create a build of the application in dev mode.        |
| build-prod   | [npm \| yarn] run build-prod | Create a build of the application in production mode. |

## License
[MIT LIcense](https://opensource.org/licenses/MIT)

Copyright (c) 2021, aurielmp
