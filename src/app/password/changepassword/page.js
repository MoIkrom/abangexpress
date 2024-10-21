import Link from "next/link";

export default function Forgot() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center mt-3">
        <h3 className="text-black font-sans text-2xl font-bold ">
          Lupa Kata Sandi
        </h3>
      </div>
      <div className="flex  justify-start w-full p-5">
        <div className="flex flex-col justify-start">
          <h3 className="text-black font-sans text-lg font-bold ">
            Kata Sandi Baru
          </h3>
          <p className="text-[12px] pe-3" style={{ color: "#667085" }}>
            Buat kata sandi baru yang kuat untuk akun dengan email
            adventreey@gmail.com
          </p>
        </div>
      </div>
      <div className="flex w-full px-5">
        <form className="flex flex-col w-full">
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
            <p class="font-normal text-sm text-gray-500">
              Setelah kata sandi diubah, silakan masuk kembali dengan kata sandi
              baru di semua per perangakat
            </p>
          </div>

          <div className="mt-5">
            <Link href="/password/success">
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
  );
}
