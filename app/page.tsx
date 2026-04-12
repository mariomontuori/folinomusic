'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation - Martin Garrix Style */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold">FOLINO</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#tour" className="text-sm hover:text-gray-300 transition">TOUR</a>
                <a href="#music" className="text-sm hover:text-gray-300 transition">MUSIC</a>
                <a href="#videos" className="text-sm hover:text-gray-300 transition">VIDEOS</a>
                <a href="#about" className="text-sm hover:text-gray-300 transition">ABOUT</a>
                <a href="/emma" className="text-sm text-purple-400 hover:text-purple-300 transition">EMMA AI</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-70 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-70 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-70 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Full-Screen Image */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />

        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-50" />
        </div>

        <div className={`relative z-20 text-center px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            FOLINO
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-gray-300">
            Electronic Music Producer
          </p>
          <p className="text-sm text-purple-400 mb-8">
            Creator of EMMA AI Technology
          </p>
          <div className="flex justify-center gap-4">
            <a href="#tour" className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition">
              VIEW TOUR DATES
            </a>
            <a href="#music" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition">
              LISTEN NOW
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Tour Dates Section - Martin Garrix Style */}
      <section id="tour" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">TOUR DATES</h2>

          {/* Region Tabs */}
          <div className="flex justify-center space-x-8 mb-12">
            {['all', 'north-america', 'europe', 'asia'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm uppercase tracking-wider pb-2 border-b-2 transition ${
                  activeTab === tab
                    ? 'border-white text-white'
                    : 'border-transparent text-gray-500 hover:text-white'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Tour List */}
          <div className="space-y-4">
            {[
              { date: 'DEC 15', day: 'SAT', city: 'Los Angeles, CA', venue: 'The Echo', region: 'north-america', status: 'on-sale' },
              { date: 'DEC 22', day: 'SAT', city: 'San Francisco, CA', venue: 'The Independent', region: 'north-america', status: 'on-sale' },
              { date: 'JAN 10', day: 'THU', city: 'New York, NY', venue: 'Brooklyn Steel', region: 'north-america', status: 'coming-soon' },
              { date: 'JAN 25', day: 'FRI', city: 'London, UK', venue: 'Fabric', region: 'europe', status: 'coming-soon' },
              { date: 'FEB 08', day: 'SAT', city: 'Berlin, DE', venue: 'Berghain', region: 'europe', status: 'coming-soon' },
              { date: 'FEB 20', day: 'WED', city: 'Amsterdam, NL', venue: 'Paradiso', region: 'europe', status: 'coming-soon' },
              { date: 'MAR 05', day: 'TUE', city: 'Tokyo, JP', venue: 'WOMB', region: 'asia', status: 'coming-soon' },
              { date: 'MAR 12', day: 'TUE', city: 'Seoul, KR', venue: 'Club Octagon', region: 'asia', status: 'coming-soon' },
            ]
            .filter(show => activeTab === 'all' || show.region === activeTab)
            .map((show, index) => (
              <div key={index} className="bg-black/50 border border-white/10 p-6 hover:border-white/30 transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-6 mb-4 md:mb-0">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{show.date.split(' ')[0]}</div>
                      <div className="text-sm text-gray-400">{show.date.split(' ')[1]}</div>
                      <div className="text-xs text-gray-500">{show.day}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{show.city}</h3>
                      <p className="text-gray-400">{show.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {show.status === 'on-sale' ? (
                      <>
                        <span className="text-green-400 text-sm">ON SALE</span>
                        <a href="#" className="px-6 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition">
                          GET TICKETS
                        </a>
                      </>
                    ) : (
                      <>
                        <span className="text-yellow-400 text-sm">COMING SOON</span>
                        <button className="px-6 py-2 border border-gray-600 text-gray-400 cursor-not-allowed">
                          TICKETS
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMMA AI Section - Prominent Feature */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">EMMA AI STUDIO</h2>
            <p className="text-xl text-gray-300">Revolutionary Music Production Technology</p>
            <p className="text-sm text-purple-400 mt-2">Developed by Folino • Now Available Worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/50 border border-purple-500/30 p-6 text-center hover:border-purple-400 transition">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Sound Design</h3>
              <p className="text-gray-400 text-sm">Generate Serum & Sylenth presets instantly</p>
            </div>

            <div className="bg-black/50 border border-purple-500/30 p-6 text-center hover:border-purple-400 transition">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stem Separation</h3>
              <p className="text-gray-400 text-sm">Extract vocals, drums, bass with AI precision</p>
            </div>

            <div className="bg-black/50 border border-purple-500/30 p-6 text-center hover:border-purple-400 transition">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Composition</h3>
              <p className="text-gray-400 text-sm">AI-powered chord progressions & melodies</p>
            </div>
          </div>

          <div className="text-center">
            <a href="/emma" className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
              TRY EMMA AI FREE
            </a>
            <p className="text-sm text-gray-500 mt-4">Join 10,000+ producers using EMMA AI</p>
          </div>
        </div>
      </section>

      {/* Music Section - Grid Layout */}
      <section id="music" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">MUSIC</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Midnight Dreams', type: 'Album', year: '2024', featured: true },
              { title: 'Electric Nights', type: 'Single', year: '2024' },
              { title: 'Dawn', type: 'Single', year: '2024' },
              { title: 'Ethereal', type: 'EP', year: '2023' },
              { title: 'Awakening', type: 'Single', year: '2023' },
              { title: 'Neon Pulse', type: 'Album', year: '2023' },
            ].map((release, index) => (
              <div key={index} className={`group relative overflow-hidden ${release.featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <div className={`${release.featured ? 'aspect-video' : 'aspect-square'} bg-gradient-to-br from-purple-900/50 to-blue-900/50 relative`}>
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Release Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-xl font-semibold mb-1">{release.title}</h3>
                    <p className="text-sm text-gray-300">{release.type} • {release.year}</p>
                    {release.featured && (
                      <p className="text-xs text-purple-400 mt-2">Created with EMMA AI</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Streaming Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="text-sm hover:text-gray-300 transition">SPOTIFY</a>
            <a href="#" className="text-sm hover:text-gray-300 transition">APPLE MUSIC</a>
            <a href="#" className="text-sm hover:text-gray-300 transition">SOUNDCLOUD</a>
            <a href="#" className="text-sm hover:text-gray-300 transition">YOUTUBE MUSIC</a>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">VIDEOS</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Midnight Dreams (Official Video)', views: '2.5M views' },
              { title: 'Live at Electric Festival 2024', views: '890K views' },
              { title: 'Studio Session with EMMA AI', views: '450K views' },
              { title: 'Behind The Scenes - Dawn', views: '320K views' },
            ].map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mt-4">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.views}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">ABOUT FOLINO</h2>
          <p className="text-xl text-gray-300 mb-6">
            Electronic music producer and technology innovator pushing the boundaries of sound.
          </p>
          <p className="text-gray-400 mb-8">
            Folino is not just creating cutting-edge electronic music but also pioneering the future of music production
            with EMMA AI - a revolutionary platform that democratizes professional music creation. With millions of streams
            worldwide and performances at major festivals, Folino continues to shape the electronic music landscape both
            as an artist and a technology developer.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 py-12 border-t border-b border-white/10">
            <div>
              <div className="text-3xl font-bold">5M+</div>
              <div className="text-sm text-gray-400">Streams</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm text-gray-400">Shows</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">10K+</div>
              <div className="text-sm text-gray-400">EMMA AI Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">FOLINO</h3>
              <p className="text-sm text-gray-400">Electronic Music Producer</p>
              <p className="text-xs text-purple-400">Creator of EMMA AI Studio</p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Contact</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Press</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Privacy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Terms</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-gray-500">
              © 2024 Folino Music. All rights reserved. | EMMA AI is a trademark of Folino Productions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}