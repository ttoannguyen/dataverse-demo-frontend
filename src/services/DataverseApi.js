import api from "./Api"

const dataverseApi = {
  getDatas: async () => {
    const response = await api.get("/mockDatasets.json");
    console.log(response.data)
    return response.data;
  },
  getData: async () => {
    const response = await api.get("/data.json");
    console.log(response.data)
    return response.data;
  },
  getKPIs: async () => {
    const response = await api.get("/KPI.json");
    console.log(response.data)
    return response.data;
  },
  getRemoteSensingData: async () => {
    const response = await api.get("/sentinel.json");
    console.log(response.data)
    return response.data;
  }
};
export default dataverseApi;
