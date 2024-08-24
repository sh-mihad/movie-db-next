import { getMovies } from "@/lib/helper";
import { getDictionary } from "./dictionaries";

export default async function Home({params:{lang}}) {
  const locale = await getDictionary(lang)
  const moviesList = await getMovies()
  return (
   <div>
    {locale.home.trending}
    {
      moviesList.movies.map(movie=><li key={movie.id}>hello</li>)
    }
   </div>
  );
}
