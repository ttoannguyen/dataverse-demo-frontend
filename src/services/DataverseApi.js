import api from "./Api";
import mockDatasets from "../data/mockDatasets.json";

const dataverseApi = {
  // getData: async () => {
  //   const response = await api.get("/data/datasets.json");
  //   return response;
  // },

  // src/services/DataverseApi.js

  getData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockDatasets });
      }, 500); 
    });
  },
};
export default dataverseApi;
