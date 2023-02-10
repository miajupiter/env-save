<p align="center">
<a href="https://miajupiter.com" _target="blank">
<img src="https://github.com/miajupiter/.github/raw/main/images/miajupiter-logo.png"  width="320" />
</a>

[![](https://img.shields.io/badge/%F0%9F%8C%90%20www-miajupiter.com-blueviolet?style=flat&labelColor=%23323232)](https://miajupiter.com)


# env-save 
[![npm](https://img.shields.io/npm/v/env-save?label=npm&logo=npm) ](https://www.npmjs.com/package/env-save) [![download](https://img.shields.io/npm/dt/env-save?label=downloads&logo=npm)](https://www.npmjs.com/package/env-save) [![GitHub](https://img.shields.io/github/license/miajupiter/sms-save)](https://choosealicense.com/licenses/mit/) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmiajupiter%2Fenv-save&count_bg=%236495ED&title_bg=%23323232&icon=cliqz.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com) [![](https://img.shields.io/badge/readme-docs-chocolate.svg)](https://github.com/miajupiter/env-save#readme) [![](https://img.shields.io/github/stars/miajupiter/env-save?color=yellow&label=stars&logo=github)](https://github.com/miajupiter/env-save/stargazers)


## Table of contents

- [Introduction](#introduction)
- [CLI  Installation](#cli--installation)
  - [Install](#install)
  - [Usage](#usage)
- [Package Installation](#package-installation)
  - [Installation](#installation)
  - [Usage](#usage)
- [Protecting ENV comments and structure](#protecting-env-comments-and-structure)
- [License - MIT License](#license---mit-license)

## Introduction

Save a variable into `.env` file with protect your other comments and variables


## CLI  Installation

### Install
```bash
npm install env-save -g
```

### Usage

```bash
$ env-save -h
```

```bash
  Usage:
    env-save [options] --VARIABLENAME=value [--VARIABLENAME2=value2 ...]

  Options:

    --VARIABLENAME=value        Set .env variable
    -e, --env                   Source file. default is ".env"
    -v, --version               Show the version number
    -h, --help                  Show usage information

  Examples:
    env-save --NODE_ENV=production
    env-save --PORT=3000 --USER=root --PASSWD=root --ENV=production

    # We can also use these parameters "ENV", "VERSION" and "HELP"
    # but not lowercase

    env-save --VERSION=1.0.1 --ENV=production

  Multiline Example:  new line char: \n
    env-save --PRIVATEKEY="---BEGIN RSA---\n...\nKh9NV\n-----END RSA---"
```


## Package Installation

### Installation
```bash
npm install env-save
```

### Usage

```javascript
const envSave = require('env-save')
envSave('MONGODB_URI','mongodb://localhost:27017/')
envSave('TOKEN','fdffd545fdggferdertrt')
envSave('DEBUG',true)
envSave('PORT',3000)

```

## Protecting ENV comments and structure

**Before .env file**

```dosini
MY_NAME=shamanCoders
USER_ID=319817318  # for all mankind

TEST=4445
...
```

```bash
env-save --USER_ID=40015
```

**After `env-save`**

```dosini
MY_NAME=shamanCoders
USER_ID=40015 # for all mankind

TEST=4445
...
```


## License - MIT License

Copyright (c) 2023-**Now** [MiaJupiter Technology Inc.](https://miajupiter.com). All rights reserved. We are proud to be [Open Source](https://opensource.org). For full details about the license, please check the `LICENSE` file in the root directory of the source repository.
