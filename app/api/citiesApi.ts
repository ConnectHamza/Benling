import axiosInstance from "./axiosInstance";

export interface City {
  id: number;
  name: string;
}

export interface CitiesResponse {
  message: string;
  isError: boolean;
  result: City[];
}

export async function getCities(): Promise<City[]> {
  const response = await axiosInstance.get<CitiesResponse>("/cities");
  return response.data.result;
}