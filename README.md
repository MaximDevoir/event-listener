# Event Listener

> Event Listener handles the adding and removing of events throughout your
> document. Works with old browsers that use attachEvent and detachEvent (IE 8
> and below).

[![license](https://badgen.net/badge/license/MIT/blue)](https://www.npmjs.com/package/@maximdevoir/event-listener)
[![bundlephobia
minzip](https://badgen.net/bundlephobia/minzip/@maximdevoir/event-listener)](https://bundlephobia.com/result?p=@maximdevoir/event-listener)
[![npm dependents](https://badgen.net/npm/dependents/@maximdevoir/event-listener)](https://www.npmjs.com/package/@maximdevoir/event-listener?activeTab=dependents)
[![downloads](https://badgen.net/npm/dt/@maximdevoir/event-listener)](https://www.npmjs.com/package/@maximdevoir/event-listener)
[![Coverage Status](https://coveralls.io/repos/github/MaximDevoir/event-listener/badge.svg?branch=master)](https://coveralls.io/github/MaximDevoir/event-listener?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/MaximDevoir/event-listener/badge.svg?targetFile=package.json)](https://snyk.io/test/github/MaximDevoir/event-listener?targetFile=package.json)

## Installation

```javascript
yarn add @maximdevoir/event-listener
```

## Usage

```javascript
import eventListener from '@maximdevoir/event-listener'

eventListener.add(window, 'focus', function() { ... })

eventListener.remove(window, 'focus', function() { ... })
```

## Contributing

### Cutting a Release

Push a tag that begins with `v` (e.g: `v0.1.3`). The release workflow will begin
and publish to NPM.

## License

[MIT](LICENSE)
