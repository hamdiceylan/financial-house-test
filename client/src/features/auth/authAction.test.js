import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { LOGIN_USER } from './authConstants';
import { login } from './authActions';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ token: {} });
const mockResponse = { body: { token: 'sample access_token comes here' }};

fetchMock.post('/api/v3/merchant/user/login', mockResponse);
const mockCreds = { email :'test@mail.com', password: 'testPassword'};
const mockHistory = {
  push: jest.fn()
}

it('creates an async action to fetch login endpoint', () => {
  const expectedActions = { payload: mockResponse, type: LOGIN_USER };

  return store.dispatch(login(mockCreds,mockHistory)).then(() => {
    expect(store.getActions()[1]).toEqual(expectedActions);
    expect(mockHistory.push).toHaveBeenCalled();
  });
});