import Image from "next/image";

export default function MovieDetails({ details, getMovieById }) {
  const {
    releaseDate,
    averageVote,
    voteCount,
    popularity,
    streamHd,
    download,
  } = details;
  return (
    <section>
      <div className="w-full object-cover max-h-[300px] lg:max-h-[500px]">
        <Image
          src={getMovieById?.backdrop_path}
          alt={getMovieById?.title}
          width={900}
          height={200}
        />
      </div>
      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image
            src={getMovieById.poster_path}
            alt={getMovieById?.title}
            width={300}
            height={400}
          />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            {getMovieById?.title}
          </h2>
          <p className="my-2 text-slate-400 italic">{getMovieById?.overview}</p>
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
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {streamHd}
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {download}
          </button>
        </div>
      </div>
    </section>
  );
}
