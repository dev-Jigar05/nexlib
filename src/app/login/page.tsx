"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react"; // Icon for loading state

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Login successful!", { email, password });
      // Redirect to dashboard on success
    } catch (err: any) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 dark:bg-slate-900">
      <div className="w-full max-w-sm">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Sign in to nexLib
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Welcome back! Please enter your details to continue.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              className="mt-1 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-50 dark:placeholder:text-slate-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-50 dark:placeholder:text-slate-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Link to Sign Up */}
        <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          Don't have an account?{' '}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:underline dark:text-blue-500"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;