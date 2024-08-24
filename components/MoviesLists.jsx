import MovieCard from './MovieCard'

export default function MoviesLists({movies,locale}) {
  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-7'>
     {
        movies?.map(movie=><MovieCard key={movie.id} movie={movie} locale={locale} />)
     }
    </div>
  )
}
