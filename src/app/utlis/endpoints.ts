export const API_BASE_URL = 'https://api.example.com';
export const GET_ALL_EVENTS_URL = `${API_BASE_URL}/api/EventBooking/GetAllEvents`;
export const GET_EVENT_BY_ID_URL = (id: string) => `${API_BASE_URL}/api/EventBooking/GetEventById/${id}`;