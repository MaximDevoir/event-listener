/* eslint import/no-extraneous-dependencies: 0, no-native-reassign: 0 */
import chai from 'chai';
import expect from 'expect.js';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import EventListener from './../src/EventListener';

chai.should();
chai.use(sinonChai);

describe('Event Listener', () => {
  const trueop = () => true;
  const event = 'eventname';
  const modernElement = {
    addEventListener: sinon.spy(),
    removeEventListener: sinon.spy(),
  };
  const fallbackElement = {
    attachEvent: sinon.spy(),
    detachEvent: sinon.spy(),
  };
  const modernASpy = modernElement.addEventListener;
  const modernRSpy = modernElement.removeEventListener;
  const fallbackASpy = fallbackElement.attachEvent;
  const fallbackRSpy = fallbackElement.detachEvent;
  const useCapture = false;

  it('should be a object', () => {
    (typeof EventListener).should.eql('function');
  });

  describe('.add()', () => {
    it('should have .add() method', () => {
      expect(EventListener).to.have.property('add');
    });

    it('should use addEventListener when available', () => {
      EventListener.add(modernElement, event, trueop, useCapture);
      expect(modernASpy.calledOnce).to.be(true);
      expect(modernASpy.calledWithExactly(event, trueop, useCapture)).to.be(true);
    });

    it('should fallback to .attachEvent() ', () => {
      EventListener.add(fallbackElement, event, trueop);
      expect(fallbackASpy.calledOnce).to.be(true);
      expect(fallbackASpy.calledWithExactly(`on${event}`, trueop)).to.be(true);
    });
  });

  describe('.remove()', () => {
    it('should have .remove() method', () => {
      expect(EventListener).to.have.property('remove');
    });

    it('should use removeEventListener when available', () => {
      EventListener.remove(modernElement, event, trueop, useCapture);
      expect(modernRSpy.calledOnce).to.be(true);
      expect(modernRSpy.calledWithExactly(event, trueop, useCapture)).to.be(true);
    });

    it('should fallback to .detachEvent() ', () => {
      EventListener.remove(fallbackElement, event, trueop);
      expect(fallbackRSpy.calledOnce).to.be(true);
      expect(fallbackRSpy.calledWithExactly(`on${event}`, trueop)).to.be(true);
    });
  });
});
