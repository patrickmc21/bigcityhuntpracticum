import { getAllHunts } from '../api';

export const addHunts = (hunts) => ({
  type: 'ADD_HUNTS',
  hunts
});

export const getHunts = () => {
  return async (dispatch) => {
    try {
      const hunts = await getAllHunts();
      dispatch(addHunts(hunts));
    } catch (error) {
      throw error;
    }
  }
};