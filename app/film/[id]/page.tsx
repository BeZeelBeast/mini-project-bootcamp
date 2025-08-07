
async function getMovie(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=d29d167ccdb16f9243559be300fb92d3`
  );
  const film = await res.json();
  return film;
}

export default async function Page({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id);
  return (
    <div className="p-4 flex flex-col justify-center items-center bg-white text-black min-h-screen">
      <h1 className="text-2xl font-bold">{movie.title || "Sayang sekali filmnya gaada😞"}</h1>
      <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-64 mt-4"
        />
      <p className="mt-2"><strong>Release Date:</strong> {movie.release_date || "N/A"}</p>
      <p className="mt-2"><strong>Overview:</strong> {movie.overview || "No overview available"}</p>
    </div>
  );
}
