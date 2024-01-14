import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  if (cookies().get("token")) {
    cookies().delete("token");
    cookies().delete("userInfo");
  }

  if (cookies().get("adminToken")) {
    cookies().delete("adminToken");
  }

  return NextResponse.json(
    {
      message: "Logout successfully.",
    },
    { status: 200 }
  );
};
