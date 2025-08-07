import Link from "next/link";

export default function Header() {
  return (
    <nav className="p-4 bg-cyan-500 flex flex-col sm:flex-row sm:justify-between items-center gap-3">
      <div className="font-mono font-bold text-xl">CariFilm</div>

      <ul className="flex gap-6 font-mono font-bold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/film">Film</Link></li>
        <li><Link href="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  );
}
