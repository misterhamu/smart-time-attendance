"use client";
import { AllRecords, AttendanceRecord } from "@/types/index";
import { EyeIcon } from "@components/Icons";
import { allRecords } from "@libs/api";
import { getThaiDateTimeFormat } from "@libs/helper";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Key, useCallback, useMemo, useState } from "react";

type Props = {};

const columns = [
  {
    key: "name",
    label: "ชื่อ-นามสกุล",
  },
  {
    key: "position",
    label: "ตำแหน่ง",
  },
  {
    key: "checkin",
    label: "สถานที่เข้างาน",
  },
  {
    key: "created_at",
    label: "เวลาเข้างาน",
  },
  {
    key: "checkout",
    label: "สถานที่ออกงาน",
  },
  {
    key: "updated_at",
    label: "เวลาออกงาน",
  },
  {
    key: "actions",
    label: "รายละเอียด",
  },
];

export default function AdminTable({}: Props) {
  const records = useAllRecords();

  const renderCell = useCallback((record: AllRecords, columnKey: Key) => {
    const cellValue = record[String(columnKey)];

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="ดูรายละเอียด">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Link href={`/record?id=${record.record_id}`} target="_blank">
                <EyeIcon />
                </Link>
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const [page, setPage] = useState(1);
  const rowsPerPage = 20;

  const pages = Math.ceil(records.data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return records.data.slice(start, end);
  }, [page, records.data]);

  return (
    <>
      <Table
        aria-label="history"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader columns={columns}>
          {columns.map((column) => (
            <TableColumn
              key={column.key}
              align={column.key === "actions" ? "center" : "start"}
            >
              {column.label}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody  emptyContent={"No rows to display."} items={items}>
          {items.map((row) => (
            <TableRow key={row.id} className="hover:bg-gray-100">
              {(columnKey) => (
                <TableCell >{renderCell(row, columnKey)}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

function useAllRecords() {
  const query = useQuery({
    queryKey: ["allRecords"],
    queryFn: async () => {
      return await allRecords();
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
  // AllRecords
  const records: AllRecords[] = (query.data?.data.data || []).map(
    (q: AttendanceRecord) => ({
      checkin: q.checkin.location,
      id: q.id,
      mobile: q.mobile,
      checkout: (q.checkout && q.checkout.location) || "-",
      created_at: getThaiDateTimeFormat(new Date(q.created_at)),
      updated_at: q.updated_at
        ? getThaiDateTimeFormat(new Date(q.updated_at))
        : "-",
      record_id: q.record_id,
      position: q.tpc_employee.position,
      name: `${q.tpc_employee.first_name} ${q.tpc_employee.last_name}`,
    })
  );

  return {
    isLoading: query.isLoading || query.isFetching,
    data: records,
  };
}
