"use client";
import { AdminAuthRequest } from "@/types/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminAuth } from "@libs/api";
import { Button, Card, CardBody, Image, Input } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

type Props = {};

export default function Page({}: Props) {
  const router = useRouter();
  const schema = yup.object({
    username: yup.string().max(20, "สูงสุด 20 ตัวอักษร").required(),
    password: yup.string().max(20, "สูงสุด 20 ตัวอักษร").required(),
  });

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<AdminAuthRequest>({
    //@ts-ignore
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useMutation({
    mutationFn: async (req: AdminAuthRequest) => {
      return adminAuth(req);
    },
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: (data) => {
      router.replace("/admin");
    },
    onError: () => {},
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const onSubmit = async (data: AdminAuthRequest) => {
    loginForm.mutate(data);
  };

  return (
    <div className="  flex flex-col gap-6 justify-center items-center p-12 md:p-4 h-screen">
      <Image
        width={64}
        height={64}
        alt=""
        src="/icons/android-chrome-192x192.png"
      />

      <Card
        isBlurred
        className="border-none   w-full dark:bg-default-100/20  max-w-[600px] "
        shadow="sm"
      >
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-center">
              <div className="flex flex-col w-full items-center gap-4">
                <p className="text-xl">เข้าสู่ระบบ</p>

                <Controller
                  control={control}
                  name="username"
                  render={({ field }) => (
                    <Input
                      {...field}
                      autoFocus
                      label="บัญชีผู้ใช้"
                      type="text"
                      variant="bordered"
                      className="shadow-sm"
                      placeholder="กรุณากรอกบัญชีผู้ใช้"
                      size="lg"
                      autoComplete="off"
                      maxLength={20}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <Input
                      {...field}
                      autoFocus
                      label="รหัสผู้ใช้"
                      type="password"
                      variant="bordered"
                      className="shadow-sm"
                      placeholder="กรุณารหัสผู้ใช้"
                      size="lg"
                      autoComplete="off"
                      maxLength={20}
                    />
                  )}
                />

                <Button
                  isDisabled={!isValid}
                  isLoading={isLoading}
                  color="primary"
                  className="w-full"
                  size="lg"
                  type="submit"
                >
                  เข้าสู่ระบบ
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
