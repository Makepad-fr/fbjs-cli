fbjs-cli
========

A CLI tool for fbjs

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/fbjs-cli.svg)](https://npmjs.org/package/fbjs-cli)
[![CircleCI](https://circleci.com/gh/[object Object]/tree/master.svg?style=shield)](https://circleci.com/gh/[object Object]/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/fbjs-cli.svg)](https://npmjs.org/package/fbjs-cli)
[![License](https://img.shields.io/npm/l/fbjs-cli.svg)](https://github.com/[object Object]/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g fbjs-cli
$ fb COMMAND
running command...
$ fb (-v|--version|version)
fbjs-cli/1.0.0 darwin-x64 node-v15.12.0
$ fb --help [COMMAND]
USAGE
  $ fb COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fb config`](#fb-config)
* [`fb groups:get`](#fb-groupsget)
* [`fb groups:get:posts`](#fb-groupsgetposts)
* [`fb help [COMMAND]`](#fb-help-command)

## `fb config`

describe the command here

```
USAGE
  $ fb config

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/config.ts](https://github.com/Makepad-fr/fbjs-cli/blob/v1.0.0/src/commands/config.ts)_

## `fb groups:get`

describe the command here

```
USAGE
  $ fb groups:get
```

_See code: [src/commands/groups/get.ts](https://github.com/Makepad-fr/fbjs-cli/blob/v1.0.0/src/commands/groups/get.ts)_

## `fb groups:get:posts`

describe the command here

```
USAGE
  $ fb groups:get:posts

OPTIONS
  -c, --concurrent=concurrent  [default: 1] Number of concurrent jobs
  -h, --help                   show CLI help
  -i, --ids=ids                (required) Comma separated Facebook group ids

  -o, --output=output          [default: /Users/kaanyagci/Documents/makepad/fbjs-cli] The output path to save output
                               posts

  --cookiePath=cookiePath      The JSON file path for cookies to use. This will skip the authentication process

  --debug                      Indicates the development environment

  --format=(json|csv|tsv)      [default: json] The format of parsed files

  --headfull                   Indicates the not headless mode

  --public                     Indicates the public visibility to skip authentication process
```

_See code: [src/commands/groups/get/posts.ts](https://github.com/Makepad-fr/fbjs-cli/blob/v1.0.0/src/commands/groups/get/posts.ts)_

## `fb help [COMMAND]`

display help for fb

```
USAGE
  $ fb help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
