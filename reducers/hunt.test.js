import huntReducer from './hunt';
import * as actions from '../actions';
import mockHunts from '../mock-data/index.json';

describe('huntReducer', () => {

  it('should return default state', () => {
    const expected = [];
    const results = huntReducer(undefined, {});
    expect(results).toEqual(expected);
  });

  it('should add maps to state', () => {
    const expected = mockHunts;
    const action = actions.addHunts(mockHunts);
    const results = huntReducer(undefined, action);
    expect(results).toEqual(expected);
  });
});