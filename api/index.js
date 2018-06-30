export const getAllHunts = async () => {
  const url = 'https://www.scavengerhunt.com/app/ios_ajax_json_hunt_locations.php/ios_ajax_hunt_locations.php?password=asf4fvadfv31das';

  try {
    const response = await fetch(url);
    const hunts = await response.json();
    return hunts;
  } catch (error) {
    throw error;
  }
}