# pkg-field

CLI tool for adding fields to your package.json

[![Build Status](https://travis-ci.com/doniyor2109/pkg-field.svg?branch=master)](https://travis-ci.com/doniyor2109/pkg-field)
[![](https://img.shields.io/badge/size-303%20B-44cc11.svg)](https://github.com/doniyor2109/pkg-field/blob/master/index.js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

## Installation

Installing globally

```bash
npm install -g pkg-field

or

yarn global add pkg-field
```

You can also run with `npx`

```bash
npx pkg-field
```

## Usage

```bash
npx pkg-field scripts.test jest
```

Adds `test` script to your `package.json`

```
{
  ...
  "scripts": {
    ...
    "test": "jest"
  },
  ...
}
```

## License

MIT
