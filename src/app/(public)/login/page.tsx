"use client";
import { LoginRequest } from "@/types/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@libs/api";
import { Button, Card, CardBody, Image, Input, Link } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

type Props = {};

export default function Page({}: Props) {
  const router = useRouter();
  const schema = yup.object({
    mobile: yup.string().max(10, "สูงสุด 10 ตัวอักษร").required().min(10),
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
  } = useForm<LoginRequest>({
    // @ts-ignore
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useMutation({
    mutationFn: async (req: LoginRequest) => {
      return login(req);
    },
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: (data) => {
      localStorage.setItem("userInfo", JSON.stringify(data.data.data));
      router.replace("/");
    },
    onError: () => {},
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const onSubmit = async (data: LoginRequest) => {
    loginForm.mutate(data);
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center p-12 md:p-4 h-screen">
      <Image
        width={64}
        height={64}
        alt=""
        src="/icons/android-chrome-192x192.png"
      />

      <Card
        isBlurred
        className="border-none   w-full dark:bg-default-100/20 max-w-[600px]"
        shadow="sm"
      >
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-center">
              <div className="flex flex-col w-full items-center gap-4">
                <p className="text-xl">เข้าสู่ระบบ</p>
                <Controller
                  control={control}
                  name="mobile"
                  render={({ field }) => (
                    <Input
                      {...field}
                      autoFocus
                      label="เบอร์โทรศัพท์"
                      type="tel"
                      variant="bordered"
                      className="shadow-sm"
                      placeholder="กรุณากรอกเบอร์โทรศัพท์"
                      size="lg"
                      autoComplete="off"
                      maxLength={10}
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
