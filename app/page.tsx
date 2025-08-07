import { getTrendingMovies, getPopularMovies } from "@/app/lib/fetchmovies";
import Banner from "@/components/organisms/Banner";
import MovieList from "@/components/organisms/MovieList";

export default async function Home() {
  const trending = await getTrendingMovies();
  const popular = await getPopularMovies();

  return (
    <main className="bg-white text-black">
      <Banner />
      <h1 className="p-5 pb-2 pl-2 text-black font-mono font-bold">🔥 Trending Movies</h1>
      <MovieList movies={trending.results} />

      <h1 className="p-5 pb-2 pl-2 text-black font-mono font-bold">⭐ Popular Movies</h1>
      <MovieList movies={popular.results} />
    </main>
  );
}
