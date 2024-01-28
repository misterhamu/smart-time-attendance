"use client"
import { Button, Card, CardBody } from "@nextui-org/react";
import { getThaiDateFormat } from "@libs/helper";
import AdminTable from "../../components/AdminTable";
import { useMutation } from "@tanstack/react-query";
import { downloadCSV } from "@libs/api";

type Props = {};

export default function Page({}: Props) {
  const download = useMutation({
    mutationFn: async () => {
      return downloadCSV();
    },
    onMutate: () => {},
    onSuccess: (data) => {
      console.log(data.data.data)
      var csvString = data.data.data;
      var universalBOM = "\uFEFF";
      var a = window.document.createElement('a');
      a.setAttribute('href', 'data:text/csv; charset=utf-8,' + encodeURIComponent(universalBOM+csvString));
      a.setAttribute('download', 'example.csv');
      window.document.body.appendChild(a);
      a.click();
    },
    onError: () => {},
    onSettled: () => {},
  });
  return (
    <div className="flex flex-col gap-3 mt-3 justify-center items-center">
      <Card
        isBlurred
        className="border-none w-full dark:bg-default-100/50"
        shadow="sm"
      >
        <CardBody className="flex flex-col gap-3 p-6">
          <div className="flex justify-between items-center">
            <p className="text-2xl">ประวัติการทำงาน</p>
            <p>{getThaiDateFormat(new Date())}</p>
            <Button
            color="primary"
            onPress={() => {
              download.mutate();
            }}
          >
            ดาวน์โหลด CSV
          </Button>
          </div>
    
          <AdminTable />
        </CardBody>
      </Card>
    </div>
  );
}
