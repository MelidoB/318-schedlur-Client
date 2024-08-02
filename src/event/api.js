// utils/api.js

const API_URL = 'https://318-schedlur-server.vercel.app/api'; // Use full URL

const getToken = () => localStorage.getItem('token'); // Helper function to get the token

const fetchData = async (url, options = {}) => {
  try {
    const token = getToken();
    console.log('Fetched Token:', token); // Debug log

    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

export const fetchEvents = async () => {
  try {
    return await fetchData(`${API_URL}/events`);
  } catch (error) {
    return [];
  }
};

export const createEvent = async (event) => {
  try {
    return await fetchData(`${API_URL}/events/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
  } catch (error) {
    return null;
  }
};

export const updateEvent = async (id, event) => {
  try {
    return await fetchData(`${API_URL}/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
  } catch (error) {
    return null;
  }
};

export const deleteEvent = async (id) => {
  try {
    await fetchData(`${API_URL}/events/${id}`, {
      method: 'DELETE',
    });
    return { message: 'Event deleted successfully' };
  } catch (error) {
    return null;
  }
};
