import { AttendanceRecordResponse, LoginRequest } from "@/types/index";
import HttpClient from "./http-clients";
import { cookies } from "next/headers";

export const login = async (req: LoginRequest) => {
  return HttpClient.post("/api/login", req);
};

export const checkIn = async (req: FormData) => {
  return HttpClient.post("/api/register-attendance", req, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const checkOut = async (req: FormData, id: number) => {
  req.append("id", String(id));
  return HttpClient.patch("/api/register-attendance", req, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const attendanceRecord = async () => {
  return HttpClient.get<AttendanceRecordResponse>(`/api/register-attendance`);
};

export const logout = async () => {
  return HttpClient.post(`/api/logout`,{});
};
