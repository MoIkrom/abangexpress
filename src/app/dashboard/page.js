import logo from "../../public/images/landing-page.png";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Image src={logo} alt="My Image" width={229} height={338} />
      </div>
      <div className="flex flex-column">
        <h3>Apps Kurir</h3>
        <h5>Siapkan strategi khusus untuk mengatasi keluhan pelanggan.</h5>
      </div>
    </div>
  );
}
