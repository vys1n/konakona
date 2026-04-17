"use client";

import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LISTINGS } from "@/data/mock-data";
import { Star, MapPin, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { Suspense, useState, useMemo } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const typeQuery = searchParams.get("type")?.toLowerCase() || "";
  const locationQuery = searchParams.get("location")?.toLowerCase() || "";
  
  const [sortBy, setSortBy] = useState("rating"); // Default sort by rating

  const filteredListings = useMemo(() => {
    let results = LISTINGS.filter((listing) => {
      const matchesType = !typeQuery || listing.type.toLowerCase().includes(typeQuery);
      const matchesLocation = !locationQuery || listing.location.toLowerCase().includes(locationQuery);
      return matchesType && matchesLocation;
    });

    if (sortBy === "rating") {
      results.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price_low") {
      results.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_high") {
      results.sort((a, b) => b.price - a.price);
    }

    return results;
  }, [typeQuery, locationQuery, sortBy]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 px-4 py-8 md:px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-zinc-100 pb-8 dark:border-zinc-800 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold">
              {filteredListings.length} {filteredListings.length === 1 ? 'space' : 'spaces'} found
              {(typeQuery || locationQuery) && " for "}
              <span className="text-zinc-500 capitalize">
                {[typeQuery, locationQuery].filter(Boolean).join(" in ")}
              </span>
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              Browse top-rated spaces and find the perfect fit for your needs.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-800">
              <SlidersHorizontal className="h-4 w-4" />
              <select 
                className="bg-transparent outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="rating">Sort by Ratings</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {filteredListings.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredListings.map((listing) => (
              <Link key={listing.id} href={`/listing/${listing.id}`} className="group block space-y-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black backdrop-blur-sm">
                    {listing.type}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1">{listing.title}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3 w-3 fill-current text-yellow-500" />
                      <span>{listing.rating}</span>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-sm text-zinc-500">
                    <MapPin className="h-3 w-3" />
                    <span>{listing.location}</span>
                  </div>
                  <p className="mt-2 text-sm font-bold">
                    ${listing.price} <span className="font-normal text-zinc-500">/ month</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <div className="rounded-full bg-zinc-100 p-6 dark:bg-zinc-900">
              <MapPin className="h-10 w-10 text-zinc-400" />
            </div>
            <h2 className="mt-4 text-xl font-bold">No spaces found</h2>
            <p className="mt-2 text-zinc-500">Try adjusting your filters or search terms.</p>
            <Link href="/" className="mt-6 font-semibold text-black underline dark:text-white">
              Clear all filters
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
