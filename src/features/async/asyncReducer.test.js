import asyncReducer from './asyncReducer';
import asyncReducer2 from './asyncReducer';
import * as constants from './asyncConstants';

describe('asyncReducer', () => {
  describe('when initializing', () => {
    
    it('sets a loading flag as a true', () => {
      expect(asyncReducer(undefined, { type: constants.ASYNC_ACTION_START }).loading)
        .toEqual(true);
    });
  
    describe('sets a loading flag as a true when another async operation started', () => {
      it('reads the balance from cookies', () => {
        expect(asyncReducer2(undefined, { type: constants.ASYNC_ACTION_START }).loading).toEqual(true);
      });
    });
  });

  describe('on error', () => {
      it('sets a loading flag as a false on error', () => {
        expect(asyncReducer(undefined, { type: constants.ASYNC_ACTION_ERROR }).loading)
          .toEqual(false);
      });
  })

  describe('on success', () => {
      it('sets a loading flag as a false on action finish', () => {
        expect(asyncReducer(undefined, { type: constants.ASYNC_ACTION_FINISH }).loading)
          .toEqual(false);
      });
  })

});