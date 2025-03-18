import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2";

export const getItems = async () => {
  const response = await axios.get(`${API_BASE_URL}/item/`);
  return response.data.results;
};
