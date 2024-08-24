import MoviesLists from "@/components/MoviesLists";
import { getMovies } from "@/lib/helper";
import { getDictionary } from "./dictionaries";

export default async function Home({params:{lang}}) {
  const locale = await getDictionary(lang)
  const moviesList = await getMovies()
  return (
   <div className="content">
    <MoviesLists movies={moviesList?.movies} locale={locale}/>
   </div>
  );
}
