import moviesList from "@/data/movieDB";
import { NextResponse } from "next/server";

export async function GET(_request, { params: { id } }) {
  const getMovieById = moviesList.results.find((movie) => movie.id === +id);
  if (!getMovieById) {
    return NextResponse.json(
      { error: `movie not found by ${id} movie id` },
      { status: 404 }
    );
  }

  return NextResponse.json(getMovieById);
}

export async function PATCH(request, { params: { id } }) {
  const {title} = await request.json();
  const getMovieIndex = moviesList.results.findIndex(movie =>movie.id === +id);
  if (getMovieIndex<0) {
    return NextResponse.json(
      { error: `movie not found by ${id} movie id` },
      { status: 404 }
    );
  }
  moviesList.results[getMovieIndex]["title"] = title
//   moviesList.results[getMovieIndex]["title"] = title;
  return NextResponse.json({
    message:"Title updated successful",
    output :moviesList.results[getMovieIndex]
  });
}

export async function DELETE(_request,{params:{id}}) {
    const movieIndex = moviesList.results.findIndex(movie =>movie.id === +id)
    console.log(movieIndex);
    if(movieIndex<0){
        return NextResponse.json({error:`your movie id ${id} is not exist`},{status:404})
    }
    const filteredMovie = moviesList.results.filter(movie=>movie.id !== id)
    return NextResponse.json({
        message:"delete successfully",
        data : filteredMovie
    })
}
