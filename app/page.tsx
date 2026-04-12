'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation - Apple Style */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="mx-auto max-w-[980px] px-5">
          <div className="flex h-11 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[21px] font-semibold tracking-tight">Folino Music</h1>
            </div>
            <div className="flex items-center gap-7 text-[12px]">
              <Link href="/features" className="text-gray-600 hover:text-black transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-black transition-colors">
                Pricing
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-black transition-colors">
                Support
              </Link>
              <div className="w-px h-4 bg-gray-300" />
              <Link href="/login" className="text-gray-600 hover:text-black transition-colors">
                Sign In
              </Link>
              <Link href="/signup" className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-900 transition-colors">
                Try Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Apple Style */}
      <section className="pt-24 pb-16 px-5">
        <div className="mx-auto max-w-[980px]">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className="text-[17px] text-gray-500 font-normal">Music Production Suite</span>
            </div>

            <h1 className="text-[56px] leading-[1.07] font-semibold tracking-[-0.015em] mb-6">
              Create professional music.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                In seconds.
              </span>
            </h1>

            <p className="text-[21px] leading-[1.38] text-gray-600 max-w-[720px] mx-auto mb-10 font-normal">
              AI-powered tools for sound design, stem extraction, and chord progressions.
              Professional music production made remarkably simple.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-7 py-3 rounded-full text-[17px] hover:bg-blue-700 transition-colors"
              >
                Get started
              </Link>
              <Link
                href="/demo"
                className="text-blue-600 text-[17px] hover:underline flex items-center gap-1"
              >
                Try a demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards - Apple Style Grid */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="mx-auto max-w-[980px]">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-semibold tracking-[-0.015em] mb-4">
              Four amazing tools.
            </h2>
            <p className="text-[21px] text-gray-600">
              Everything you need to produce professional music.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Sound Design Card */}
            <div className="bg-white rounded-[18px] p-10 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-[24px] font-semibold mb-3">Sound Design</h3>
              <p className="text-[17px] text-gray-600 leading-[1.47]">
                Generate Serum and Sylenth presets instantly.
                Professional sounds at your fingertips.
              </p>
            </div>

            {/* Stems Card */}
            <div className="bg-white rounded-[18px] p-10 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </div>
              <h3 className="text-[24px] font-semibold mb-3">Stem Extraction</h3>
              <p className="text-[17px] text-gray-600 leading-[1.47]">
                Isolate vocals, drums, bass, and more.
                Perfect separation powered by AI.
              </p>
            </div>

            {/* Chords Card */}
            <div className="bg-white rounded-[18px] p-10 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-[24px] font-semibold mb-3">Smart Chords</h3>
              <p className="text-[17px] text-gray-600 leading-[1.47]">
                Generate professional chord progressions.
                Any key, any style, instantly.
              </p>
            </div>

            {/* Coming Soon Card */}
            <div className="bg-gray-100 rounded-[18px] p-10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-300 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-[24px] font-semibold mb-3 text-gray-700">More Coming Soon</h3>
              <p className="text-[17px] text-gray-500 leading-[1.47]">
                New features in development.
                Stay tuned for updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Apple Style */}
      <section className="py-20 px-5">
        <div className="mx-auto max-w-[980px]">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-semibold tracking-[-0.015em] mb-4">
              Choose your plan.
            </h2>
            <p className="text-[21px] text-gray-600">
              Start free. Upgrade when you need more.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Starter */}
            <div className="text-center">
              <h3 className="text-[21px] font-semibold mb-2">Starter</h3>
              <div className="text-[48px] font-semibold mb-2">$0</div>
              <div className="text-[14px] text-gray-600 mb-6">per month</div>
              <div className="space-y-3 mb-8 text-[14px] text-gray-600">
                <div>Limited usage</div>
                <div>Basic features</div>
                <div>Community support</div>
              </div>
              <Link
                href="/signup"
                className="block w-full py-2 border border-gray-300 rounded-full text-[17px] hover:border-gray-400 transition-colors"
              >
                Get started
              </Link>
            </div>

            {/* Professional */}
            <div className="text-center">
              <div className="inline-block px-3 py-1 mb-4 text-[12px] font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-[21px] font-semibold mb-2">Professional</h3>
              <div className="text-[48px] font-semibold mb-2">$29</div>
              <div className="text-[14px] text-gray-600 mb-6">per month</div>
              <div className="space-y-3 mb-8 text-[14px] text-gray-600">
                <div>High usage limits</div>
                <div>All features</div>
                <div>Priority support</div>
              </div>
              <Link
                href="/signup"
                className="block w-full py-2 bg-black text-white rounded-full text-[17px] hover:bg-gray-900 transition-colors"
              >
                Start free trial
              </Link>
            </div>

            {/* Studio */}
            <div className="text-center">
              <h3 className="text-[21px] font-semibold mb-2">Studio</h3>
              <div className="text-[48px] font-semibold mb-2">$99</div>
              <div className="text-[14px] text-gray-600 mb-6">per month</div>
              <div className="space-y-3 mb-8 text-[14px] text-gray-600">
                <div>Unlimited usage</div>
                <div>Team features</div>
                <div>Dedicated support</div>
              </div>
              <Link
                href="/contact"
                className="block w-full py-2 border border-gray-300 rounded-full text-[17px] hover:border-gray-400 transition-colors"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Apple Style */}
      <section className="py-16 px-5 bg-gray-50">
        <div className="mx-auto max-w-[980px]">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-[48px] font-semibold">10K+</div>
              <div className="text-[17px] text-gray-600">Active producers</div>
            </div>
            <div>
              <div className="text-[48px] font-semibold">500K+</div>
              <div className="text-[17px] text-gray-600">Tracks created</div>
            </div>
            <div>
              <div className="text-[48px] font-semibold">4.9</div>
              <div className="text-[17px] text-gray-600">Average rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Style */}
      <section className="py-20 px-5">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[48px] font-semibold tracking-[-0.015em] mb-6">
            Ready to make music?
          </h2>
          <p className="text-[21px] text-gray-600 mb-10">
            Join thousands of producers creating professional tracks with Folino Music.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-7 py-3 rounded-full text-[17px] hover:bg-blue-700 transition-colors"
            >
              Start your free trial
            </Link>
            <Link
              href="/demo"
              className="text-blue-600 text-[17px] hover:underline"
            >
              Watch a demo →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Apple Style */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-[980px] px-5 py-5">
          <div className="flex items-center justify-between text-[12px] text-gray-500">
            <div>
              Copyright © 2024 Folino Music. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-gray-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-700 transition-colors">
                Terms of Use
              </Link>
              <Link href="/legal" className="hover:text-gray-700 transition-colors">
                Legal
              </Link>
              <Link href="/sitemap" className="hover:text-gray-700 transition-colors">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}