"use client";
import Image from "next/image";
import back from "@/public/images/back.png";
import { useRouter } from "next/navigation";

const HeaderComponent = ({ title }) => {
  const router = useRouter();
  return (
    <div className="flex justify-start ps-2 items-center mt-5">
      <Image
        onClick={() => router.back()}
        src={back}
        alt="Back Icon"
        width={30}
        height={28}
        className="cursor-pointer"
      />
      <div className="w-full flex justify-center items-center">
        <h3 className="text-black font-sans text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default HeaderComponent;
