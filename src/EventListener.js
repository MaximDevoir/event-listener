/**
 * EventListener - A solution to add and remove events from a
 *  target while being compatible with modern browsers, and their use of the
 *  .[add|remove]EventListener() methods, as well as older browsers, and their
 *  .[attach|detach]Event() methods.
 * @name EventListener
 */
export default class EventListener {
  /**
   * Add an event to target.
   * @param {*}        target     Target to add event to
   * @param {String}   event      Name of event type to listen for
   * @param {Function} listener   Listener to execute when event is fired from target
   * @param {Boolean}  useCapture useCapture
   */
  static add(target, event, listener, useCapture = false) {
    if (target.addEventListener) {
      target.addEventListener(event, listener, useCapture);
    } else if (target.attachEvent) {
      target.attachEvent(`on${event}`, listener);
    }
  }

  /**
   * Remove an event from a target.
   * @param {*}        target     Target to remove event from
   * @param {String}   event      Name of event type to remove from target
   * @param {Function} listener   Listener to remove frmo event target
   * @param {Boolean}  useCapture useCapture
   */
  static remove(target, event, listener, useCapture = false) {
    if (target.removeEventListener) {
      target.removeEventListener(event, listener, useCapture);
    } else if (target.detachEvent) {
      target.detachEvent(`on${event}`, listener);
    }
  }
}
