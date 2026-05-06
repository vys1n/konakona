"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  MapPin, 
  Warehouse, 
  Briefcase, 
  Camera, 
  Car, 
  Building, 
  Wheat, 
  Shield, 
  Check,
  Upload,
  ArrowRight,
  Sparkles,
  Loader2
} from "lucide-react";
import { SPACE_TYPES } from "@/data/mock-data";

const STEPS = ["Basics", "Details", "Photos", "Review"];

const TYPE_ICONS = {
  Warehouse: Warehouse,
  Office: Briefcase,
  Studio: Camera,
  Room: Home,
  Garage: Car,
  Flat: Building,
  Barn: Wheat,
  Shelter: Shield,
};

export default function HostPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPublished, setIsPublished] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    title: "",
    description: "",
    price: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const isStepValid = () => {
    if (currentStep === 0) return formData.type && formData.location;
    if (currentStep === 1) return formData.title && formData.description && formData.price;
    return true;
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    
    const { data, error } = await supabase
      .from('listings')
      .insert([
        {
          title: formData.title,
          type: formData.type,
          location: formData.location,
          price: parseFloat(formData.price),
          description: formData.description,
          // Use default image for now
          rating: 5.0,
          reviews: 0
        }
      ]);

    if (!error) {
      setIsPublished(true);
    } else {
      console.error('Error publishing listing:', error);
      alert('Failed to publish listing. Please try again.');
    }
    
    setIsPublishing(false);
  };

  if (isPublished) {
    return (
      <div className="flex min-h-screen flex-col bg-white dark:bg-black">
        <header className="flex h-20 items-center px-4 md:px-12 border-b border-zinc-100 dark:border-zinc-800">
          <Link href="/" className="text-2xl font-bold tracking-tighter italic">
            konakona
          </Link>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center animate-in fade-in zoom-in duration-500">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
            <Sparkles className="h-10 w-10" />
          </div>
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight">Congratulations!</h1>
          <p className="mt-4 max-w-md text-lg text-zinc-500">
            Your space &quot;{formData.title}&quot; is now live on Konakona. 
            Hosts like you make our community possible.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link 
              href="/" 
              className="rounded-full bg-black px-10 py-4 font-bold text-white transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-black"
            >
              Go to Home
            </Link>
            <Link 
              href="/search" 
              className="rounded-full border border-zinc-200 px-10 py-4 font-bold transition-transform hover:scale-105 active:scale-95 dark:border-zinc-800"
            >
              View Listings
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tight">Tell us about your space</h1>
              <p className="text-zinc-500">What kind of space are you listing and where is it?</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {SPACE_TYPES.map((type) => {
                const Icon = TYPE_ICONS[type] || Home;
                const isSelected = formData.type === type;
                return (
                  <button
                    key={type}
                    onClick={() => updateFormData("type", type)}
                    className={`flex flex-col items-center gap-3 rounded-2xl border p-6 transition-all ${
                      isSelected 
                        ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black" 
                        : "border-zinc-200 hover:border-black dark:border-zinc-800 dark:hover:border-white"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm font-semibold">{type}</span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="City, State (e.g. Austin, TX)"
                  className="w-full rounded-2xl border border-zinc-200 bg-transparent py-4 pl-12 pr-4 outline-none focus:border-black dark:border-zinc-800 dark:focus:border-white"
                  value={formData.location}
                  onChange={(e) => updateFormData("location", e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tight">Share some details</h1>
              <p className="text-zinc-500">Help potential guests understand what makes your space great.</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">Listing Title</label>
                <input
                  type="text"
                  placeholder="e.g. Spacious Downtown Garage"
                  className="w-full rounded-2xl border border-zinc-200 bg-transparent p-4 outline-none focus:border-black dark:border-zinc-800 dark:focus:border-white"
                  value={formData.title}
                  onChange={(e) => updateFormData("title", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">Description</label>
                <textarea
                  placeholder="Describe your space, its access, and any rules..."
                  rows={5}
                  className="w-full rounded-2xl border border-zinc-200 bg-transparent p-4 outline-none focus:border-black dark:border-zinc-800 dark:focus:border-white resize-none"
                  value={formData.description}
                  onChange={(e) => updateFormData("description", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">Monthly Price ($)</label>
                <input
                  type="number"
                  placeholder="100"
                  className="w-full rounded-2xl border border-zinc-200 bg-transparent p-4 outline-none focus:border-black dark:border-zinc-800 dark:focus:border-white"
                  value={formData.price}
                  onChange={(e) => updateFormData("price", e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tight">Add some photos</h1>
              <p className="text-zinc-500">Upload at least one clear photo of your space.</p>
            </div>

            <div className="flex aspect-video w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-200 p-12 text-center dark:border-zinc-800">
              <div className="rounded-full bg-zinc-100 p-4 dark:bg-zinc-900">
                <Upload className="h-8 w-8 text-zinc-400" />
              </div>
              <h3 className="mt-4 font-bold">Drag and drop photos here</h3>
              <p className="mt-2 text-sm text-zinc-500">PNG, JPG or WEBP up to 10MB each</p>
              <button className="mt-8 rounded-full bg-black px-8 py-3 text-sm font-bold text-white dark:bg-white dark:text-black">
                Select from device
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tight">Check your listing</h1>
              <p className="text-zinc-500">Here is what guests will see before they book.</p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
              <div className="aspect-[21/9] bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Photo Placeholder</p>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                    {formData.type || "Space Type"}
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-bold">{formData.title || "Untitled Space"}</h2>
                <div className="mt-2 flex items-center gap-1 text-zinc-500">
                  <MapPin className="h-4 w-4" />
                  <span>{formData.location || "Location not set"}</span>
                </div>
                <p className="mt-6 text-zinc-600 dark:text-zinc-400 line-clamp-3">
                  {formData.description || "No description provided."}
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-8 dark:border-zinc-800">
                  <div className="text-2xl font-bold">
                    ${formData.price || "0"}<span className="text-sm font-normal text-zinc-500"> / month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900/50">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <Check className="h-5 w-5" />
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                By publishing, you agree to our Terms of Service and Host Guarantee. 
                Your space will be visible to all users immediately.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      {/* Host Header */}
      <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-zinc-100 bg-white/80 px-4 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80 md:px-12">
        <Link href="/" className="text-2xl font-bold tracking-tighter italic">
          konakona
        </Link>
        <Link href="/" className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-bold transition-hover hover:border-black dark:border-zinc-800 dark:hover:border-white">
          Save and exit
        </Link>
      </header>

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-900">
        <div 
          className="h-full bg-black transition-all duration-500 ease-in-out dark:bg-white"
          style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
        />
      </div>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-4 py-12">
        {renderStep()}
      </main>

      {/* Sticky Footer */}
      <footer className="sticky bottom-0 border-t border-zinc-100 bg-white/80 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-hover hover:bg-zinc-100 dark:hover:bg-zinc-900 ${
              currentStep === 0 ? "invisible" : ""
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
            Back
          </button>
          
          <button
            onClick={currentStep === STEPS.length - 1 ? handlePublish : nextStep}
            disabled={!isStepValid() || isPublishing}
            className="flex items-center gap-2 rounded-full bg-black px-10 py-3 font-bold text-white transition-transform active:scale-95 disabled:opacity-30 dark:bg-white dark:text-black min-w-[140px] justify-center"
          >
            {isPublishing ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                {currentStep === STEPS.length - 1 ? "Publish Space" : "Next"}
                {currentStep < STEPS.length - 1 && <ChevronRight className="h-5 w-5" />}
              </>
            )}
          </button>
        </div>
      </footer>
    </div>
  );
}
