import * as actions from './';
import mockHunts from '../mock-data/index.json';
import  { getAllHunts } from '../api';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('../api');

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

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

  describe('getHunts', () => {

    const store = mockStore({});

    it('should call addHunts action', async () => {
      const expected = [{
        type: 'ADD_HUNTS',
        hunts: mockHunts
      }];

      store.clearActions();
      await store.dispatch(actions.getHunts());
      const firedActions = store.getActions();

      expect(firedActions).toEqual(expected);
    });

    it('should call getAllHunts api call', () => { 
      store.dispatch(actions.getHunts());     
      expect(getAllHunts).toHaveBeenCalled();
    });
  });
});