import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import EventListener from '../src/EventListener'

chai.should()
chai.use(sinonChai)

const { expect } = chai

describe('Event Listener', () => {
  const trueop = () => true
  const event = 'eventname'
  const webElement = {
    addEventListener: sinon.spy(),
    removeEventListener: sinon.spy()
  }
  const fallbackElement = {
    attachEvent: sinon.spy(),
    detachEvent: sinon.spy()
  }
  const webAddSpy = webElement.addEventListener
  const webRemoveSpy = webElement.removeEventListener
  const fallbackAddSpy = fallbackElement.attachEvent
  const fallbackRemoveSpy = fallbackElement.detachEvent
  const useCapture = false

  expect(trueop.call()).to.equal(true)

  it('should be a object', () => {
    (typeof EventListener).should.eql('function')
  })

  describe('.add()', () => {
    it('should have .add() method', () => {
      expect(EventListener).to.have.property('add')
    })

    it('should use addEventListener when available', () => {
      EventListener.add(webElement, event, trueop, useCapture)
      expect(webAddSpy.calledOnce).to.equal(true)
      expect(webAddSpy.calledWithExactly(event, trueop, useCapture)).to.equal(true)
    })

    it('should fallback to .attachEvent() ', () => {
      EventListener.add(fallbackElement, event, trueop)
      expect(fallbackAddSpy.calledOnce).to.equal(true)
      expect(fallbackAddSpy.calledWithExactly(`on${event}`, trueop)).to.equal(true)
    })
  })

  describe('.remove()', () => {
    it('should have .remove() method', () => {
      expect(EventListener).to.have.property('remove')
    })

    it('should use removeEventListener when available', () => {
      EventListener.remove(webElement, event, trueop, useCapture)
      expect(webRemoveSpy.calledOnce).to.equal(true)
      expect(webRemoveSpy.calledWithExactly(event, trueop, useCapture)).to.equal(true)
    })

    it('should fallback to .detachEvent() ', () => {
      EventListener.remove(fallbackElement, event, trueop)
      expect(fallbackRemoveSpy.calledOnce).to.equal(true)
      expect(fallbackRemoveSpy.calledWithExactly(`on${event}`, trueop)).to.equal(true)
    })
  })
})
