import Link from "next/link";
import Sandi from "../../../public/images/sandi.png";
import Image from "next/image";

export default function Otp() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center mt-5">
        <h3 className="text-black font-sans text-2xl font-bold ">
          Lupa Kata Sandi
        </h3>
      </div>
      <div className="mt-5">
        <Image src={Sandi} alt="My Image" width={80} height={80} />
      </div>
      <div className="flex flex-col  justify-center items-center w-full p-5">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-black font-sans text-lg font-bold ">
            Masukan Kode Verifikasi
          </h3>
          <p className="text-[12px] text-center" style={{ color: "#667085" }}>
            Kode verifikasi telah kami kirim melalui email adv*******@gmail.com
          </p>
          <div className="flex space-x-2 my-5">
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p className="text-[12px] text-center" style={{ color: "#667085" }}>
            mohon tunggu dalam 30 tetik untuk verifikasi ulang
          </p>
        </div>
        <div className="mt-[50px]">
          <Link href="/password/changepassword">
            <button
              type="button"
              className="w-64 h-[48px] rounded-2xl focus:outline-none text-white bg-[#E52138] hover:bg-[#E52138] focus:ring-4 font-mediumtext-sm px-5 py-2.5 me-2 mb-2"
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
