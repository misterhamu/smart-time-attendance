"use client";
import { AttendanceRecord, RecordRequest } from "@/types/index";
import { record } from "@libs/api";
import { Card, CardBody, Divider, Image } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { ReactElement } from "react";
import Loading from "../loading";
import { getShortThaiDateFormat, getTime24Format } from "@libs/helper";
import PageNotFound from "../not-found";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMap from "@components/GoogleMap";
import GoogleMapReact from "google-map-react";
import { Marker } from "@components/Icons";

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

            <div style={{ height: "250px", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: String(process.env.NEXT_PUBLIC_GOOGLEMAP_KEY),
                }}
                defaultCenter={{
                  lat: record.data.checkin.gpsLat,
                  lng: record.data.checkin.gpsLng,
                }}
                defaultZoom={15}
                yesIWantToUseGoogleMapApiInternals
              >
                <MarkerIcon
                  lat={record.data.checkin.gpsLat}
                  lng={record.data.checkin.gpsLng}
                />
              </GoogleMapReact>
            </div>

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

                <div style={{ height: "250px", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: String(process.env.NEXT_PUBLIC_GOOGLEMAP_KEY),
                }}
                defaultCenter={{
                  lat: record.data.checkin.gpsLat,
                  lng: record.data.checkin.gpsLng,
                }}
                defaultZoom={15}
                yesIWantToUseGoogleMapApiInternals
              >
                <MarkerIcon
                  lat={record.data.checkin.gpsLat}
                  lng={record.data.checkin.gpsLng}
                />
              </GoogleMapReact>
            </div>
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

const MarkerIcon = ({lat,lng} :any) => <div><Marker/></div>;
