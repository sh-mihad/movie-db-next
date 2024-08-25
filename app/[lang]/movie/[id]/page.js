import MovieDetails from "@/components/MovieDetails";
import { getMovies } from "@/lib/helper";
import { notFound } from "next/navigation";
import { getDictionary } from "../../dictionaries";

export default async function page({ params: { id, lang } }) {
  const allMovies = await getMovies();
  const { details } = await getDictionary(lang);
  const getMovieById = allMovies?.movies.find((movie) => movie.id === +id);
  if (!getMovieById) {
    notFound();
  }

  return <MovieDetails getMovieById={getMovieById} details={details} />;
}
