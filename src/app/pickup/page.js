"use client";

import { useState } from "react";
import Delivery from "@/public/images/delivery.webp";
import location from "@/public/images/location.png";
import back from "@/public/images/back.png";
import Image from "next/image";
import Header from "@/component/Header";

export default function Pickup() {
  // State untuk menyimpan tab yang aktif
  const [activeTab, setActiveTab] = useState("Pending");

  // Konten yang akan ditampilkan berdasarkan tab yang aktif
  const renderContent = () => {
    switch (activeTab) {
      case "Pending":
        return (
          <span class="bg-yellow-100 text-[#f59f00] text-xs font-semibold px-2.5 py-0.5 rounded-xl">
            Pending
          </span>
        );
      case "In Progress":
        return (
          <span class="bg-[#EFF8FF] text-[#2E90FA] text-xs font-semibold px-2.5 py-0.5 rounded-xl">
            Inprogress
          </span>
        );
      case "Success":
        return (
          <span class="bg-[#ECFDF3] text-[#039855] text-xs font-semibold px-2.5 py-0.5 rounded-xl">
            Success
          </span>
        );
      case "Trouble":
        return (
          <span class="bg-[#FEE4E2] text-[#D92D20] text-xs font-semibold px-2.5 py-0.5 rounded-xl">
            Trouble
          </span>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-full md:w-[390px] ">
        <Header title="Pickup" />
        <div className=" border-b mt-5 border-[#e6c5c8]">
          <ul className="flex justify-between mx-2 gap-5 items-center">
            <li
              onClick={() => setActiveTab("Pending")}
              className={`cursor-pointer pb-2 ${
                activeTab === "Pending"
                  ? "border-b-2 border-red-500 font-semibold"
                  : ""
              }`}
            >
              Pending
            </li>
            <li
              onClick={() => setActiveTab("In Progress")}
              className={`cursor-pointer pb-2 ${
                activeTab === "In Progress"
                  ? "border-b-2 border-red-500 font-semibold"
                  : ""
              }`}
            >
              In Progress
            </li>
            <li
              onClick={() => setActiveTab("Success")}
              className={`cursor-pointer pb-2 ${
                activeTab === "Success"
                  ? "border-b-2 border-red-500 font-semibold"
                  : ""
              }`}
            >
              Success
            </li>
            <li
              onClick={() => setActiveTab("Trouble")}
              className={`cursor-pointer pb-2 ${
                activeTab === "Trouble"
                  ? "border-b-2 border-red-500 font-semibold"
                  : ""
              }`}
            >
              Trouble
            </li>
          </ul>
        </div>
        <div className="my-5">
          <div class="p-4 mt-5 mx-4 bg-white border border-gray-200 rounded-2xl shadow-lg ">
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
                {renderContent()}
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
            <div className="shadow rounded-2xl p-2 mt-4 border-[#FFFAEB] bg-[#FFFAEB]">
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
          <div class="p-4 mt-5 mx-4 bg-white border border-gray-200 rounded-2xl shadow-lg ">
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
                {renderContent()}
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
            <div className="shadow rounded-2xl p-2 mt-4 border-[#FFFAEB] bg-[#FFFAEB]">
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
          <div class="p-4 mt-5 mx-4 bg-white border border-gray-200 rounded-2xl shadow-lg ">
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
                {renderContent()}
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
            <div className="shadow rounded-2xl p-2 mt-4 border-[#FFFAEB] bg-[#FFFAEB]">
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
          <div class="p-4 mt-5 mx-4 bg-white border border-gray-200 rounded-2xl shadow-lg ">
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
                {renderContent()}
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
            <div className="shadow rounded-2xl p-2 mt-4 border-[#FFFAEB] bg-[#FFFAEB]">
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
      </div>
    </div>
  );
}
