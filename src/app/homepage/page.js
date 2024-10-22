import Delivery from "@/public/images/delivery.webp";
import location from "@/public/images/location.png";

import BottomNavbar from "@/component/BottomNavbar";
import Home from "@/public/images/bg-home.webp";
import Profile from "@/public/images/profile.webp";
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-full md:w-[390px] ">
        <Image className="w-full" src={Home} alt="My Image" height={147} />
        <div
          className="px-4 "
          style={{ position: "relative", top: "-120px", zIndex: "1" }}
        >
          <div className="flex flex-col mb-7 justify-center items-center">
            <h5 className="font-sans text-xs text-white">Abang Express</h5>
            <h3 className="font-sans text-base font-bold text-white">
              Agen Jogjakarta
            </h3>
          </div>
          <div class=" flex items-center justify-around w-full text-center bg-white border border-gray-200 rounded-2xl shadow-lg ">
            <Image src={Profile} alt="My Image" width={70} height={70} />
            <h3 className="text-[#475467] font-sans text-base font-medium ">
              Offline
            </h3>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex flex-col mt-5 gap-5 ">
            <div className="flex gap-5 justify-between  ">
              <div class=" flex items-center justify-start gap-5 w-6/12 p-4 text-center bg-white border border-gray-200 rounded-2xl shadow-lg ">
                <Image src={Delivery} alt="My Image" width={40} height={40} />
                <div cla items-startssName="flex flex-col">
                  <h3 className="text-[#667085] text-xs font-normal ">
                    Pending
                  </h3>
                  <p
                    className="text-xs font-semibold "
                    style={{ color: "#000000" }}
                  >
                    1 pickup
                  </p>
                </div>
              </div>
              <div class=" flex items-center justify-start gap-5 w-6/12 p-4 text-center bg-white border border-gray-200 rounded-2xl shadow-lg ">
                <Image src={Delivery} alt="My Image" width={40} height={40} />
                <div cla items-startssName="flex flex-col">
                  <h3 className="text-[#667085]  text-xs font-normal ">
                    Inprogrees
                  </h3>
                  <p
                    className="text-xs font-semibold text-start "
                    style={{ color: "#000000" }}
                  >
                    1 pickup
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between ">
              <div class=" flex items-center justify-start gap-5 w-6/12 p-4 text-center bg-white border border-gray-200 rounded-2xl shadow-lg ">
                <Image src={Delivery} alt="My Image" width={40} height={40} />
                <div cla items-startssName="flex flex-col">
                  <h3 className="text-[#667085] text-xs font-normal ">
                    Success
                  </h3>
                  <p
                    className="text-xs font-semibold "
                    style={{ color: "#000000" }}
                  >
                    1 pickup
                  </p>
                </div>
              </div>
              <div class=" flex items-center justify-start gap-5 w-6/12 p-4 text-center bg-white border border-gray-200 rounded-2xl shadow-lg ">
                <Image src={Delivery} alt="My Image" width={40} height={40} />
                <div className="flex  flex-col items-start">
                  <h3 className="text-[#667085]  text-xs font-normal ">
                    Trouble
                  </h3>
                  <p
                    className="text-xs font-semibold text-start "
                    style={{ color: "#000000" }}
                  >
                    1 pickup
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-1 mt-5">
            <h3 className="font-semibold">Pending</h3>
            <Link href="/pickup">
              <h3 className="font-medium text-[#E52138] ">Lihat Semua</h3>
            </Link>
          </div>
          <div class="p-6 mt-3 bg-white border border-gray-200 rounded-2xl shadow-lg ">
            <div className="flex justify-between">
              <div class=" flex items-center justify-start ">
                <Image
                  className="me-4"
                  src={Delivery}
                  alt="My Image"
                  width={40}
                  height={40}
                />
                <div cla items-startssName="flex flex-col">
                  <p
                    className="text-xs font-semibold "
                    style={{ color: "#000000" }}
                  >
                    #1234566788
                  </p>
                  <h3 className="text-[#667085] text-xs font-normal ">
                    10 Sep 2021
                  </h3>
                </div>
              </div>
              <div className="flex justify-start items-start">
                <span class="bg-yellow-100 text-[#f59f00] text-xs font-medium px-2.5 py-0.5 rounded-xl">
                  Pending
                </span>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="flex justify-between mt-3">
              <div className="flex flex-col justify-start">
                <p className="text-sm text-[#667085] text-center">Berat</p>
                <h3 className="text-black text-sm font-medium ">32 Kg</h3>
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-sm text-[#667085] text-center">
                  Total Paket
                </p>
                <h3 className="text-black text-sm font-medium ">50</h3>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-sm text-[#667085] text-end">Estimasi</p>
                <h3 className="text-black text-sm font-medium ">
                  10 Sep 2021, 20:20 WIB
                </h3>
              </div>
            </div>
            <div className="shadow rounded-2xl p-4 mt-4 border-[#FFFAEB] bg-[#FFFAEB]">
              <div className="flex">
                <Image src={location} alt="My Image" width={18} height={18} />
                <p className="ms-1 font-semibold text-sm"> Kost</p>
              </div>
              <div className="my-2 ms-5">
                <p className=" text-xs font-normal text-[#667085]">
                  Jl. Ampera Raya No. 133, RT.05/RW.10, Ragunan, Kec. Ps.Minggu,
                  Kota Jakarta....
                </p>
              </div>
            </div>
          </div>
        </div>
        <BottomNavbar />
      </div>
    </div>
  );
}
