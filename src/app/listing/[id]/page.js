import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ImageGallery from "@/components/ui/ImageGallery";
import { LISTINGS } from "@/data/mock-data";
import { Star, MapPin, ArrowLeft, Shield, Check, Info } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ListingPage({ params }) {
  const { id } = await params;
  const listing = LISTINGS.find((item) => item.id === id);

  if (!listing) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto flex-1 px-4 py-8 md:px-6">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to spaces
        </Link>

        {/* Hero Image Section (Gallery) */}
        <div className="mb-10">
          <ImageGallery images={listing.images || [listing.image]} title={listing.title} />
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                  {listing.type}
                </span>
                <div className="flex items-center gap-1 text-sm font-medium">
                  <Star className="h-4 w-4 fill-current text-yellow-500" />
                  <span>{listing.rating}</span>
                  <span className="text-zinc-400">({listing.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">{listing.title}</h1>
              <div className="flex items-center gap-1 text-lg text-zinc-500">
                <MapPin className="h-5 w-5" />
                <span>{listing.location}</span>
              </div>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-800" />

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">About this space</h2>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                {listing.description}
              </p>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                This {listing.type.toLowerCase()} in {listing.location} offers a perfect blend of convenience 
                and functionality. Whether you&apos;re looking for temporary storage or a more permanent solution, 
                this space is maintained to high standards and ready for use.
              </p>
            </div>

            {/* Amenities (Mock) */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">What this space offers</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Secure Access",
                  "Well Lit",
                  "Ground Floor",
                  "CCTV Coverage",
                  "Flexible Hours",
                  "Clean & Dry"
                ].map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-zinc-700 dark:text-zinc-300">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-800" />

            {/* Trust Section */}
            <div className="rounded-3xl bg-zinc-50 p-8 dark:bg-zinc-900/50">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Konakona Protection</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    Your booking is covered by our comprehensive protection plan. We ensure secure 
                    payments and verified hosts for every space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-bold">${listing.price}</span>
                  <span className="text-zinc-500"> / month</span>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold">
                  <Star className="h-4 w-4 fill-current text-yellow-500" />
                  <span>{listing.rating}</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <button className="flex w-full items-center justify-between rounded-xl border border-zinc-200 p-4 text-left transition-hover hover:border-black dark:border-zinc-800 dark:hover:border-white">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Start Date</div>
                    <div className="text-sm font-semibold">Select date</div>
                  </div>
                  <Info className="h-4 w-4 text-zinc-400" />
                </button>

                <button className="w-full rounded-2xl bg-black py-4 text-center font-bold text-white transition-transform active:scale-95 dark:bg-white dark:text-black">
                  Reserve this space
                </button>

                <p className="text-center text-xs text-zinc-400">
                  You won&apos;t be charged yet
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>${listing.price} x 1 month</span>
                  <span>${listing.price}</span>
                </div>
                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>Service fee</span>
                  <span>$25</span>
                </div>
                <hr className="border-zinc-100 dark:border-zinc-800" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${listing.price + 25}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
