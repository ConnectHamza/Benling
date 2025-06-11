import axiosInstance from "./axiosInstance";

export interface ContactRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface ContactResponse {
  message: string;
  isError: boolean;
  result: {
    fullName: string;
    email: string;
    phoneNumber: string;
    message: string;
  };
}

export async function contactApi(data: ContactRequest): Promise<ContactResponse> {
  const response = await axiosInstance.post<ContactResponse>("/contact", data);
  return response.data;
}