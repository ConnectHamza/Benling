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

export async function getCities(stateId?: number): Promise<City[]> {
  const url = stateId ? `/cities?stateId=${stateId}` : "/cities";
  const response = await axiosInstance.get<CitiesResponse>(url);
  return response.data.result;
}