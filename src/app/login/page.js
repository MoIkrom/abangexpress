import login from "../../public/images/login-bg.webp";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Image src={login} alt="My Image" width={390} height={239} />
      <div className="w-full lg:w-[390px] h-3">
        <div
          className="w-full h-screen p-5  bg-white   rounded-[30px] "
          style={{ position: "relative", top: "-45px" }}
        >
          <div className="flex flex-col justify-center items-center mt-[20px]">
            <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Masuk Ke Akun Mu.
            </h5>
            <div className="w-full mt-5 px-3">
              <form className="">
                <div className="mb-5">
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Email / Nomor Telepon"
                    required
                  />
                </div>
                <div className="mb-5 ">
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Password"
                    required
                  />

                  <Link href="/password/forgot">
                    <p
                      className="text-[12px] text-end mt-2"
                      style={{ color: "#E52138" }}
                    >
                      Lupa Password ?
                    </p>
                  </Link>
                </div>
                <div className="mt-5">
                  <Link href="/homepage">
                    <button
                      type="button"
                      className="w-full h-[50px] rounded-2xl focus:outline-none text-white bg-[#E52138] hover:bg-[#E52138] focus:ring-4 font-mediumtext-sm px-5 py-2.5 me-2 mb-2"
                    >
                      Masuk
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
