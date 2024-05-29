import Image from "next/image";
import Logo from "../../public/assets/512x5112.png";

export default function Header() {
  return (
    <header>
      <Image src={Logo} alt="" width="50" height="50" />
    </header>
  );
}
