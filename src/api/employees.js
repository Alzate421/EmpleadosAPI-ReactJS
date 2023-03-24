const API_URL = 'https://63ffc24163e89b0913a27385.mockapi.io/api/v1';

export const getEmployees = async () => {
  const response = await fetch(`${API_URL}/employees`);
  const data = await response.json();
  return data;
};

export const getEmployee = async id => {
  const response = await fetch(`${API_URL}/employees/${id}`);
  const data = await response.json();
  return data;
};
