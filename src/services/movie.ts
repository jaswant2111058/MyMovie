import axios, { AxiosError } from "axios";
import { showToast } from "../utils/toast";

export const BASE_URL = "https://www.freetestapi.com/api/v1/movies";

export const getAllMovies = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message: string }>;
      console.log('Service Error msg:', axiosError.response?.data);
      showToast(axiosError.response?.data?.message ?? "Internal Server Error");
    } else {
      console.log('Unexpected error:', error);
      showToast("Internal Server Error");
    }
  }
};