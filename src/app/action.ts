"use server";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

export async function registeAattendance(prevState: any, formData: FormData) {
  const image = formData.get("file");

  console.log(formData.get("file"));

  const currentTime = new Date();
  const timeZoneOffset = 7 * 60;
  const now = currentTime.getTime() + timeZoneOffset * 60 * 1000;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  try {
    const { data, error } = await supabase
      .from("tpc_time_attendance_record")
      .insert([
        {
          created_at: now,
          mobile: "0963651459",
          checkin: {
            id: uuidv4(),
            location: "ari",
            remark: "aaa",
          },
        },
      ]);

    if (error) {
      console.log("error:", error);

      return false;
    }
    return { success: true, message: "ok" };
  } catch (err) {}

  return { success: true, message: "ok" };

}
