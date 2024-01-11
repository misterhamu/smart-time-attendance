import { Button, Card, CardBody, Image, Input, Link } from "@nextui-org/react";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className=" absolute top-0 left-0 w-full h-full flex flex-col gap-6 justify-center items-center p-12 md:p-4">
      <Link href="/">
        <Image
          width={64}
          height={64}
          alt=""
          src="/icons/android-chrome-192x192.png"
        />
      </Link>
      <Card isBlurred className="border-none   w-full dark:bg-default-100/20" shadow="sm">
        <CardBody>
          <div className="flex items-center justify-center">
            <div className="flex flex-col w-full items-center gap-4">
              <p className="text-xl">เข้าสู่ระบบ</p>
              <Input
                autoFocus
                label="เบอร์โทรศัพท์"
                type="tel"
                variant="bordered"
                className="shadow-sm"
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                size="lg"
                autoComplete="off"
              />
              <Button color="primary" className="w-full" size="lg">
                เข้าสู่ระบบ
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
