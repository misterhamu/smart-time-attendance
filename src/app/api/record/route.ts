"use server";

import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const POST = async (req: Request, res: Response) => {
  const { id } = await req.json();

  try {
    let { data, error } = await supabase
      .from("tpc_time_attendance_record")
      .select(`*, tpc_employee(*)`)
      .eq("record_id", id);

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
        message: `Data retreive ${id} successfully.`,
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
