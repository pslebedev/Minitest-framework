import email_verification from './apilayer.service.js';

const api = () => ({
  Email: () => ({ ...email_verification }),
});

export default api;