import { getAllHunts } from '../api';

export const addHunts = (hunts) => ({
  type: 'ADD_HUNTS',
  hunts
});

export const getHunts = (hunts) => {
  return async (dispatch) => {
    const hunts = await getAllHunts();
    dispatch(addHunts(hunts));
  }
};