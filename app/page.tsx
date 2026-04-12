'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation - Minimalist */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-[980px] px-5">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[18px] font-semibold tracking-wide">FOLINO</h1>
            </div>
            <div className="flex items-center gap-8 text-[13px] tracking-wide">
              <a href="#music" className="text-white/70 hover:text-white transition-colors">
                MUSIC
              </a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors">
                ABOUT
              </a>
              <a href="#shows" className="text-white/70 hover:text-white transition-colors">
                SHOWS
              </a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        {/* Content */}
        <div className={`relative z-10 text-center px-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-[72px] md:text-[96px] font-bold tracking-wider mb-4">
            FOLINO
          </h1>
          <p className="text-[18px] md:text-[21px] text-white/60 mb-8 tracking-wide">
            Electronic Music Producer
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#music"
              className="px-8 py-3 border border-white/30 hover:bg-white hover:text-black transition-all text-[14px] tracking-wide"
            >
              LISTEN NOW
            </a>
            <a
              href="https://open.spotify.com/artist/folino"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-all text-[14px] tracking-wide"
            >
              SPOTIFY
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Latest Release Section */}
      <section id="music" className="py-24 px-5 bg-gray-950">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-[14px] tracking-[0.3em] text-white/60 mb-12 text-center">
            LATEST RELEASE
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Album Cover */}
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[48px] font-bold text-white/20">ALBUM</span>
              </div>
            </div>

            {/* Album Info */}
            <div>
              <h3 className="text-[32px] font-semibold mb-2">Midnight Dreams</h3>
              <p className="text-white/60 mb-6">Released November 2024</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-[14px]">1. Intro</span>
                  <span className="text-[12px] text-white/40">3:24</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-[14px]">2. Midnight Dreams</span>
                  <span className="text-[12px] text-white/40">4:12</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-[14px]">3. Electric Nights</span>
                  <span className="text-[12px] text-white/40">5:03</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-[14px]">4. Dawn</span>
                  <span className="text-[12px] text-white/40">3:47</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">
                  APPLE MUSIC
                </a>
                <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">
                  SPOTIFY
                </a>
                <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">
                  SOUNDCLOUD
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-5 bg-black">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[14px] tracking-[0.3em] text-white/60 mb-12">
            ABOUT
          </h2>

          <p className="text-[21px] leading-[1.6] text-white/80 mb-8">
            Folino is an electronic music producer creating immersive soundscapes
            that blend ambient textures with driving rhythms.
          </p>

          <p className="text-[17px] leading-[1.6] text-white/60">
            Drawing inspiration from the intersection of technology and emotion,
            each track is crafted to transport listeners through sonic journeys
            that explore the boundaries of electronic music.
          </p>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="py-24 px-5 bg-gray-950">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-[14px] tracking-[0.3em] text-white/60 mb-12 text-center">
            UPCOMING SHOWS
          </h2>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-b border-white/10">
              <div>
                <h3 className="text-[21px] font-semibold mb-1">Los Angeles, CA</h3>
                <p className="text-[14px] text-white/60">The Echo</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-8">
                <span className="text-[14px] text-white/60">DEC 15, 2024</span>
                <a href="#" className="text-[13px] border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-all">
                  TICKETS
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-b border-white/10">
              <div>
                <h3 className="text-[21px] font-semibold mb-1">San Francisco, CA</h3>
                <p className="text-[14px] text-white/60">The Independent</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-8">
                <span className="text-[14px] text-white/60">DEC 22, 2024</span>
                <a href="#" className="text-[13px] border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-all">
                  TICKETS
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-b border-white/10">
              <div>
                <h3 className="text-[21px] font-semibold mb-1">New York, NY</h3>
                <p className="text-[14px] text-white/60">Brooklyn Steel</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-8">
                <span className="text-[14px] text-white/60">JAN 10, 2025</span>
                <a href="#" className="text-[13px] border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-all">
                  TICKETS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-5 bg-black">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[14px] tracking-[0.3em] text-white/60 mb-12">
            CONTACT
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-[13px] text-white/40 mb-2">MANAGEMENT</p>
              <a href="mailto:management@folinomusic.com" className="text-[17px] hover:text-white/80 transition-colors">
                management@folinomusic.com
              </a>
            </div>

            <div>
              <p className="text-[13px] text-white/40 mb-2">BOOKINGS</p>
              <a href="mailto:bookings@folinomusic.com" className="text-[17px] hover:text-white/80 transition-colors">
                bookings@folinomusic.com
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-5 border-t border-white/10">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-[12px] text-white/40">
            © 2024 Folino Music. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}