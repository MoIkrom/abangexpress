import Link from "next/link";
import success from "../../../public/images/success.png";
import Image from "next/image";

export default function Success() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center mt-3">
        <h3 className="text-black font-sans text-2xl font-bold ">
          Lupa Kata Sandi
        </h3>
      </div>
      <div className=" mt-[60px]">
        <Image src={success} alt="My Image" width={285} height={143} />
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <h3 className="text-black font-sans text-2xl font-bold ">
          Kata sandi berhasil diubah
        </h3>
        <p className="px-7 text-sm text-center" style={{ color: "#667085" }}>
          Pakai kata sandi baru untuk masuk lagi ke aplikasi abang express
          kurir, jangan berikan kesiapapun ya!
        </p>
        <div className=" mt-5 w-full">
          <Link
            className="flex justify-center px-7 items-center"
            href="/homepage"
          >
            <button
              type="button"
              className="w-full h-[50px] rounded-2xl focus:outline-none text-white bg-[#E52138] hover:bg-[#E52138] focus:ring-4 font-mediumtext-sm px-5 py-2.5 mb-2"
            >
              Masuk
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
