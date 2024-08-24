import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import Link from "next/link";

export default async function Aside({ lang }) {
  const {
    home: { trending, newReleases, comingSoon, favorites, watchLater },
  } = await getDictionary(lang);
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
            <span>{trending}</span>
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
            <span>{newReleases}</span>
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
            <span>{comingSoon}</span>
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
            <span>{favorites}</span>
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
            <span>{watchLater}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
