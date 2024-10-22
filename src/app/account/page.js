"use client";
import { useState } from "react";
import BottomNavbar from "@/component/BottomNavbar";
import bgAccount from "@/public/images/account-bg.png";
import Profile from "@/public/images/foto.png";
import lock from "@/public/images/lock.png";
import arrow from "@/public/images/arrow.png";
import star from "@/public/images/star.png";
import help from "@/public/images/help.png";
import notif from "@/public/images/notif.png";
import privacy from "@/public/images/privacy.png";
import logout from "@/public/images/logout.png";
import Image from "next/image";
import Link from "next/link";

export default function Account() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogoutClick = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-full md:w-[390px] ">
        <Image className="w-full" src={bgAccount} alt="My Image" height={147} />
        <div
          className="px-4 "
          style={{ position: "relative", top: "-140px", zIndex: "1" }}
        >
          <div className="flex flex-col mb-7 justify-center items-center">
            <h3 className="font-sans text-lg font-bold text-white">Akun </h3>
          </div>
          <div class=" flex p-5 items-center justify-around w-full text-center bg-white border border-gray-200 rounded-2xl shadow-lg ">
            <Image src={Profile} alt="My Image" width={80} height={80} />
            <div className="flex flex-col items-start">
              <h3 className="text-[#475467] font-roboto text-medium font-bold ">
                Albertus Pangaribuan
              </h3>
              <p className="font-title text-xs text-[#344054] ">
                +62822-8058-1234
              </p>
              <p className="font-title text-xs text-[#344054] ">
                advenreey@gmail.com
              </p>
            </div>
            <p className="font-title text-base font-semibold text-[#E52138] ">
              Ubah
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-5 ">
            <div className="flex flex-col gap-5 justify-between  ">
              <div class=" flex items-center justify-between gap-5 w-full p-4 text-center bg-white">
                <Link href="/password/newpassword">
                  <div className="flex justify-center items-center gap-2">
                    <Image src={lock} alt="My Image" width={18} height={18} />
                    <p className="text-lg font-normal text-[#344054] ">
                      Ganti Kata Sandi
                    </p>
                  </div>
                </Link>
                <div className="flex justify-center items-center gap-2">
                  <Image src={arrow} alt="My Image" width={12} height={12} />
                </div>
              </div>
              <div class=" flex items-center justify-between gap-5 w-full ps-3 pe-4 py-4 text-center bg-white">
                <div className="flex justify-center items-center gap-2">
                  <Image src={star} alt="My Image" width={24} height={24} />
                  <p className="text-lg font-normal text-[#344054] ">
                    Beri Nilai Aplikasi
                  </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Image src={arrow} alt="My Image" width={12} height={12} />
                </div>
              </div>
              <div class=" flex items-center justify-between gap-5 w-full p-4 text-center bg-white">
                <div className="flex justify-center items-center gap-2">
                  <Image src={notif} alt="My Image" width={18} height={18} />
                  <p className="text-lg font-normal text-[#344054] ">
                    Notifikasi
                  </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Image src={arrow} alt="My Image" width={12} height={12} />
                </div>
              </div>
              <div class=" flex items-center justify-between gap-5 w-full p-4 text-center bg-white">
                <div className="flex justify-center items-center gap-2">
                  <Image src={help} alt="My Image" width={18} height={18} />
                  <p className="text-lg font-normal text-[#344054] ">Bantuan</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Image src={arrow} alt="My Image" width={12} height={12} />
                </div>
              </div>
              <div class=" flex items-center justify-between gap-5 w-full p-4 text-center bg-white">
                <div className="flex justify-center items-center gap-2">
                  <Image src={privacy} alt="My Image" width={18} height={18} />
                  <p className="text-lg font-normal text-[#344054] ">
                    Kebijakan Privasi
                  </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Image src={arrow} alt="My Image" width={12} height={12} />
                </div>
              </div>
              <div
                onClick={handleLogoutClick}
                class=" flex items-center justify-between gap-5 w-full p-4 text-center bg-white"
              >
                <div className="flex justify-center items-center gap-2">
                  <Image src={logout} alt="My Image" width={20} height={20} />
                  <p className="text-lg font-normal text-[#344054] ">Keluar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomNavbar />
        {/* Modal */}
        {isModalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-5">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
              <h2 className="text-lg font-bold mb-2">
                Keluar dari Abang Express Kurir.
              </h2>
              <p className="text-gray-700 mb-6">
                Apakah Anda yakin ingin keluar?
              </p>
              <div className="flex justify-end">
                <button
                  className=" text-gray-700 px-4 py-2 mr-2"
                  onClick={closeModal}
                >
                  Batalkan
                </button>
                <Link href="/login">
                  <button className="text-red-500 px-4 py-2 rounded">
                    Keluar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
