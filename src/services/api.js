const API_BASE_URL = '/api';

export const apiService = {
  // Teachings
  getTeachings: async () => {
    const response = await fetch(`${API_BASE_URL}/teachings`);
    if (!response.ok) throw new Error('Failed to fetch teachings');
    return response.json();
  },

  // Media
  getMedia: async () => {
    const response = await fetch(`${API_BASE_URL}/media`);
    if (!response.ok) throw new Error('Failed to fetch media');
    return response.json();
  },

  // Inquiries (Forms)
  submitInquiry: async (inquiryData) => {
    const response = await fetch(`${API_BASE_URL}/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inquiryData)
    });
    if (!response.ok) throw new Error('Failed to submit inquiry');
    return response.json();
  },

  // Dashboard
  getDashboardStats: async () => {
    const response = await fetch(`${API_BASE_URL}/dashboard/stats`);
    if (!response.ok) throw new Error('Failed to fetch stats');
    return response.json();
  },

  getRecentInquiries: async () => {
    const response = await fetch(`${API_BASE_URL}/dashboard/inquiries`);
    if (!response.ok) throw new Error('Failed to fetch inquiries');
    return response.json();
  },

  updateInquiryStatus: async (id, status) => {
    const response = await fetch(`${API_BASE_URL}/dashboard/inquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    if (!response.ok) throw new Error('Failed to update inquiry');
    return response.json();
  }
};

export default apiService;
