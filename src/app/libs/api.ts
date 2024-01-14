import { AdminAuthRequest, AttendanceRecordResponse, LoginRequest, RecordRequest } from "@/types/index";
import HttpClient from "./http-clients";
import { cookies } from "next/headers";
import axios from "axios";

// admin case
export const allRecords = async () => {
  return HttpClient.get<AttendanceRecordResponse>(`/api/admin/all-records`);
};

export const adminAuth = async (req: AdminAuthRequest) => {
  return HttpClient.post("/api/admin/auth", req);
};

// user case
export const login = async (req: LoginRequest) => {
  return HttpClient.post("/api/login", req);
};

export const record = async (req: RecordRequest) => {
  return HttpClient.post("/api/record", req);
};

export const checkIn = async (req: FormData) => {
  return HttpClient.post("/api/register-attendance", req, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const checkOut = async (req: FormData, id: string) => {
  req.append("recordId", String(id));
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

export const sendLineNoti = async (message: string) => {
  var formData = {
    message: message,
    // 'imageFile': pictureurl
  };

  return axios.post("https://notify-api.line.me/api/notify", formData, {
    headers: {
      Authorization: `Bearer ${process.env.LINE_TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};