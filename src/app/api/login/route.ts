"use server";

import { createClient } from "@supabase/supabase-js";
import { SignJWT, importJWK } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const POST = async (req: Request, res: Response) => {
  const { mobile } = await req.json();

  try {
    let { data: tpc_employee, error } = await supabase
      .from("tpc_employee")
      .select("*")
      .eq("mobile", mobile);

    if (error) {
      console.log("error:", error);
      return NextResponse.json(
        { message: "Failed to find employee please try again.", code: 4002 },
        { status: 400 }
      );
    }
    console.log("tpc_employee: ", tpc_employee);
    if (tpc_employee?.length == 0) {
      return NextResponse.json(
        { message: "Failed data not found", code: 4004 },
        { status: 400 }
      );
    }

    const secretJWK = {
      kty: "oct",
      k: process.env.JOSE_SECRET,
    };
    const secretKey = await importJWK(secretJWK, "HS256");
    const token = await new SignJWT({ mobile })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("10h")
      .sign(secretKey);

    cookies().set("token", token);
    cookies().set("userInfo", JSON.stringify(tpc_employee && tpc_employee[0]));

    return NextResponse.json(
      {
        message: "Login successfully.",
        data: tpc_employee && tpc_employee[0],
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
