import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { createClient } from "@/lib/supabase/server";
import { Star, MapPin, Plus, Home } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function MyListingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: listings, error } = await supabase
    .from("listings")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 px-4 py-12 md:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Listings</h1>
            <p className="mt-2 text-zinc-500">
              Manage the spaces you&apos;ve shared with the Konakona community.
            </p>
          </div>
          <Link 
            href="/host" 
            className="flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-white transition-transform active:scale-95 dark:bg-white dark:text-black"
          >
            <Plus className="h-5 w-5" />
            Host a new space
          </Link>
        </div>

        {listings && listings.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listings.map((listing) => (
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
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center rounded-3xl border-2 border-dashed border-zinc-100 dark:border-zinc-800">
            <div className="rounded-full bg-zinc-100 p-6 dark:bg-zinc-900">
              <Home className="h-10 w-10 text-zinc-400" />
            </div>
            <h2 className="mt-6 text-xl font-bold">You haven&apos;t hosted any spaces yet</h2>
            <p className="mt-2 max-w-sm text-zinc-500">
              Start earning by sharing your extra room, garage, or warehouse with people who need it.
            </p>
            <Link 
              href="/host" 
              className="mt-8 rounded-full bg-black px-10 py-4 font-bold text-white transition-transform active:scale-95 dark:bg-white dark:text-black"
            >
              List your space
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
