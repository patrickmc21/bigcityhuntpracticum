import * as actions from './';
import mockHunts from '../mock-data/index.json';

describe('actions', () => {

  describe('addHunts', () => {
    it('should return a type of ADD_HUNTS', () => {
      const expected = {
        type: 'ADD_HUNTS',
        hunts: mockHunts
      };
      const results = actions.addHunts(mockHunts);
      expect(results).toEqual(expected);
    });
  });
  
});