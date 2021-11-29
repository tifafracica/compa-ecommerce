import fakeData from '../fakeApi/fake-data.json';

// Delay Function
const delay= ms => new Promise(resolve => setTimeout(resolve, ms));

export async function getItems(id) {
  let data;
  try {
    if (id === undefined) return data = fakeData;
    const newId = parseInt(id);
    data = fakeData.filter((el) => el.categoryId === newId);
    await delay(2000);
    return data;
  } catch (error) {
    throw new Error(`something happen ${error}`);
  }
}

export async function getItem(id) {
  try {
    const newId = parseInt(id)
    const data = fakeData;
    const item = data.filter((el) => el.id === newId)[0];
    await delay(2000)
    return item
  } catch (error) {
    throw new Error(`something happen ${error}`);
  }
}
