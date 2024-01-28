"use server";

import { getThaiDateTimeFormat } from "@libs/helper";
import { createClient } from "@supabase/supabase-js";
import { importJWK, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const GET = async (req: Request, res: Response) => {
  try {
    const token = cookies().get("adminToken")!.value;
    const secretJWK = {
      kty: "oct",
      k: process.env.JOSE_SECRET,
    };
    const secretKey = await importJWK(secretJWK, "HS256");
    const { payload } = await jwtVerify(token, secretKey);

    if (!payload) {
      return NextResponse.json(
        { message: "Failed unauthorized.", code: 4001 },
        { status: 401 }
      );
    }
    const { data, error } = await supabase
      .from("tpc_time_attendance_record")
      .select(
        `
    first_name:  tpc_employee(first_name),
    last_name:  tpc_employee(last_name),
    mobile:  tpc_employee(mobile),
    position:  tpc_employee(position),
    checkin_lat: checkin->gpsLat,
    checkin_lng: checkin->gpsLng,
    checkin_location: checkin->location,
    checkin_address: checkin->address,
    checkin_remark: checkin->remark,
    checkin_time: checkin->createdAt,
    checkin_image: checkin->image,
    checkout_lat: checkout->gpsLat,
    checkout_lng: checkout->gpsLng,
    checkout_location: checkout->location,
    checkout_address: checkout->address,
    checkout_remark: checkout->remark,
    checkout_time: checkout->createdAt,
    checkout_image: checkout->image
  `
      )
      .order("created_at", { ascending: false })
    // .csv();

    if (error) {
      console.log(error);
    }

    if (data?.length == 0 || data == null) {
      return NextResponse.json(
        { message: "Failed data not found.", code: 4004 },
        { status: 404 }
      );
    }

    console.log(data)
    const csvString = [
      [
        "first_name",
        "last_name",
        "mobile",
        "position",
        "checkin_lat",
        "checkin_lng",
        "checkin_location",
        "checkin_address",
        "checkin_remark",
        "checkin_time",
        "checkout_lat",
        "checkout_lng",
        "checkout_location",
        "checkout_address",
        "checkout_remark",
        "checkout_time",
        "checkin_image",
        "checkout_image",
      ],
      ...data.map((item) => [
                // @ts-ignore
                item.first_name.first_name,item.last_name.last_name,String(`'${item.mobile.mobile}`),item.position.position,
        item.checkin_lat || "-",
        item.checkin_lng || "-",
        item.checkin_location || "-",
        item.checkin_address || "-",
        String(item.checkin_remark).replace(/\r\n|\r|\n/g, ",") || "-",
        getThaiDateTimeFormat(new Date(Number(item.checkin_time))) || "-",
        item.checkout_lat || "-",
        item.checkout_lng || "-",
        item.checkout_location || "-",
        item.checkout_address || "-",
        String(item.checkout_remark).replace(/\r\n|\r|\n/g, ",") || "-",
        getThaiDateTimeFormat(new Date(Number(item.checkout_time))) || "-",
        item.checkin_image || "-",
        item.checkout_image || "-",

      ])
    ]
      .map((e) => e.join(","))
      .join("\n")
      .replace(/(^\[)|(\]$)/mg, '');


    //   console.log(csvString)
    return NextResponse.json(
      {
        message: `Data retreive successfully.`,
        data: csvString,
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

function downloadableCSV(rows) {
  var content = "data:text/csv;charset=utf-8,";

  rows.forEach(function (row, index) {
    content += row.join(",") + "\n";
  });

  return encodeURI(content);
}
