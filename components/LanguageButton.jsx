"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageButton({ lang }) {
  const router = useRouter();
  let pathname = usePathname();
  const [activeLang, setActiveLang] = useState(lang);
  const handleLangChange = (lang) => {
    const nextPathName = pathname.split("/");
    nextPathName[1] = lang;
    router.replace(nextPathName.join("/"));
    setActiveLang(lang);
  };

  console.log(pathname);
  return (
    <div className="bg-green-500">
      <button
        onClick={() => handleLangChange("bn")}
        className={`${activeLang === "bn" && "bg-white"}`}
      >
        Bangla
      </button>
      <button
        onClick={() => handleLangChange("en")}
        className={`${activeLang === "en" && "bg-white"} `}
      >
        English
      </button>
    </div>
  );
}
