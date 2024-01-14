"use server";

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

    console.log("payload:", payload);
    if (!payload) {
      return NextResponse.json(
        { message: "Failed unauthorized.", code: 4001 },
        { status: 401 }
      );

    }

    let { data, error } = await supabase
      .from("tpc_time_attendance_record")
      .select(`*, tpc_employee(*)`)
      .order("created_at", { ascending: false });


    if (error) {
      console.log(error);
    }

    console.log("data;" ,data)
    if (data?.length == 0 || data == null) {
      return NextResponse.json(
        { message: "Failed data not found.", code: 4004 },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: `Data retreive  successfully.`,
        data: data && data,
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
