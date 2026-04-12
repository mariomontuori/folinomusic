'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation - Minimal Apple Style */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold tracking-tight">FOLINO</h1>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#music" className="text-sm text-gray-400 hover:text-white transition-colors">
                Music
              </a>
              <a href="#tour" className="text-sm text-gray-400 hover:text-white transition-colors">
                Tour
              </a>
              <a href="#videos" className="text-sm text-gray-400 hover:text-white transition-colors">
                Videos
              </a>
              <a
                href="https://open.spotify.com/artist/7DM9leryznWCGSDZiSZGIY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-1.5 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
              >
                Listen
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Clean and Focused */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />

        <div className={`relative text-center max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Artist Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden">
            <Image
              src="https://i.scdn.co/image/ab6761610000517458a1aebc4571b9dfd63775c8"
              alt="FOLINO"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            FOLINO
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-2">
            Electronic Music Producer
          </p>

          <p className="text-sm text-gray-500 mb-8">
            Creator of EMMA AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://open.spotify.com/artist/7DM9leryznWCGSDZiSZGIY"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Play on Spotify
            </a>
            <a
              href="#music"
              className="px-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              View Releases
            </a>
          </div>
        </div>
      </section>

      {/* Latest Release - Focus Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-500 mb-2">LATEST RELEASE</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Peace of Mind</h2>
              <p className="text-lg text-gray-400 mb-6">
                The newest single showcasing evolved sound design and production techniques
                powered by EMMA AI technology.
              </p>
              <div className="space-y-4">
                <iframe
                  src="https://open.spotify.com/embed/track/1r2xbK7wjcGaqRYufCvowm?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://i.scdn.co/image/ab67616d0000b27376a0f0de82bb82bc0fb92b02"
                alt="Peace of Mind"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Music Section - Grid Layout */}
      <section id="music" className="py-24 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Music</h2>

          {/* Spotify Player */}
          <div className="mb-16">
            <iframe
              src="https://open.spotify.com/embed/artist/7DM9leryznWCGSDZiSZGIY?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
            />
          </div>

          {/* Releases Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: 'Peace of Mind', year: '2025', image: 'https://i.scdn.co/image/ab67616d0000b27376a0f0de82bb82bc0fb92b02' },
              { title: 'Girl Next Door (Remix)', year: '2023', image: 'https://i.scdn.co/image/ab67616d0000b273b36cb57cf704ea207f88e951' },
              { title: 'Love of Yesterday', year: '2022', image: 'https://i.scdn.co/image/ab67616d0000b27398fdf95e8bb6c754f7754e0d' },
              { title: 'Memories We Make', year: '2021', image: 'https://i.scdn.co/image/ab67616d0000b273f1d0637f295b4d439c903d48' },
              { title: 'Chasing Dreams', year: '2020', image: 'https://i.scdn.co/image/ab67616d0000b273c96e7fb88e4ad40e9c5e6aaf' },
            ].map((release, index) => (
              <a
                key={index}
                href="https://open.spotify.com/artist/7DM9leryznWCGSDZiSZGIY"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src={release.image}
                    alt={release.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-gray-300 transition-colors">{release.title}</h3>
                <p className="text-xs text-gray-500">{release.year}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Section - Simple List */}
      <section id="tour" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tour</h2>

          <div className="space-y-px bg-white/10 rounded-lg overflow-hidden">
            {[
              { month: 'MAY 2025', city: 'Miami', venue: 'Space Miami' },
              { month: 'JUN 2025', city: 'Los Angeles', venue: 'Exchange LA' },
              { month: 'JUN 2025', city: 'New York', venue: 'Brooklyn Mirage' },
              { month: 'JUL 2025', city: 'London', venue: 'Printworks' },
              { month: 'JUL 2025', city: 'Berlin', venue: 'Sisyphos' },
              { month: 'AUG 2025', city: 'Amsterdam', venue: 'De School' },
            ].map((show, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-black hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-8">
                  <div className="text-sm text-gray-500 w-20">{show.month}</div>
                  <div>
                    <div className="font-medium">{show.city}</div>
                    <div className="text-sm text-gray-500">{show.venue}</div>
                  </div>
                </div>
                <span className="text-sm text-blue-400">Coming Soon</span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            More dates to be announced
          </p>
        </div>
      </section>

      {/* Videos Section - YouTube Embeds */}
      <section id="videos" className="py-24 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Videos</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { id: 'f8guvDStX5M', title: 'Peace of Mind' },
              { id: 'pCY9GK5hwoE', title: 'Girl Next Door (Remix)' },
              { id: 'HfjRS7K8KGI', title: 'Love of Yesterday' },
              { id: 'w6TLpb4by_g', title: 'Memories We Make' },
            ].map((video, index) => (
              <div key={index} className="space-y-2">
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-sm text-gray-400">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMMA AI Section - Minimal */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">EMMA AI</h2>
          <p className="text-lg text-gray-400 mb-8">
            Revolutionary AI-powered music production platform developed by Folino.
            Now powering creative workflows for over 10,000 artists worldwide.
          </p>
          <a
            href="https://emma.folinomusic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer - Simple */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © 2025 Folino. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://open.spotify.com/artist/7DM9leryznWCGSDZiSZGIY" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                Spotify
              </a>
              <a href="https://instagram.com/folinomusic" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://youtube.com/@folinomusic" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                YouTube
              </a>
              <a href="https://soundcloud.com/folinomusic" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                SoundCloud
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}