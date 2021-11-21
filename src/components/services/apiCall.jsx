import fakeData from '../fakeApi/fake-data.json';

export async function getItems() {
  try {
    const data = fakeData;
    await delay(2000)
    return data
  } catch (error) {
    throw new Error(`something happen ${error}`);
  }
}
// Delay Function
const delay= ms => new Promise(resolve => setTimeout(resolve, ms));
