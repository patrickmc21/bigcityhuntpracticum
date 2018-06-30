import mockHunts from '../../mock-data/index.json';

export const getAllHunts = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockHunts);
});