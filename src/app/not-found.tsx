"use client"
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type Props = {};

export default function PageNotFound({}: Props) {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-6">
      <p className="text-4xl">ไม่พบหน้านี้</p>
      <Button
        color="primary"
        size="lg"
        onClick={() => {
          router.replace("/");
        }}
      >
        กลับสู่หน้าแรก
      </Button>
    </div>
  );
}
