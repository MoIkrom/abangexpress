import Link from "next/link";

export default function Forgot() {
  return (
    
    <div className="flex flex-col justify-center items-center">
      <div className=" w-full md:w-[390px] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mt-5">
          <h3 className="text-black font-sans text-2xl font-bold ">
            Lupa Kata Sandi
          </h3>
        </div>

        <div className="flex  justify-start w-full mt-4 p-5">
          <div className="flex flex-col justify-start">
            <h3 className="text-black font-sans text-lg font-bold ">
              Atur ulang kata sandi
            </h3>
            <p className="text-[12px] pe-3" style={{ color: "#667085" }}>
              Masukan email atau nomor HP yang terdaftar. Kami akan kode
              verikasi untuk atur ulang kata sandi.
            </p>
            <div className="w-full mt-8">
              <form className="">
                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Email / Nomor Telepon"
                    required
                  />
                </div>
                <div className="mt-5">
                  <Link href="/password/otp">
                    <button
                      type="button"
                      className="w-full h-[50px] rounded-2xl focus:outline-none text-white bg-[#E52138] hover:bg-[#E52138] focus:ring-4 font-mediumtext-sm px-5 py-2.5 me-2 mb-2"
                    >
                      Lanjutkan
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
