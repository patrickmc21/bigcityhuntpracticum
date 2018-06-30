import { getAllHunts } from '../api';

const addHunts = (hunts) => ({
  type: 'ADD_HUNTS',
  hunts
});

const getHunts = (hunts) => {
  return async (dispatch) => {
    const hunts = await getAllHunts();
    dispatch(addHunts(hunts));
  }
};