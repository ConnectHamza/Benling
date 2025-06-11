import axiosInstance from "./axiosInstance";

export interface DealershipRequest {
  showroomState: string;
  showroomDistrict: string;
  showroomCity: string;
  fullName: string;
  fatherName: string;
  dateOfBirth: string;
  cnic: string;
  ntn: string;
  strn: string;
  emailAddress: string;
  mobileNumber: string;
  whatsAppNumber: string;
  applicantState: string;
  applicantDistrict: string;
  applicantCity: string;
  residentialAddress: string;
  businessOccupation: string;
  showroomOwnershipStatus: string;
}

export interface DealershipResponse {
  message: string;
  isError: boolean;
  result: DealershipRequest;
}

export async function postDealershipApplication(data: DealershipRequest): Promise<DealershipResponse> {
  const response = await axiosInstance.post<DealershipResponse>(
    "/dealerappication",
    data,
    { headers: { "Content-Type": "application/json-patch+json" } }
  );
  return response.data;
}