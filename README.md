# babel-plugin-shaking-import

![Build Status](https://img.shields.io/travis/huang-xiao-jian/babel-plugin-shaking-import/master.svg?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/huang-xiao-jian/babel-plugin-shaking-import/badge.svg?branch=master)](https://coveralls.io/github/huang-xiao-jian/babel-plugin-shaking-import?branch=master)
![Package Dependency](https://david-dm.org/huang-xiao-jian/babel-plugin-shaking-import.svg?style=flat)
![Package DevDependency](https://david-dm.org/huang-xiao-jian/babel-plugin-shaking-import/dev-status.svg?style=flat)

Modular import plugin for babel, compatible with antd, antd-mobile, lodash, and so on.

## Usage

```shell
# npm
npm install babel-plugin-shaking-import --save-dev
# yarn
yarn add babel-plugin-shaking-import --dev
```

Add babel plugin:

```json
{
  "plugin": [
    [
      "shaking-import",
      {
        "libraryName": "antd",
        "libraryDirectory": "lib",
        "libraryStrategy": "camel2dash",
        "libraryStyle": true
      }
    ]
  ]
}
```

options can be an object of `ShakingImportOptions`~~, or an array of `ShakingImportOptions`~~:

```javascript
/**
 * @typedef {object} ShakingImportOptions
 *
 * @property {string} libraryName - reuqired
 * @property {string} libraryDirectory - optional, defualt lib
 * @property {string} libraryStrategy - optional, default preserve, enum strategy preserve, camel2dash, camel2underline
 * @property {string|boolean} libraryStyle - optional, default false
 * @property {boolean} libraryNameImport - whether import namespace specifier
 */
```

## Example

```json
[
  {
    "libraryName": "antd",
    "libraryStrategy": "camel2dash",
    "libraryStyle": true
  },
  {
    "libraryName": "lodash",
    "libraryDirectory": "."
  },
  {
    "libraryName": "rxjs",
    "libraryDirectory": ".",
    "libraryNameImport": true
  },
  {
    "libraryName": "react-toolbox",
    "libraryStrategy": "camel2underline"
  }
]
```

## Showcase

`rxjs shaking`:

```javascript
import { Observable, Subject } from 'rxjs';

// Normal import
import 'rxjs/observable/interval';
import 'rxjs/observable/zip';

const trigger$ = Reflect.construct(Subject, []);
const timer$ = Observable.interval(1000);

Observable.zip(trigger$, timer$).subscribe((value) => {
  console.log(value);
});
```

```javascript
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Normal import
import 'rxjs/observable/interval';
import 'rxjs/observable/zip';

const trigger$ = Reflect.construct(Subject, []);
const timer$ = Observable.interval(1000);

Observable.zip(trigger$, timer$).subscribe((value) => {
  console.log(value);
});
```

`antd shaking`:

```javascript
import { Button, DatePicker, message } from 'antd';

message.info('babel-plugin-shaking-import');

ReactDOM.render(
  <div>
    <DatePicker />
    <Button>babel-plugin-shaking-import</Button>
  </div>
);
```

```javascript
import 'antd/lib/button/style/css';
import Button from 'antd/lib/button';
import 'antd/lib/date-picker/style/css';
import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/message/style/css';
import message from 'antd/lib/message';

message.info('babel-plugin-shaking-import');

ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(DatePicker, null),
    React.createElement(Button, null, 'babel-plugin-shaking-import')
  )
);
```

## License

MIT
