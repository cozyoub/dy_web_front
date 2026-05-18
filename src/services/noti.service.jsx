import axiosInstance from '../common/axiosInstance';

const BASE_URL = '/api/noti';

const getAllNotiService = () => axiosInstance.get(BASE_URL);
const getNotiByIdService = (id) => axiosInstance.get(`${BASE_URL}/${id}`);

const saveNotiService = (noti, file) => {
  const formData = new FormData();
  formData.append('noti', new Blob([JSON.stringify(noti)], { type: 'application/json' }));
  if (file) formData.append('file', file);
  return axiosInstance.post(BASE_URL, formData);
};

const updateNotiService = (id, noti, file) => {
  const formData = new FormData();
  formData.append('noti', new Blob([JSON.stringify(noti)], { type: 'application/json' }));
  if (file) formData.append('file', file);
  return axiosInstance.put(`${BASE_URL}/${id}`, formData);
};

const deleteNotiService = (id) => axiosInstance.delete(`${BASE_URL}/${id}`);

export { getAllNotiService, getNotiByIdService, saveNotiService, updateNotiService, deleteNotiService };