# Event Listener

> Event Listener handles the adding and removing of events throughout your
> document. Works with old browsers that use attachEvent and detachEvent (IE 8
> and below).

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
