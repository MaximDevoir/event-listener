# EventListener
> EventListener handles the adding and removing of events throughout your document. Works with old browsers that use attachEvent and detachEvent (IE 8 and below).

## Installation
```
npm install bitbucket:maximdevoir/eventlistener
```

## Usage
```
import eventlistener from 'eventlistener';

eventlistener.add(window, 'focus', function() { ... });
eventlistener.remove(window, 'focus', function() { ... });
```
