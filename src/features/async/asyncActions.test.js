import * as constants from './asyncConstants';
import * as actions from './asyncActions';


it('creates an action to start async action', () => {
    const expectedAction = { type: constants.ASYNC_ACTION_START };
  
    expect(actions.asyncActionStart()).toEqual(expectedAction);
});

it('creates an action to stop async action', () => {
    const expectedAction = { type: constants.ASYNC_ACTION_FINISH };
  
    expect(actions.asyncActionFinish()).toEqual(expectedAction);
});

it('creates an action to start async error action', () => {
    const expectedAction = { type: constants.ASYNC_ACTION_ERROR };
  
    expect(actions.asyncActionError()).toEqual(expectedAction);
});