"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, Mail, Lock, User, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const supabase = createClient();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else {
      setIsSuccess(true);
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
        <div className="w-full max-w-md space-y-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-950 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/20">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold">Check your email</h2>
          <p className="text-zinc-500">
            We&apos;ve sent a confirmation link to <span className="font-bold text-black dark:text-white">{email}</span>. 
            Please check your inbox to activate your account.
          </p>
          <Link
            href="/login"
            className="mt-8 block w-full rounded-xl bg-black py-3 font-bold text-white transition-transform active:scale-95 dark:bg-white dark:text-black"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <div className="w-full max-w-md space-y-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold tracking-tighter italic">
            konakona
          </Link>
          <h2 className="mt-6 text-2xl font-bold">Create an account</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Join the community and start hosting your space.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-zinc-200 bg-transparent py-3 pl-10 pr-4 outline-none focus:border-black dark:border-zinc-800 dark:focus:border-white"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                <input
                  type="password"
                  required
                  className="w-full rounded-xl border border-zinc-200 bg-transparent py-3 pl-10 pr-4 outline-none focus:border-black dark:border-zinc-800 dark:focus:border-white"
                  placeholder="Minimum 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 p-4 text-sm text-red-500 dark:bg-red-900/20">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-bold text-white transition-transform active:scale-95 disabled:opacity-50 dark:bg-white dark:text-black"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Sign Up"}
            {!isLoading && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>

        <div className="text-center text-sm">
          <span className="text-zinc-500">Already have an account? </span>
          <Link href="/login" className="font-bold hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
