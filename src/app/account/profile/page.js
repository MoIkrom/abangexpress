import HeaderComponent from "@/component/Header";
import Link from "next/link";
import Image from "next/image";
import foto from "@/public/images/foto.png";
import DynamicForm from "@/component/FloatingLabel";

export default function Profile() {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-full md:w-[390px] flex flex-col justify-center items-center ">
        <div className="w-full mb-4">
          <HeaderComponent title="Ubah Profile" />
        </div>

        <div class=" flex p-5 w-full text-center ">
          <Image src={foto} alt="My Image" width={80} height={80} />
          <div className="flex flex-col  justify-center items-center ms-3 text-start">
            <p className="font-title text-xs text-[#344054] ">
              Semua orang akan
              <br />
              dapat melihat foto Kamu..
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <DynamicForm label="Nama" type="text" />
          <DynamicForm label="Email" type="email" />
          <DynamicForm label="Nomor Handphone" type="text" />
          <DynamicForm label="Tanggal Lahir" type="date" />
        </div>
      </div>
    </div>
  );
}
