import MovieCard from "../molecules/MovieCard";

export default function MovieList({ movies }: { movies: any[] }) {
  return (
    <div className="flex flex-wrap gap-5 text-black font-mono font-bold justify-center">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
