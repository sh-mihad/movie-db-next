import { getDictionary } from "@/app/[lang]/dictionaries";
import Modal from "@/components/Modal";
import { getMovies } from "@/lib/helper";
import Image from "next/image";

export default async function page({ params: { id, lang } }) {
  const allMovies = await getMovies();
  const {
    details: {
      releaseDate,
      averageVote,
      voteCount,
      popularity,
      streamHd,
      download,
    },
  } = await getDictionary(lang);
  const getMovieById = allMovies?.movies.find((movie) => movie.id === +id);
  return (
    <Modal>
      <div className="flex gap-4 justify-between items-center bg-black/90 p-8">
        <div style={{ flexGrow: 1 }}>
          <Image
            src={getMovieById?.backdrop_path}
            alt={getMovieById.title}
            width={1000}
            height={500}
          />
        </div>
        <div style={{ flexGrow: 2 }} className="text-start">
          <h2 className="font-bold text-slate-300 text-2xl">
            {getMovieById?.title}
          </h2>
          <p className="my-2 text-slate-400 italic">{getMovieById?.overview}</p>
          <div className="flex justify-between items-baseline">
            <ul className="text-slate-300 space-y-2 my-8">
              <li>
                {releaseDate}: {getMovieById?.release_date}
              </li>
              <li>
                {averageVote} : {getMovieById.vote_average}
              </li>
              <li>
                {voteCount} : {getMovieById.vote_count}
              </li>
              <li>
                {popularity} : {getMovieById.popularity}
              </li>
            </ul>
            <div className="flex items-center justify-between">
              <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                {streamHd}
              </button>
              <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                {download}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
