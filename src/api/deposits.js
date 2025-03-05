import apiClient from "./apiClient";

export const getDeposits = async () => {
  try {
    const response = await apiClient.get("/deposits");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching deposits:", error);
    return [];
  }
};

export const deleteDeposits = async (id) => {
  try {
    const response = await apiClient.delete(`/deposits/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting deposit:", error);
    return null;
  }
};