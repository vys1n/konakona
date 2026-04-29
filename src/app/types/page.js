import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SPACE_CATEGORIES } from "@/data/mock-data";
import Link from "next/link";
import { 
  Warehouse, 
  Briefcase, 
  Camera, 
  Home, 
  Car, 
  Building, 
  Wheat, 
  Shield, 
  ArrowRight 
} from "lucide-react";

const ICON_MAP = {
  Warehouse: Warehouse,
  Briefcase: Briefcase,
  Camera: Camera,
  Home: Home,
  Car: Car,
  Building: Building,
  Wheat: Wheat,
  Shield: Shield,
};

export default function TypesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-zinc-50 py-20 dark:bg-zinc-900/50">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Storage Types</h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Explore our wide variety of storage solutions. From industrial warehouses to 
              creative studios, we have the perfect space for your needs.
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="space-y-24">
            {SPACE_CATEGORIES.map((category) => (
              <section key={category.title}>
                <h2 className="mb-12 text-2xl font-bold tracking-tight md:text-3xl">
                  {category.title}
                </h2>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {category.types.map((type) => {
                    const IconComponent = ICON_MAP[type.icon];
                    return (
                      <div 
                        key={type.id} 
                        className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
                      >
                        <div className="relative h-48 w-full overflow-hidden">
                          <img 
                            src={type.image} 
                            alt={type.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                            {IconComponent && <IconComponent className="h-5 w-5" />}
                            <span className="font-bold">{type.name}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-1 flex-col p-6">
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {type.description}
                          </p>
                          
                          <div className="mt-4 flex flex-wrap gap-2">
                            {type.tags.map(tag => (
                              <span 
                                key={tag} 
                                className="rounded-full bg-zinc-100 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="mt-auto pt-8">
                            <Link 
                              href={`/search?type=${encodeURIComponent(type.name)}`}
                              className="inline-flex items-center gap-2 text-sm font-bold text-black dark:text-white group-hover:underline"
                            >
                              Browse {type.name} Spaces
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-black py-20 text-white dark:bg-white dark:text-black">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold">Have a unique space?</h2>
            <p className="mt-4 text-zinc-400 dark:text-zinc-600">
              List your barn, basement, or garage on Konakona and start earning today.
            </p>
            <Link 
              href="/become-a-host"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-transform hover:scale-105 dark:bg-black dark:text-white"
            >
              Become a Host
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
