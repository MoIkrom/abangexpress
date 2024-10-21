import logo from "../../public/images/landing-page.png";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex flex-col items-center mt-[66px] h-screen">
      <div className="me-[45px]">
        <Image src={logo} alt="My Image" width={229} height={338} />
      </div>
      <div className="flex flex-col w-64 items-center justify-center px-5">
        <p className="font-bold text-lg " style={{ color: "#101828" }}>
          Apps Kurir
        </p>
        <p className="text-center text-xs " style={{ color: "#667085" }}>
          Siapkan strategi khusus untuk mengatasi keluhan pelanggan.
        </p>
      </div>

      <div className="mt-[50px]">
        <Link href="/login">
          <button
            type="button"
            className="w-64 h-[48px] rounded-2xl focus:outline-none text-white bg-[#E52138] hover:bg-[#E52138] focus:ring-4 font-mediumtext-sm px-5 py-2.5 me-2 mb-2"
          >
            Mulai Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
}
