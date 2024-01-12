"use server";

import { CheckInOut, MyLocation, TpcEmployee } from "@/types/index";
import { sendLineNoti } from "@libs/api";
import {
  getAddressFromLatLong,
  getShortThaiDateFormat,
  getTime24Format,
} from "@libs/helper";
import { createClient } from "@supabase/supabase-js";
import { importJWK, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const GET = async (req: Request, res: Response) => {
  try {
    const token = cookies().get("token")!.value;
    const secretJWK = {
      kty: "oct",
      k: process.env.JOSE_SECRET,
    };
    const secretKey = await importJWK(secretJWK, "HS256");
    const { payload } = await jwtVerify(token, secretKey);

    console.log("payload:", payload);
    if (!payload) {
      // TODO: handle 401
    }

    const currentTime = new Date();
    currentTime.setHours(0, 0, 0, 0);
    const timeZoneOffset = 7 * 60;
    const today = currentTime.getTime() + timeZoneOffset * 60 * 1000;
    const endOfDay = currentTime.getTime() + 24 * 60 * 60 * 1000;

    let { data: tpc_time_attendance_record, error } = await supabase
      .from("tpc_time_attendance_record")
      .select(`*`)
      .eq("mobile", payload.mobile)
      .gte("created_at", today)
      .lt("created_at", endOfDay)
      .order("id", { ascending: false });

    if (error) {
      console.log(error);
    }

    return NextResponse.json(
      {
        message: `Data retreive ${payload.mobile} successfully.`,
        data: tpc_time_attendance_record,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Internal error please try again.", code: 5001 },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request, res: Response) => {
  const currentTime = new Date();
  const timeZoneOffset = 0 * 60;
  const now = currentTime.getTime() + timeZoneOffset * 60 * 1000;

  const formReq = await req.formData();
  const location = formReq.get("location");
  const remark = formReq.get("remark");
  const myLocation: MyLocation = JSON.parse(String(formReq.get("myLocation")));

  const recordId = uuidv4()
  const record: CheckInOut = {
    id: recordId,
    gpsLat: myLocation.lat,
    gpsLng: myLocation.lng,
    location: String(location),
    address: String(await getAddressFromLatLong(myLocation)),
    image: "",
    remark: String(remark),
    createdAt: now,
  };

  try {
    const token = cookies().get("token")!.value;
    const secretJWK = {
      kty: "oct",
      k: process.env.JOSE_SECRET,
    };
    const secretKey = await importJWK(secretJWK, "HS256");
    const { payload } = await jwtVerify(token, secretKey);

    console.log("payload:", payload);
    if (!payload) {
      // TODO: handle 401
    }

    const { data, error } = await supabase
      .from("tpc_time_attendance_record")
      .insert([
        {
          record_id: recordId,
          created_at: now,
          mobile: payload.mobile,
          checkin: record,
        },
      ]);

    if (error) {
      console.log("error:", error);
      return NextResponse.json(
        { message: "Failed to check-in please try again.", code: 4002 },
        { status: 400 }
      );
    }

    // Line noti
    const userInfo: TpcEmployee = JSON.parse(cookies().get("userInfo")!.value);
    console.log("userInfo: ", userInfo);
    const message = `📣📣 ตอกบัตเข้างาน 📣📣 \n🔻 ชื่อ-นามสกุล\n       - ${
      userInfo.first_name
    } ${userInfo.last_name}\n🔻 แผนก/ตำแหน่ง\n       - ${
      userInfo.position
    }\n🔻 วันที่-เวลา\n       - วันที่ ${getShortThaiDateFormat(
      new Date(record.createdAt)
    )}\n       - เวลา ${getTime24Format(
      new Date(record.createdAt)
    )} น.\n🔻 สถานที่ปฏิบัติงาน\n       - ${location}\n🔻 หมายเหตุ\n       - ${remark}\n🔻 สถานที่ตาม GPS\n       - ${
      record.address
    }\n📌 ตรวจสอบข้อมูลที่ถูกบันทึก : ${process.env.NEXT_PUBLIC_URL}/record/?id=${recordId}
    `;
    sendLineNoti(message);
    return NextResponse.json(
      {
        message: "Create check-in successfully.",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Internal error please try again.", code: 5001 },
      { status: 500 }
    );
  }
};

export const PATCH = async (req: Request, res: Response) => {
  const currentTime = new Date();
  const timeZoneOffset = 0 * 60;
  const now = currentTime.getTime() + timeZoneOffset * 60 * 1000;

  const formReq = await req.formData();
  const recordId = formReq.get("recordId");
  const location = formReq.get("location");
  const remark = formReq.get("remark");
  const myLocation: MyLocation = JSON.parse(String(formReq.get("myLocation")));

  const record: CheckInOut = {
    id: uuidv4(),
    gpsLat: myLocation.lat,
    gpsLng: myLocation.lng,
    location: String(location),
    address: String(await getAddressFromLatLong(myLocation)),
    image: "",
    remark: String(remark),
    createdAt: now,
  };

  try {
    const token = cookies().get("token")!.value;
    const secretJWK = {
      kty: "oct",
      k: process.env.JOSE_SECRET,
    };
    const secretKey = await importJWK(secretJWK, "HS256");
    const { payload } = await jwtVerify(token, secretKey);

    console.log("payload:", payload);
    if (!payload) {
      // TODO: handle 401
    }

    const { data, error } = await supabase
      .from("tpc_time_attendance_record")
      .update({ checkout: record, updated_at: now })
      .eq("record_id", recordId);

    if (error) {
      console.log("error:", error);
      return NextResponse.json(
        { message: "Failed to check-out please try again.", code: 4002 },
        { status: 400 }
      );
    }

    // Line noti
    const userInfo: TpcEmployee = JSON.parse(cookies().get("userInfo")!.value);
    console.log("userInfo: ", userInfo);
    const message = `📣📣 ตอกบัตรออกงาน 📣📣 \n🔻 ชื่อ-นามสกุล\n       - ${
      userInfo.first_name
    } ${userInfo.last_name}\n🔻 แผนก/ตำแหน่ง\n       - ${
      userInfo.position
    }\n🔻 วันที่-เวลา\n       - วันที่ ${getShortThaiDateFormat(
      new Date(record.createdAt)
    )}\n       - เวลา ${getTime24Format(
      new Date(record.createdAt)
    )} น.\n🔻 สถานที่ปฏิบัติงาน\n       - ${location}\n🔻 หมายเหตุ\n       - ${remark}\n🔻 สถานที่ตาม GPS\n       - ${
      record.address
    }\n📌 ตรวจสอบข้อมูลที่ถูกบันทึก : ${process.env.NEXT_PUBLIC_URL}/record/?id=${recordId}
    `;
    sendLineNoti(message);

    return NextResponse.json(
      {
        message: "Update check-out successfully.",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Internal error please try again.", code: 5001 },
      { status: 500 }
    );
  }
};
