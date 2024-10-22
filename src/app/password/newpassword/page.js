import Link from "next/link";

export default function NewPassword() {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-full md:w-[390px] flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center mt-3 mb-10">
          <h3 className="text-black font-sans text-2xl font-bold ">
            Ubah Kata Sandi
          </h3>
        </div>

        <div className="flex w-full px-5">
          <form className="flex flex-col w-full">
            <div className="mb-5">
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Kata sandi lama"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Kata sandi baru"
                required
              />
            </div>
            <div className="mb-5 ">
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Ketik ulang kata sandi baru"
                required
              />
            </div>

            <div class="max-w-sm  p-4 bg-gray-200 border border-gray-200 rounded-lg shadow ">
              <p class="font-normal text-xs text-gray-500">
                Setelah kata sandi diubah, silakan masuk kembali dengan kata
                sandi baru di semua per perangakat
              </p>
            </div>

            <div className="mt-5">
              <Link href="/password/success">
                <button
                  type="button"
                  className="w-full h-[50px] rounded-2xl focus:outline-none text-white bg-[#E52138] hover:bg-[#E52138] focus:ring-4 font-mediumtext-sm px-5 py-2.5 me-2 mb-2"
                >
                  Ubah Kata Sandi
                </button>
              </Link>
            </div>
            <div>
              <Link href="/password/changepassword">
                <button
                  type="button"
                  className="w-full h-[50px] rounded-2xl focus:outline-none text-[#E52138] font-semibold bg-[#ffffff] font-mediumtext-sm"
                >
                  Lupa Kata Sandi ?
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
