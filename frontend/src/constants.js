export const API_BASE_URL =
  process.env.NODE_ENV === 'test'
    ? 'http://mock-api-url.com'
    : 'http://localhost:3000/api/v1';
