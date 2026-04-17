import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import { LISTINGS } from "@/data/mock-data";
import { Star, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredListings = LISTINGS.slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />

        {/* Value Prop Section */}
        <section className="bg-zinc-50 py-20 dark:bg-zinc-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Find Any Space</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  From commercial warehouses to simple spare rooms, we list spaces of every size and type.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Flexible Terms</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Rent for a day, a month, or a year. Set your own schedule and purpose.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Secure Transactions</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Our platform handles all payments and contracts to ensure both parties are protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Featured Spaces</h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">Top-rated spaces for your next big project.</p>
              </div>
              <Link href="/search" className="text-sm font-semibold hover:underline">
                View all spaces →
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {featuredListings.map((listing) => (
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
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{listing.title}</h3>
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
