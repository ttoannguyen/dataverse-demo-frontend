import api from "./Api"

const dataverseApi = {
  getData: async () => {
    const response = await api.get("/datasets");
    console.log(response.data)
    return response.data;
  },
};
export default dataverseApi;
