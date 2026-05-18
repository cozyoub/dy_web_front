import axiosInstance from '../common/axiosInstance';

const BASE_URL = '/api/popup';

const getAllPopupService = () => axiosInstance.get(`${BASE_URL}/admin`);

// 사용자 현재 노출 팝업 가져오기
const getActivePopupService = () => axiosInstance.get(`${BASE_URL}/active`);

const getPopupByIdService = (id) => axiosInstance.get(`${BASE_URL}/${id}`);

const savePopupService = (popup, file) => {
  const formData = new FormData();
  formData.append('data', new Blob([JSON.stringify(popup)], { type: 'application/json' }));
  if (file) formData.append('file', file);
  return axiosInstance.post(BASE_URL, formData);
};

const updatePopupService = (id, popup, file) => {
  const formData = new FormData();
  formData.append('data', new Blob([JSON.stringify(popup)], { type: 'application/json' }));
  if (file) formData.append('file', file);
  return axiosInstance.put(`${BASE_URL}/${id}`, formData);
};

const deletePopupService = (id) => axiosInstance.delete(`${BASE_URL}/${id}`);

export { getAllPopupService, getActivePopupService, getPopupByIdService, savePopupService, updatePopupService, deletePopupService };