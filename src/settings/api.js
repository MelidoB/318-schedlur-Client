import axios from 'axios';

const API_URL = 'http://318-schedlur-server-5b504ge68-melido-bellos-projects.vercel.app/api/settings';

export const getUserInfo = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error fetching user data');
  }
};

export const updateUserInfo = async (data, token) => {
  try {
    const response = await axios.put(`${API_URL}/user`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error updating user data');
  }
};
