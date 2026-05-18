import axiosInstance from '../common/axiosInstance';

const BASE_URL = '/api/admin/visitors';

const getDailyVisitorsService = () => {
  const end = new Date().toISOString().slice(0, 10);
  const start = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    .toISOString().slice(0, 10);
  return axiosInstance.get(`${BASE_URL}/daily?start=${start}&end=${end}`);
};

const getMonthlyVisitorsService = () => {
  const year = new Date().getFullYear();
  return axiosInstance.get(`${BASE_URL}/monthly?year=${year}`);
};

export { getDailyVisitorsService, getMonthlyVisitorsService };