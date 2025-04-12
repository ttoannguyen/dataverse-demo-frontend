import api from "./Api";

export const dataverseApi = {
  getData: async () => {
    const response = await api.get("/data/datasets.json");
    return response;
  },
};