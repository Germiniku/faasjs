# FaasJS

[![License: MIT](https://img.shields.io/npm/l/faasjs.svg)](https://github.com/faasjs/faasjs/blob/main/packages/faasjs/LICENSE)
[![NPM Beta Version](https://img.shields.io/npm/v/faasjs/beta.svg)](https://www.npmjs.com/package/faasjs)
[![Last commit](https://badgen.net/github/last-commit/faasjs/faasjs)](https://github.com/faasjs/faasjs)
[![Unit Status](https://github.com/faasjs/faasjs/actions/workflows/unit.yml/badge.svg)](https://github.com/faasjs/faasjs/actions/workflows/unit.yml)
[![Lint Status](https://github.com/faasjs/faasjs/actions/workflows/lint.yml/badge.svg)](https://github.com/faasjs/faasjs/actions/workflows/lint.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/ed918d6b0ecc951f7924/maintainability)](https://codeclimate.com/github/faasjs/faasjs/maintainability)
[![Coverage Status](https://img.shields.io/codecov/c/github/faasjs/faasjs.svg)](https://codecov.io/gh/faasjs/faasjs)
[![Lines](https://badgen.net/lgtm/lines/g/faasjs/faasjs)](https://github.com/faasjs/faasjs)
[![Commits](https://badgen.net/github/commits/faasjs/faasjs)](https://github.com/faasjs/faasjs)

[![faasjs/nginx](https://img.shields.io/badge/Docker-faasjs%2Fnginx-blue)](https://hub.docker.com/repository/docker/faasjs/nginx)
[![Build faasjs/nginx](https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml/badge.svg)](https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml)
[![faasjs/node](https://img.shields.io/badge/Docker-faasjs%2Fnode-blue)](https://hub.docker.com/repository/docker/faasjs/node)
[![Build faasjs/node](https://github.com/faasjs/faasjs/actions/workflows/build-node-image.yml/badge.svg)](https://github.com/faasjs/faasjs/actions/workflows/build-node-image.yml)
[![faasjs/vscode](https://img.shields.io/badge/Docker-faasjs%2Fvscode-blue)](https://hub.docker.com/repository/docker/faasjs/vscode)
[![Build faasjs/vscode](https://github.com/faasjs/faasjs/actions/workflows/build-vscode-image.yml/badge.svg)](https://github.com/faasjs/faasjs/actions/workflows/build-vscode-image.yml)

An Atomic Application Framework based on Typescript.

基于 Typescript 的原子化应用框架。

## Features

### High development efficiency

The atomized development model can reduce development and iteration to a featherweight level and is more friendly to team development.

FaasJS officially provides plugins such as HTTP, Knex, etc., so that developers can start developing business immediately.

### High maintainability

The FaaS architecture guarantees the independence between cloud functions and prevents a single error from causing the failure of the entire system.

FaasJS has built-in automated testing tools to facilitate developers to automate the testing of cloud functions.

### High scalability

FaasJS has a simple and easy-to-use plug-in mechanism that allows developers to extend functions and plugins freely.

## Get Started

```bash
npx create-faas-app --name faasjs --example --noprovider
```

### Cloud function's file

```ts
// index.func.ts
// all cloud function file should be ended with .func.ts
import { useFunc } from '@faasjs/func'
import { useHttp } from '@faasjs/http'

export default useFunc(function() {
  useHttp() // use http plugin

  return async function () {
    return 'Hello, world' // response content
  }
})
```

## Unit test's file

```ts
// __tests__/index.test.ts
// all unit test file should be ended with .test.ts
import { FuncWarper } from '@faasjs/test'
import Func from '../index.func'

describe('index', function () {
  test('should work', async function () {
    // wrap the cloud function
    const func = new FuncWarper(Func);

    // mock the request
    const { statusCode, data } = await func.JSONhandler()

    // expect the response with 200 status
    expect(statusCode).toEqual(200)
    // expect the response content is 'Hello, world'
    expect(data).toEqual('Hello, world')
  });
});
```

[Official website](https://faasjs.com)

[CHANGELOG](https://github.com/faasjs/faasjs/blob/main/CHANGELOG.md)

[CONTRIBUTING](https://github.com/faasjs/faasjs/blob/main/CONTRIBUTING.md)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ffaasjs%2Ffaasjs.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Ffaasjs%2Ffaasjs)
