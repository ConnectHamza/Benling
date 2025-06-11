import axiosInstance from "./axiosInstance";

export interface State {
  id: number;
  name: string;
}

export interface StatesResponse {
  message: string;
  isError: boolean;
  result: State[];
}

export async function getStates(): Promise<State[]> {
  const response = await axiosInstance.get<StatesResponse>("/states");
  return response.data.result;
}