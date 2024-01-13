"use client";
import { AttendanceRecord, RecordRequest } from "@/types/index";
import { Marker } from "@components/Icons";
import { record } from "@libs/api";
import { getShortThaiDateFormat, getTime24Format } from "@libs/helper";
import { Card, CardBody, Divider, Image, Link } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import GoogleMapReact from "google-map-react";
import { useSearchParams } from "next/navigation";
import Loading from "../loading";
import PageNotFound from "../not-found";

type Props = {};

export default function Page({}: Props) {
  const router = useSearchParams();
  const id = router.get("id");
  const record = useRecord(String(id));

  if (record.loading) {
    return <Loading />;
  }

  if (record.error) {
    return <PageNotFound />;
  }

  return (
    <div className="flex flex-col gap-3 mt-3 justify-center items-center">
      <Card
        isBlurred
        className="border-none w-full dark:bg-default-100/50 max-w-[600px]"
        shadow="sm"
      >
        <CardBody className="flex flex-col gap-3">
          <div>
            <p className="text-4xl">บันทึกที่ {record.data.id}</p>
          </div>
          <div className="flex justify-between">
            <div className="max-w-[200px]">
              <p>พนักงาน</p>
              <p className="text-xl">
                {record.data.tpc_employee.first_name}{" "}
                {record.data.tpc_employee.last_name}
              </p>
            </div>
            <div>
              <p>ตำแหน่ง</p>
              <p className="text-xl">{record.data.tpc_employee.position}</p>
            </div>
          </div>
          <Divider />

          <div className="flex flex-col gap-3">
            <p className="text-2xl">ตอกบัตรเข้างาน</p>
            {record.data.checkin.image && (
              <div className="w-full">
                <Image
                  src={record.data.checkin.image}
                  width={0}
                  height={0}
                  alt=""
                  className="w-full object-cover"
                ></Image>
              </div>
            )}
            <div className="flex justify-between">
              <div>
                <p>วันที่</p>
                <p className="text-xl">
                  {getShortThaiDateFormat(
                    new Date(record.data.checkin.createdAt!)
                  )}
                </p>
              </div>
              <div>
                <p>เวลา</p>
                <p className="text-xl">
                  {getTime24Format(new Date(record.data.checkin.createdAt!))}
                </p>
              </div>
            </div>

            <div>
              <p>สถานที่ปฏิบัติงาน</p>
              <p className="text-xl">{record.data.checkin.location}</p>
            </div>
            <div>
              <p>หมายเหตุ</p>
              <p className="text-xl">{record.data.checkin.remark}</p>
            </div>
            <div>
              <p>สถานที่ตาม GPS</p>
              <p className="text-xl">{record.data.checkin.address}</p>
            </div>

            <Link
              style={{ height: "200px", width: "100%" }}
              href={`http://www.google.com/maps/place/${record.data.checkin.gpsLat},${record.data.checkin.gpsLng}`}
              target="_blank"
            >
              <GoogleMap
                lat={record.data.checkin.gpsLat}
                lng={record.data.checkin.gpsLng}
              />
            </Link>

            <br />
          </div>
          {record.data.checkout && (
            <>
              <Divider />
              <div className="flex flex-col gap-3">
                <p className="text-2xl">ตอกบัตรออกงาน</p>
                {record.data.checkout.image && (
                  <Image
                    src={record.data.checkout.image}
                    width={0}
                    height={0}
                    className="w-full"
                    alt=""
                  ></Image>
                )}
                <div className="flex justify-between">
                  <div>
                    <p>วันที่</p>
                    <p className="text-xl">
                      {record.data.checkout &&
                        getShortThaiDateFormat(
                          new Date(record.data.checkout.createdAt!)
                        )}
                    </p>
                  </div>
                  <div>
                    <p>เวลา</p>
                    <p className="text-xl">
                      {record.data.checkout &&
                        getTime24Format(
                          new Date(record.data.checkout.createdAt!)
                        )}
                    </p>
                  </div>
                </div>

                <div>
                  <p>สถานที่ปฏิบัติงาน</p>
                  <p className="text-xl">
                    {record.data.checkout && record.data.checkout.location}
                  </p>
                </div>
                <div>
                  <p>หมายเหตุ</p>
                  <p className="text-xl">
                    {record.data.checkout && record.data.checkout.remark}
                  </p>
                </div>
                <div>
                  <p>สถานที่ตาม GPS</p>
                  <p className="text-xl">
                    {record.data.checkout && record.data.checkout.address}
                  </p>
                </div>

                <Link
                  style={{ height: "200px", width: "100%" }}
                  href={`http://www.google.com/maps/place/${record.data.checkout.gpsLat},${record.data.checkout.gpsLng}`}
                  target="_blank"
                >
                  <GoogleMap
                    lat={record.data.checkout.gpsLat}
                    lng={record.data.checkout.gpsLng}
                  />
                </Link>
              </div>
            </>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

const useRecord = (id: string) => {
  const query = useQuery({
    queryKey: ["record"],
    queryFn: async () => {
      const req: RecordRequest = {
        id: id,
      };
      return record(req);
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  return {
    loading: query.isLoading || query.isFetching,
    data: query.data?.data.data as AttendanceRecord,
    query: query,
    error: query.isError || query.error,
  };
};

type GoogleMapProps = {
  lat: number;
  lng: number;
};

const GoogleMap = ({ lat, lng }: GoogleMapProps) => {
  return (
    <GoogleMapReact
      options={{
        zoomControl: false,
        draggable: false,
        fullscreenControl: false,
      }}
      bootstrapURLKeys={{
        key: String(process.env.NEXT_PUBLIC_GOOGLEMAP_KEY),
        language: "th",
      }}
      defaultCenter={{
        lat: lat,
        lng: lng,
      }}
      defaultZoom={15}
      yesIWantToUseGoogleMapApiInternals
    >
      <MarkerIcon lat={lat} lng={lng} />
    </GoogleMapReact>
  );
};

const MarkerIcon = ({ lat, lng }: any) => (
  <div className="relative">
    <div className="w-[16px] h-[16px] rounded-full bg-red-600"></div>
  </div>
);
