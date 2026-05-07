"use client";

import Link from "next/link";
import { Search, UserCircle, Menu, LogOut, Loader2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setIsLoading(false);
    }
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsMenuOpen(false);
    router.push("/");
    router.refresh();
  };

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
          
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 rounded-full border border-zinc-200 p-1.5 hover:shadow-md transition-shadow dark:border-zinc-800"
            >
              <Menu className="h-4 w-4 ml-1 text-zinc-500" />
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-800">
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : user ? (
                  <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-300">
                    {user.email.charAt(0).toUpperCase()}
                  </span>
                ) : (
                  <UserCircle className="h-7 w-7" />
                )}
              </div>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-1 shadow-xl dark:border-zinc-800 dark:bg-zinc-950 z-50 animate-in fade-in zoom-in-95 duration-200">
                {user ? (
                  <>
                    <div className="px-3 py-2 text-xs font-semibold text-zinc-500 border-b border-zinc-100 dark:border-zinc-800 mb-1">
                      {user.email}
                    </div>
                    <Link
                      href="/my-listings"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    >
                      My Listings
                    </Link>
                    <Link
                      href="/host"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    >
                      Host your space
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <LogOut className="h-4 w-4" />
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full rounded-xl px-3 py-2 text-left text-sm font-semibold transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
