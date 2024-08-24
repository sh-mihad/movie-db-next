import Image from "next/image";
import Link from "next/link";

export default function Aside() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <Link
            href={"#"}
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
          >
            <Image
              src="/trending.svg"
              alt="trending.svg"
              height={24}
              width={24}
            />
            <span>Trending</span>
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg  text-white"
          >
            <Image
              src="/newRelease.svg"
              alt="newRelease.svg"
              height={24}
              width={24}
            />
            <span>New Releases</span>
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg  text-white"
          >
            <Image
              src="/commingSoon.svg"
              alt="newRelease.svg"
              height={24}
              width={24}
            />
            <span>Coming Soon</span>
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg  text-white"
          >
            <Image
              src="/favourite.svg"
              alt="favourite"
              height={24}
              width={24}
            />
            <span>Favorite</span>
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg  text-white"
          >
            <Image
              src="/watchLater.svg"
              alt="watchLater"
              height={24}
              width={24}
            />
            <span>Watch Later</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
