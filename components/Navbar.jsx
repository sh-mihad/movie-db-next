import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="container flex items-center justify-between space-x-10 py-6">
      <Logo />
      <ul className="flex items-center space-x-5">
        <li>
          <Link
            className='"bg-primary/20 rounded-lg backdrop-blur-[2px] p-1 inline-block"'
            href={"#"}
          >
            <Image src="/ring.svg" alt="ring.svg" height={24} width={24} />
          </Link>
        </li>
        <li>
          <Link
            className='"bg-primary/20 rounded-lg backdrop-blur-[2px] p-1 inline-block"'
            href={"#"}
          >
            <Image src="/sun.svg" alt="sun.svg" height={24} width={24} />
          </Link>
        </li>
        <li>
          <Link
            className='"bg-primary/20 rounded-lg backdrop-blur-[2px] p-1 inline-block"'
            href={"#"}
          >
            <Image src="/shopping-cart.svg" alt="shopping-cart.svg" height={24} width={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
