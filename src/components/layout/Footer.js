import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter italic">
              konakona
            </Link>
            <p className="mt-4 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
              The universal marketplace for renting any space, for any purpose. 
              Find your next warehouse, studio, or garage today.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white">Product</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/search" className="hover:text-black dark:hover:text-white">Find Space</Link></li>
              <li><Link href="/become-a-host" className="hover:text-black dark:hover:text-white">Become a Host</Link></li>
              <li><Link href="/pricing" className="hover:text-black dark:hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/help" className="hover:text-black dark:hover:text-white">Help Center</Link></li>
              <li><Link href="/safety" className="hover:text-black dark:hover:text-white">Safety</Link></li>
              <li><Link href="/blog" className="hover:text-black dark:hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/terms" className="hover:text-black dark:hover:text-white">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-black dark:hover:text-white">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © 2026 Konakona. Indie Student Project.
          </p>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Created by <span className="italic">Kavy Singh Ranawat</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
