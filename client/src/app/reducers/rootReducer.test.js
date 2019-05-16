import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('initializes the default state', () => {
    expect(rootReducer({}, {}).form).not.toBe(null);
    expect(rootReducer({}, {}).auth).not.toBe(null);
    expect(rootReducer({}, {}).async).not.toBe(null);
    expect(rootReducer({}, {}).dashboard).not.toBe(null);
  });
});