export default function MovieCard({ movie }: { movie: any }) {
  return (
    <div className="w-50 shadow-xl hover:scale-105 transition-all">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}

      />
      <p className="text-center">{movie.title}</p>
    </div>
  );
}
