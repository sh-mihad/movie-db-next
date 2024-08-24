export const getMovies = async () => {
  return import("@/data/moviesList.json").then((module) => module.default);
};
