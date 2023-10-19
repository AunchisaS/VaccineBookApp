import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-gray-900 text-white hover:text-gray-300 py-4 px-6 flex justify-end items-center">
      {session ? (
        <div className="w-4/5 my-auto text-white-500 mx-8 text-m">
          <Link
            href="/api/auth/signout"
            className="text-white hover:text-gray-300"
          >
            Sign Out
          </Link>
        </div>
      ) : (
        <div className="w-4/5 my-auto text-white-500 mx-8 text-m">
          <Link
            href="/api/auth/signin"
            className="text-white hover:text-gray-300"
          >
            Sign In
          </Link>
        </div>
      )}
      <div className="flex flex-col items-end px-4">
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>
      <div className="">
        <Link href="/">
          <Image
            src={"/img/logo.png"}
            alt="logo"
            width={30}
            height={0}
            sizes="100vh"
          />
        </Link>
      </div>
    </div>
  );
}
