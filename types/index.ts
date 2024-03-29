import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type FormSubmit = {
  location: string;
  remark: string;
};

export type CheckInOut = {
  id: string;
  gpsLat: number;
  gpsLng: number;
  location: string;
  address: string;
  image: string;
  remark?: string;
  createdAt: number;
};

export type MyLocation = {
  lat: number;
  lng: number;
};

export interface CSVResponse {
  message: string;
  data: string;
}

export interface AttendanceRecordResponse {
  message: string;
  data: AttendanceRecord[];
}

export interface AllRecords {
  id: number;
  mobile: string;
  checkin: string;
  checkout: string;
  created_at: string;
  updated_at: string;
  record_id: string;
  position: string;
  name: string;
}

export interface AttendanceRecord {
  id: number;
  mobile: string;
  checkin: Checkin;
  checkout: Checkin;
  created_at: number;
  updated_at: number;
  tpc_employee: TpcEmployee;
  record_id: string;
}

export interface Checkin {
  id: string;
  gpsLat: number;
  gpsLng: number;
  location: string;
  address: string;
  image: string;
  remark: string;
  createdAt?: number;
}

export interface TpcEmployee {
  id: number;
  mobile: string;
  position: string;
  last_name: string;
  created_at: number;
  first_name: string;
}

export interface LoginRequest {
  mobile: string;
}

export interface RecordRequest {
  id: string;
}

export interface AdminAuthRequest {
  username: string;
  password: string;
}