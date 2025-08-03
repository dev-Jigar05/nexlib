"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Loader2 } from "lucide-react"; // Icon for loading state

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    // Additional validation can be added here (e.g., password strength)

    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Sign up successful!', { email, password });
      // Redirect to login or dashboard on success
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
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
            Create an Account
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Join nexLib to start managing your library today.
          </p>
        </div>

        {/* Sign-Up Form */}
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
            <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
              required
              className="mt-1 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-50 dark:placeholder:text-slate-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          {/* Confirm Password Input */}
           <div>
            <label htmlFor="confirm-password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              autoComplete="new-password"
              required
              className="mt-1 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-50 dark:placeholder:text-slate-500"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Link to Sign In */}
        <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:underline dark:text-blue-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;