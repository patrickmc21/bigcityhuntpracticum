import mockHunts from '../mock-data/index.json';
import { getAllHunts } from './index';

describe('getAllHunts', () => {

  let url;
  let successfulResponse;
  let errorResponse;

  beforeEach(() => {
    url = 'https://www.scavengerhunt.com/app/ios_ajax_json_hunt_locations.php/ios_ajax_hunt_locations.php?password=asf4fvadfv31das';
    successfulResponse = {
      status: 200,
      json: () => {
        return Promise.resolve(mockHunts);
      }
    };

    errorResponse = {
      status: 404,
      message: 'No hunts found'
    };

    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(successfulResponse);
    });
  });

  it('should call fetch with correct params', () => {
    const expected = url;
    getAllHunts();
    expect(global.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return an array of hunt objects', async () => {
    const expected = mockHunts;
    const results = await getAllHunts();
    expect(results).toEqual(expected);
  });

  it('should throw error on failed fetch', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(errorResponse);
    });
    const expected = errorResponse;
    const results = getAllHunts();
    expect(results).rejects.toEqual(expected);
  });
});
