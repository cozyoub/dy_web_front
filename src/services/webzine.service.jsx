import axiosInstance from '../common/axiosInstance';

const BASE_URL = '/api/webzine';

const getAllWebzineService = () => axiosInstance.get(BASE_URL);
const getWebzineByIdService = (id) => axiosInstance.get(`${BASE_URL}/${id}`);

const saveWebzineService = (webzine, file) => {
  const formData = new FormData();
  formData.append('webzine', new Blob([JSON.stringify(webzine)], { type: 'application/json' }));
  if (file) formData.append('file', file);
  return axiosInstance.post(BASE_URL, formData);
};

const updateWebzineService = (id, webzine, file) => {
  const formData = new FormData();
  formData.append('webzine', new Blob([JSON.stringify(webzine)], { type: 'application/json' }));
  if (file) formData.append('file', file);
  return axiosInstance.put(`${BASE_URL}/${id}`, formData);
};

const deleteWebzineService = (id) => axiosInstance.delete(`${BASE_URL}/${id}`);

export {
  getAllWebzineService,
  getWebzineByIdService,
  saveWebzineService,
  updateWebzineService,
  deleteWebzineService,
};
