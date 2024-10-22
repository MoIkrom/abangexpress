"use client";
import homeGray from "@/public/images/home-gray.png";
import homeRed from "@/public/images/home-red.png";
import nearbyGray from "@/public/images/nearby-gray.png";
import paket from "@/public/images/paket.png";
import accountGray from "@/public/images/account-gray.png";
import accountRed from "@/public/images/account-red.png";
import notificationGray from "@/public/images/notification-gray.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BottomNavbar() {
  const pathname = usePathname();

  // Cek apakah route saat ini adalah home ('/')
  const isHome = pathname === "/homepage";
  const isAccount = pathname === "/account";
  //   const isHome = pathname === "/homepage";

  return (
    <div className=" z-10 fixed  bottom-0 w-full md:w-[390px] bg-white shadow-lg border-t-2">
      <nav className="flex justify-around h-[65px] cursor-pointer">
        <Link
          href="/homepage"
          className="flex flex-col justify-center items-center"
        >
          <Image
            src={isHome ? homeRed : homeGray}
            alt="My Image"
            width={32}
            height={32}
          />
          <p
            className={`text-xs text-center ${
              isHome ? "text-[#E52138]" : "text-[#A0A4A8]"
            }`}
          >
            Beranda
          </p>
        </Link>
        <div className="flex flex-col justify-center items-center">
          <Image src={nearbyGray} alt="My Image" width={32} height={32} />
          <p className="text-xs text-center text-[#A0A4A8]">Nearby</p>
        </div>
        <div
          className="flex flex-col justify-center items-center"
          style={{ position: "relative", top: "-19.5px" }}
        >
          <Image
            className=" border shadow-lg rounded-full"
            src={paket}
            alt="My Image"
            width={70}
            height={70}
          />
          <p className="text-xs text-center text-[#A0A4A8]">Paket Anda</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={notificationGray} alt="My Image" width={32} height={32} />
          <p className="text-xs text-center text-[#A0A4A8]">Notifications</p>
        </div>

        <Link
          href="/account"
          className="flex flex-col justify-center items-center"
        >
          <Image
            src={isAccount ? accountRed : accountGray}
            alt="My Image"
            width={32}
            height={32}
          />
          <p
            className={`text-xs text-center ${
              isAccount ? "text-[#E52138]" : "text-[#A0A4A8]"
            }`}
          >
            Account
          </p>
        </Link>
      </nav>
    </div>
  );
}
