import Link from "next/link";
import { Search, UserCircle, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold tracking-tighter italic">
            konakona
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/types" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
              Storage Types
            </Link>
            <Link href="/search" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
              Find Storage
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/host"
            className="hidden sm:block text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Become a Host
          </Link>          
          <div className="flex items-center gap-2 rounded-full border border-zinc-200 p-1.5 hover:shadow-md transition-shadow dark:border-zinc-800">
            <Menu className="h-4 w-4 ml-1 text-zinc-500" />
            <UserCircle className="h-7 w-7 text-zinc-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
