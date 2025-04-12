import api from "./Api"

const dataverseApi = {
  getDatas: async () => {
    const response = await api.get("/datasets.json");
    console.log(response.data)
    return response.data;
  },
  getData: async () => {
    const response = await api.get("/data");
    console.log(response.data)
    return response.data;
  },
};
export default dataverseApi;
