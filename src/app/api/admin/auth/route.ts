"use server";

import { createClient } from "@supabase/supabase-js";
import { SignJWT, importJWK } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { compareSync, genSaltSync, hashSync } from "bcrypt-ts";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const POST = async (req: Request, res: Response) => {
  const { username, password } = await req.json();

  //   const password = "admin@tpc2024";
  //   const salt = genSaltSync(10);
  //     const hash = hashSync("admin@tpc2024", salt);
  //     console.log(hash)

  try {
    let { data, error } = await supabase
      .from("tpc_admin")
      .select("*")
      .eq("username", username);

    if (error) {
      console.log("error:", error);
      return NextResponse.json(
        { message: "Failed to find user please try again.", code: 4002 },
        { status: 400 }
      );
    }

    if (data?.length == 0) {
      return NextResponse.json(
        { message: "Failed data not found", code: 4004 },
        { status: 404 }
      );
    }

    if (compareSync(password, data[0].password) == false) {
      console.log("password false");
      return NextResponse.json(
        {
          message: "Failed user or pass incorrect, please try again.",
          code: 4004,
        },
        { status: 404 }
      );
    }

    const secretJWK = {
      kty: "oct",
      k: process.env.JOSE_SECRET,
    };
    const secretKey = await importJWK(secretJWK, "HS256");
    const token = await new SignJWT({ data })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("10h")
      .sign(secretKey);

    cookies().set("adminToken", token);
    // cookies().set("userInfo", JSON.stringify(data && data[0]));

    return NextResponse.json(
      {
        message: "Login successfully.",
        data: data && data[0],
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
