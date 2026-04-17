"use client";

import { useState } from "react";
import { Search, MapPin, Warehouse } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (type || location) {
      router.push(`/search?type=${encodeURIComponent(type)}&location=${encodeURIComponent(location)}`);
    }
  };

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 pt-20 pb-12 text-center">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-from)_0%,_transparent_50%)] from-zinc-100 dark:from-zinc-900" />
      
      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
        Rent the perfect space, <br />
        <span className="text-zinc-500">for any purpose.</span>
      </h1>
      
      <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        From warehouses and barns to spare rooms and garages. 
        Konakona connects you with the space you need, exactly where you need it.
      </p>

      <div className="mt-12 w-full max-w-4xl">
        <form 
          onSubmit={handleSearch}
          className="flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-950 sm:flex-row sm:items-center sm:rounded-full"
        >
          <div className="flex flex-1 items-center px-4 py-2">
            <Warehouse className="h-5 w-5 text-zinc-400" />
            <input
              type="text"
              placeholder="What type of space? (e.g. Warehouse, Barn)"
              className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          
          <div className="hidden h-8 w-[1px] bg-zinc-200 dark:bg-zinc-800 sm:block" />
          
          <div className="flex flex-1 items-center px-4 py-2">
            <MapPin className="h-5 w-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Where? (e.g. Austin, TX)"
              className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-black px-8 text-sm font-medium text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 sm:rounded-full"
          >
            <Search className="h-4 w-4" />
            <span>Search</span>
          </button>
        </form>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {["Warehouse", "Garage", "Studio", "Barn", "Office"].map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className="rounded-full border border-zinc-200 px-4 py-1.5 text-xs font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            {t}
          </button>
        ))}
      </div>
    </section>
  );
}
