import { getDictionary } from '@/app/[lang]/dictionaries';
import Modal from '@/components/Modal';
import MovieDetails from '@/components/MovieDetails';
import { getMovies } from '@/lib/helper';

export default async function page({ params: { id, lang } }) {
    
  const allMovies = await getMovies();
  const { details } = await getDictionary(lang);
  const getMovieById = allMovies?.movies.find((movie) => movie.id === +id);
  return (
    <Modal>
        <MovieDetails getMovieById={getMovieById} details={details} />;
    </Modal>
  )
}
