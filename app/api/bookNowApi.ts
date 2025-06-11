import axiosInstance from "./axiosInstance";

export interface BookNowRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  selectedModel: string;
  selectedCity: string;
  message?: string;
  paymentType: string;
  isAgreedToUpdates: boolean;
}

export interface BookNowResponse {
  message: string;
  isError: boolean;
  result: {
    fullName: string;
    email: string;
    phoneNumber: string;
    model: string;
    city: string;
    message: string;
    paymentType: string;
    isAgreedToUpdates: boolean;
  };
}

export async function bookNowApi(data: BookNowRequest): Promise<BookNowResponse> {
  const response = await axiosInstance.post<BookNowResponse>("/booknow", data);
  return response.data;
}