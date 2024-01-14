import { Card, CardBody } from "@nextui-org/react";

import { getThaiDateFormat } from "@libs/helper";
import AdminTable from "../../components/AdminTable";

type Props = {};

export default function Page({}: Props) {
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
          </div>
          <AdminTable />
        </CardBody>
      </Card>
    </div>
  );
}
