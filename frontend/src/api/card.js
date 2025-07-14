import api from './client';

export async function createCardAPI(body) {
  try {
    const response = await api.post('/cards', { card: body });
    return response.data;
  } catch (error) {
    // add a sticky note to display the error
    return null;
  }
}

export async function getCardsAPI() {
  try {
    const response = await api.get('/cards');
    return response.data;
  } catch (error) {
    // add a sticky note to display the error
    return null;
  }
}
