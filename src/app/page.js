import Image from "next/image";
import logo from "../public/images/logo-abg-express.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Link href="/dashboard">
          <Image src={logo} alt="My Image" width={100} height={132} />
        </Link>
      </div>
    </div>
  );
}
