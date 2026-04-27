"use client";

import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LISTINGS } from "@/data/mock-data";
import { Star, MapPin, SlidersHorizontal, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import { Suspense, useState, useMemo, useRef, useEffect } from "react";
import { normalizeLocationSearch, formatLocationDisplay } from "@/lib/location";
import { cn } from "@/lib/utils";

const SORT_OPTIONS = [
  { label: "Sort by Ratings", value: "rating" },
  { label: "Price: Low to High", value: "price_low" },
  { label: "Price: High to Low", value: "price_high" },
];

function SearchResults() {
  const searchParams = useSearchParams();
  const typeQuery = searchParams.get("type")?.toLowerCase() || "";
  const locationRawQuery = searchParams.get("location") || "";
  
  const [sortBy, setSortBy] = useState("rating");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredListings = useMemo(() => {
    const locationTerms = normalizeLocationSearch(locationRawQuery);

    let results = LISTINGS.filter((listing) => {
      const matchesType = !typeQuery || listing.type.toLowerCase().includes(typeQuery);
      
      const matchesLocation = !locationRawQuery || locationTerms.some(term => {
        const regex = new RegExp(`\\b${term}\\b`, 'i');
        return regex.test(listing.location);
      });
      
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
  }, [typeQuery, locationRawQuery, sortBy]);

  const displayType = typeQuery ? typeQuery.charAt(0).toUpperCase() + typeQuery.slice(1) : "";
  const displayLocation = formatLocationDisplay(locationRawQuery);
  const currentSortLabel = SORT_OPTIONS.find(opt => opt.value === sortBy)?.label;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 px-4 py-8 md:px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-zinc-100 pb-8 dark:border-zinc-800 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold">
              {filteredListings.length} {filteredListings.length === 1 ? 'space' : 'spaces'} found
              {(displayType || displayLocation) && " for "}
              <span className="text-zinc-500">
                {displayType} {displayType && displayLocation && "in"} {displayLocation}
              </span>
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              Browse top-rated spaces and find the perfect fit for your needs.
            </p>
          </div>

          <div className="flex items-center">
            {/* Custom Rounded Dropdown */}
            <div className="relative" ref={sortRef}>
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className={cn(
                  "flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900",
                  isSortOpen && "border-zinc-900 ring-1 ring-zinc-900 dark:border-zinc-100 dark:ring-zinc-100"
                )}
              >
                <SlidersHorizontal className="h-4 w-4 text-zinc-500" />
                <span>{currentSortLabel}</span>
                <ChevronDown className={cn("h-4 w-4 text-zinc-400 transition-transform", isSortOpen && "rotate-180")} />
              </button>

              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-1 shadow-xl dark:border-zinc-800 dark:bg-zinc-950 z-50">
                  {SORT_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setIsSortOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors",
                        sortBy === option.value 
                          ? "bg-zinc-100 font-semibold dark:bg-zinc-900" 
                          : "hover:bg-zinc-50 dark:hover:bg-zinc-900"
                      )}
                    >
                      {option.label}
                      {sortBy === option.value && <Check className="h-4 w-4" />}
                    </button>
                  ))}
                </div>
              )}
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
