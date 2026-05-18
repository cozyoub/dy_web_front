import axiosInstance from '../common/axiosInstance';

const BASE_URL = '/api/contact';

const getAllContactService = () => axiosInstance.get(BASE_URL);
const getContactByIdService = (id) => axiosInstance.get(`${BASE_URL}/${id}`);
const saveContactService = (contact) => axiosInstance.post(BASE_URL, contact);
const updateContactStatusService = (id, status) =>
  axiosInstance.patch(`${BASE_URL}/${id}/status?status=${status}`);
const deleteContactService = (id) => axiosInstance.delete(`${BASE_URL}/${id}`);

export {
  getAllContactService, getContactByIdService,
  saveContactService, updateContactStatusService, deleteContactService
};