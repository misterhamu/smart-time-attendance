import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const POST = async (req: Request, res: Response) => {
  if (cookies().get("token")) {
    cookies().delete("token");
  }
  return NextResponse.json(
    {
      message: "Logout successfully.",
    },
    { status: 200 }
  );
};
