"use client";
import {
  AttendanceRecord,
  AttendanceRecordResponse,
  FormSubmit,
  MyLocation,
  TpcEmployee,
} from "@/types/index";
import { Camera, Click } from "@components/Icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTime } from "@hooks/useTime";
import { attendanceRecord, checkIn, checkOut } from "@libs/api";
import {
  getShortThaiDateFormat,
  getThaiDateFormat,
  getTime24Format,
} from "@libs/helper";
import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Loading from "./loading";

export default function Home() {
  const [userInfo, setUserInfo] = useState<TpcEmployee>();
  const record = useAttendaceRecord();
  const time = useTime();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [myLocation, setMyLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const register = () => {
    if ("geolocation" in navigator) {
      onOpen();
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          setMyLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo") || ""));
  }, []);
  if (record.loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex flex-col gap-3 mt-3 justify-center items-center">
        <Card
          isBlurred
          className="border-none w-full dark:bg-default-100/50"
          shadow="sm"
        >
          <CardBody>
            <div className="flex justify-between">
              <p className="max-w-[200px]">
                {userInfo?.first_name} {userInfo?.last_name}
              </p>
              <p>{userInfo?.position}</p>
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
                  className={`w-[150px] h-[150px] shadow-md text-xl 
                  bg-gradient-to-r
                  ${
                    !record.data || record.data.checkout
                      ? "from-[#9986E2] to-[#3E81E0] hover:from-[#3E81E0] "
                      : "from-[#EB3D77] to-[#8A309A] hover:from-[#8A309A] hover:to-[#EB3D77]"
                  } 
                  transition duration-300 delay-150 hover:delay-300`}
                  size="lg"
                  radius="full"
                  variant="shadow"
                  onClick={() => {
                    register();
                  }}
                >
                  <div className="flex flex-col justify-center items-center">
                    <Click />
                    <p>
                      {!record.data || record.data.checkout
                        ? "ตรอกบัตรเข้า"
                        : "ตรอกบัตรออก"}
                    </p>
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
              {record.data ? (
                <div className="flex flex-col gap-3">
                  <p>
                    {getShortThaiDateFormat(new Date(record.data.created_at))}
                  </p>
                  <div className="flex flex-col gap-3 font-light">
                    <div className="flex-1">
                      <p className="font-semibold">เวลาเข้า</p>
                      <p>
                        {(record.data.checkin &&
                          `${getTime24Format(
                            new Date(Number(record.data.checkin.createdAt))
                          )} น.`) ||
                          "-"}
                      </p>
                      <p>{record.data.checkin?.location || "-"}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">เวลาออก</p>
                      <p>
                        {(record.data.checkout &&
                          `${getTime24Format(
                            new Date(Number(record.data.checkout.createdAt))
                          )} น.`) ||
                          "-"}
                      </p>
                      <p>{record.data.checkout?.location || ""}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="font-light">ไม่พบงานล่าสุด</p>
              )}
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
        <ModalFormTimeAttendance
          onClose={onClose}
          myLocation={myLocation}
          queryRecord={record.query}
          record={record.data}
        />
      </Modal>
    </>
  );
}

type ModalType = {
  onClose: () => void;
  myLocation: MyLocation;
  queryRecord: UseQueryResult<
    AxiosResponse<AttendanceRecordResponse, any>,
    Error
  >;
  record: AttendanceRecord;
};

function ModalFormTimeAttendance({
  onClose,
  myLocation,
  queryRecord,
  record,
}: ModalType) {
  const schema = yup.object({
    location: yup.string().max(100, "สูงสุด 100 ตัวอักษร").required(),
    remark: yup.string().max(500, "สูงสุด 500 ตัวอักษร"),
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
  } = useForm<FormSubmit>({
    // @ts-ignore
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      location: "",
      remark: "",
    },
  });

  const [isCaptureState, setIsCaptureState] = useState(false);
  const [source, setSource] = useState("");
  const [file, setFile] = useState<File>();

  const handleCapture = (target: HTMLInputElement) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        setFile(file);
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
      // onClose();
    }
  };

  const handleClose = (onClose: () => void) => {
    if (isCaptureState) {
      setIsCaptureState(!isCaptureState);
    } else {
      onClose();
    }
  };

  const onSubmit = async (data: FormSubmit) => {
    const imageFile = file;
    let form = new FormData();
    form.append("location", data.location);
    form.append("remark", data.remark);
    form.append("file", imageFile!);
    form.append("myLocation", JSON.stringify(myLocation));

    // registeAattendance(initialState,form);
    registerAttendance.mutate(form);
  };

  const [isLoading, setIsLoading] = useState(false);

  const registerAttendance = useMutation({
    mutationFn: async (form: FormData) => {
      console.log(form.get("file"));
      if (!record || record.checkout) {
        return checkIn(form);
      } else {
        return checkOut(form, record.record_id);
      }
    },
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      onClose();
      queryRecord.refetch();
    },
    onError: () => {},
    onSettled: () => {
      setIsLoading(false);
    },
  });

  return (
    <>
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader className="flex flex-col gap-1">
              {!isCaptureState ? "กรุณากรอกข้อมูล" : "กรุณาถ่ายภาพสถานที่"}
            </ModalHeader>
            <ModalBody>
              {!isCaptureState ? (
                <>
                  <Controller
                    control={control}
                    name="location"
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
                  <Controller
                    control={control}
                    name="remark"
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        label="หมายเหตุ/บันทึกการปฏิบัติงาน"
                        placeholder="* สามารถเว้นว่างได้"
                        className="input"
                        size="lg"
                      />
                    )}
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
                            name="image"
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
                  isDisabled={!isValid}
                  isLoading={isLoading}
                  type={!source ? "button" : "submit"}
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
          </form>
        )}
      </ModalContent>
    </>
  );
}

const useAttendaceRecord = () => {
  const query = useQuery({
    queryKey: ["record"],
    queryFn: async () => {
      return attendanceRecord();
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  return {
    loading: query.isLoading || query.isFetching,
    data: query.data?.data.data[0] as AttendanceRecord,
    query: query,
  };
};
