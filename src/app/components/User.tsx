import { TpcEmployee } from "@/types/index";
import { headers } from "next/headers";

export default function User() {
  const headerRequest = headers();
  const user: TpcEmployee = JSON.parse(String(headerRequest.get("user")));
  return (
    <div className="flex justify-between">
      <p className="max-w-[200px]">
        {user.first_name} {user.last_name}
      </p>
      <p>{user.position}</p>
    </div>
  );
}
