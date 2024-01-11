"use client";
import { Camera, Click } from "@components/Icons";
import { useTime } from "@hooks/useTime";
import { getShortThaiDateFormat, getThaiDateFormat } from "@libs/helper";
import {
  Card,
  CardBody,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Input,
  Image,
  Textarea,
} from "@nextui-org/react";
import Link from "next/link";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LabelHTMLAttributes, useEffect, useRef, useState } from "react";

export default function Home() {
  const time = useTime();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {/* <h2>Home</h2>
      <Link href={"/login"}>login</Link> */}
      <div className="flex flex-col gap-3 mt-3 justify-center items-center">
        <Card
          isBlurred
          className="border-none w-full dark:bg-default-100/50"
          shadow="sm"
        >
          <CardBody>
            <div className="flex justify-between">
              <p className="max-w-[200px]">นายสมชาย ใจดี</p>
              <p>พนักงานขาย</p>
            </div>
          </CardBody>
        </Card>
        <Card
          isBlurred
          className="border-none w-full py-12 dark:bg-default-100/50"
          shadow="sm"
        >
          <CardBody>
            <div className="flex items-center justify-center">
              <div className="flex flex-col w-full items-center gap-4">
                <div className="text-center">
                  <p className="text-7xl">{time.data}</p>
                  <p>{getThaiDateFormat(new Date())}</p>
                </div>

                <Button
                  color="primary"
                  className=" w-[150px] h-[150px] shadow-md text-xl bg-gradient-to-r from-[#9986E2] to-[#3E81E0] hover:from-[#3E81E0] transition duration-300 delay-150 hover:delay-300"
                  size="lg"
                  radius="full"
                  variant="shadow"
                  onClick={onOpen}
                >
                  <div className="flex flex-col justify-center items-center">
                    <Click />
                    <p>ตรอกบัตรเข้า</p>
                  </div>
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card
          isBlurred
          className="border-none w-full dark:bg-default-100/50"
          shadow="sm"
        >
          <CardBody>
            <div className="flex flex-col gap-3">
              <p className="max-w-[200px] text-xl font-semibold">
                ประวัติงานล่าสุด
              </p>
              <div className="flex flex-col gap-3">
                <p>{getShortThaiDateFormat(new Date())}</p>
                <div className="flex flex-col gap-3 font-light">
                  <div className="flex-1">
                    <p className="font-semibold">เวลาเข้า</p>
                    <p>08:09 น.</p>
                    <p>เอสพีเอ็ม ออดิโอ</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">เวลาออก</p>
                    <p>18:42 น.</p>
                    <p>บางหว้า อะไหล่ยนต์</p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Modal
        isDismissable={false}
        closeButton={<></>}
        isOpen={isOpen}
        placement={"center"}
        backdrop={"blur"}
        onOpenChange={onOpenChange}
        scrollBehavior={"outside"}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-10",
        }}
      >
        <ModalFormTimeAttendance />
      </Modal>
    </>
  );
}

function ModalFormTimeAttendance() {
  const schema = yup
    .object({
      localtion: yup.string().max(50, "").required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<any>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [isCaptureState, setIsCaptureState] = useState(false);
  const [source, setSource] = useState("");

  const handleCapture = (target: HTMLInputElement) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
        setIsCaptureState(false);
      }
    }
  };

  const handleConfirm = (onClose: () => void) => {
    if (!source) {
      setIsCaptureState(!isCaptureState);
    } else {
      onClose();
    }
  };

  const handleClose = (onClose: () => void) => {
    if (isCaptureState) {
      setIsCaptureState(!isCaptureState);
    } else {
      onClose();
    }
  };

  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {!isCaptureState ? "กรุณากรอกข้อมูล" : "กรุณาถ่ายภาพสถานที่"}
            </ModalHeader>
            <ModalBody>
              {!isCaptureState ? (
                <>
                  <Controller
                    control={control}
                    name="localtion"
                    render={({ field }) => (
                      <Input
                        {...field}
                        required
                        type="text"
                        label="สถานที่ปฏิบัติงาน"
                        placeholder="* กรอกข้อมูลสถานที่ปฏิบัติงาน"
                        size="lg"
                        className="input"
                      />
                    )}
                  />
                  <Textarea
                    label="หมายเหตุ/บันทึกการปฏิบัติงาน"
                    placeholder="* สามารถเว้นว่างได้"
                    className="input"
                    size="lg"
                  />

                  {source && (
                    <div className="w-full p-3 bg-default-100 rounded-lg">
                      <p className="text-sm mb-3 opacity-90">ภาพสถานที่</p>
                      <div className="relative">
                        <Image
                          src={source}
                          className="w-full h-[200px] object-cover"
                          alt=""
                        />
                        <Button
                          className="absolute  z-10 top-0 right-0"
                          color="danger"
                          onClick={() => {
                            setSource("");
                            setIsCaptureState(true);
                          }}
                        >
                          <Camera />
                          ถ่ายใหม่
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center items-center overflow-x-hidden ">
                    <div className="w-full bg-slate-100 p-6 rounded-lg">
                      {source ? (
                        <Image src={source} width={300} height={300} alt="" />
                      ) : (
                        <>
                          <label
                            htmlFor="image"
                            className="opacity-90 text-sm flex justify-center mt-6 flex-col items-center gap-3"
                          >
                            <div className="rounded-full bg-primary w-[100px] h-[100px] p-3 flex items-center justify-center">
                              <Camera />
                            </div>
                            <p className="text-primary">กดเพื่อเปิดกล้อง</p>
                          </label>

                          <input
                            accept="image/*"
                            id="image"
                            type="file"
                            className="input"
                            capture="environment"
                            style={{ visibility: "hidden" }}
                            onChange={(e) => {
                              handleCapture(e.target);
                              console.log(e);
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </ModalBody>
            <ModalFooter className="flex justify-between">
              <Button
                color={!isCaptureState ? "danger" : "default"}
                variant="light"
                onPress={() => {
                  handleClose(onClose);
                }}
                size="lg"
              >
                {!isCaptureState ? "ยกเลิก" : "ย้อนกลับ"}
              </Button>
              {!isCaptureState && (
                <Button
                  color="primary"
                  onPress={() => {
                    handleConfirm(onClose);
                  }}
                  size="lg"
                >
                  {!source ? "ถัดไป" : "ยืนยัน"}
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </>
  );
}
