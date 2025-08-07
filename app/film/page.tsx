import { getTrendingMovies, getPopularMovies } from "@/app/lib/fetchmovies";
import MovieList from "@/components/organisms/MovieList";

export default async function Film(){
    const [trending, popular] = await Promise.all([
      getTrendingMovies(),
      getPopularMovies(),
    ]);
    
    const allMovies = [...trending.results, ...popular.results];
    
    return (
        <div className="min-h-screen w-full bg-white text-black"> <MovieList movies={allMovies} /> </div>
    )
}