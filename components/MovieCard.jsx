import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie, locale }) {
    const{title,poster_path} = movie ?? {}
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image src={poster_path} alt={poster_path} height={325} width={270} />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1 text-white">{title}</h3>
        <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div class="flex items-center space-x-1 mb-5">
          <Image src="./star.svg" width={14} height={14} alt="" />
          <Image src="/star.svg" width={14} height={14} alt="" />
          <Image src="/star.svg" width={14} height={14} alt="" />
          <Image src="/star.svg" width={14} height={14} alt="" />
          <Image src="/star.svg" width={14} height={14} alt="" />
        </div>
        <Link href={"#"} className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">
          <Image src="/tag.svg" width={14} height={14} alt="" />
          <span>Details</span>
        </Link>
      </figcaption>
    </figure>
  );
}
