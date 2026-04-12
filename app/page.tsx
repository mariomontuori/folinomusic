'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-gray-900">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation - Premium Glass Effect */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 pt-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-12">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                FOLINO
              </h1>
              <div className="hidden md:flex space-x-8">
                <a href="#tour" className="relative text-sm text-gray-300 hover:text-white transition-colors duration-300 group">
                  TOUR
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
                <a href="#music" className="relative text-sm text-gray-300 hover:text-white transition-colors duration-300 group">
                  MUSIC
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
                <a href="#videos" className="relative text-sm text-gray-300 hover:text-white transition-colors duration-300 group">
                  VIDEOS
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
                <a href="#about" className="relative text-sm text-gray-300 hover:text-white transition-colors duration-300 group">
                  ABOUT
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
                <a href="/emma" className="relative text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  EMMA AI ✨
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {[
                { name: 'Spotify', path: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' },
                { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z' },
                { name: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Immersive Experience */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />

          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-4000" />
          </div>

          {/* Particle effect */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-float opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 20}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-20 text-center px-6 max-w-5xl mx-auto transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`mb-6 overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-medium">
              Electronic Music Producer & AI Pioneer
            </p>
          </div>

          <h1 className={`text-7xl md:text-8xl lg:text-9xl font-bold mb-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              FOLINO
            </span>
          </h1>

          <p className={`text-xl md:text-2xl text-gray-300 mb-3 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Creating the future of music
          </p>

          <p className={`text-base text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Developer of EMMA AI • Revolutionizing Music Production
          </p>

          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a
              href="#tour"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 font-semibold text-white">VIEW TOUR DATES</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#music"
              className="group relative px-8 py-4 border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 font-semibold">LISTEN NOW</span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Tour Section - Enhanced Design */}
      <section id="tour" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              TOUR DATES
            </h2>
            <p className="text-gray-400">Join me live around the world</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center space-x-2 mb-12">
            {['all', 'north-america', 'europe', 'asia'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Tour Dates */}
          <div className="space-y-4">
            {[
              { date: 'DEC 15', day: 'SAT', year: '2024', city: 'Los Angeles, CA', venue: 'The Echo', region: 'north-america', status: 'on-sale', soldOut: false },
              { date: 'DEC 22', day: 'SAT', year: '2024', city: 'San Francisco, CA', venue: 'The Independent', region: 'north-america', status: 'on-sale', soldOut: false },
              { date: 'JAN 10', day: 'THU', year: '2025', city: 'New York, NY', venue: 'Brooklyn Steel', region: 'north-america', status: 'on-sale', soldOut: true },
              { date: 'JAN 25', day: 'FRI', year: '2025', city: 'London, UK', venue: 'Fabric', region: 'europe', status: 'coming-soon', soldOut: false },
              { date: 'FEB 08', day: 'SAT', year: '2025', city: 'Berlin, DE', venue: 'Berghain', region: 'europe', status: 'coming-soon', soldOut: false },
              { date: 'FEB 20', day: 'WED', year: '2025', city: 'Amsterdam, NL', venue: 'Paradiso', region: 'europe', status: 'coming-soon', soldOut: false },
              { date: 'MAR 05', day: 'TUE', year: '2025', city: 'Tokyo, JP', venue: 'WOMB', region: 'asia', status: 'coming-soon', soldOut: false },
              { date: 'MAR 12', day: 'TUE', year: '2025', city: 'Seoul, KR', venue: 'Club Octagon', region: 'asia', status: 'coming-soon', soldOut: false },
            ]
            .filter(show => activeTab === 'all' || show.region === activeTab)
            .map((show, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-r from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-6 mb-4 md:mb-0">
                    <div className="text-center min-w-[60px]">
                      <div className="text-3xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        {show.date.split(' ')[0]}
                      </div>
                      <div className="text-sm text-purple-400">{show.date.split(' ')[1]}</div>
                      <div className="text-xs text-gray-500">{show.day}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {show.city}
                      </h3>
                      <p className="text-gray-400">{show.venue}</p>
                      <p className="text-xs text-gray-500 mt-1">{show.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {show.soldOut ? (
                      <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold">
                        SOLD OUT
                      </span>
                    ) : show.status === 'on-sale' ? (
                      <>
                        <span className="text-green-400 text-sm font-semibold animate-pulse">● ON SALE</span>
                        <a
                          href="#"
                          className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105"
                        >
                          GET TICKETS
                        </a>
                      </>
                    ) : (
                      <>
                        <span className="text-yellow-400 text-sm">COMING SOON</span>
                        <button className="px-6 py-2.5 border border-gray-600 rounded-full text-gray-400 cursor-not-allowed">
                          NOTIFY ME
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

      {/* EMMA AI Section - Premium Feature */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-sm font-semibold text-purple-400 mb-4">
              MY INNOVATION
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              EMMA AI STUDIO
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Revolutionary AI-powered music production platform developed by Folino
            </p>
            <p className="text-sm text-gray-500 mt-2">Now powering 10,000+ artists worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '🎹',
                title: 'AI Sound Design',
                description: 'Generate Serum & Sylenth presets with natural language',
                gradient: 'from-purple-600 to-blue-600'
              },
              {
                icon: '🎵',
                title: 'Stem Separation',
                description: 'Extract vocals, drums, bass with 99.9% accuracy',
                gradient: 'from-pink-600 to-purple-600'
              },
              {
                icon: '✨',
                title: 'Smart Composition',
                description: 'AI-powered chord progressions & melody generation',
                gradient: 'from-blue-600 to-purple-600'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:scale-105"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/emma"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105 group"
            >
              <span>TRY EMMA AI FREE</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-sm text-gray-500 mt-4">No credit card required • Free tier available</p>
          </div>
        </div>
      </section>

      {/* Music Section - Premium Grid */}
      <section id="music" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/30 to-black" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              MUSIC
            </h2>
            <p className="text-gray-400">Latest releases and albums</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Midnight Dreams', type: 'Album', year: '2024', featured: true, plays: '5.2M' },
              { title: 'Electric Nights', type: 'Single', year: '2024', plays: '2.1M' },
              { title: 'Dawn', type: 'Single', year: '2024', plays: '1.8M' },
              { title: 'Ethereal', type: 'EP', year: '2023', plays: '3.4M' },
              { title: 'Awakening', type: 'Single', year: '2023', plays: '1.2M' },
              { title: 'Neon Pulse', type: 'Album', year: '2023', plays: '4.7M' },
            ].map((release, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${
                  release.featured ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <div className={`${
                  release.featured ? 'aspect-square md:aspect-video' : 'aspect-square'
                } bg-gradient-to-br from-purple-900/50 via-black to-blue-900/50 relative overflow-hidden`}>

                  {/* Hover Play Button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Album Art Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-10">🎵</div>
                  </div>

                  {/* Release Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <h3 className="text-xl font-semibold mb-1">{release.title}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-300">{release.type} • {release.year}</p>
                      <p className="text-xs text-gray-400">{release.plays} plays</p>
                    </div>
                    {release.featured && (
                      <p className="text-xs text-purple-400 mt-2 font-semibold">✨ Created with EMMA AI</p>
                    )}
                  </div>

                  {/* Featured Badge */}
                  {release.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-semibold">
                      FEATURED
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Streaming Platforms */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['Spotify', 'Apple Music', 'SoundCloud', 'YouTube Music', 'Tidal'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-sm transition-all duration-300 hover:scale-105"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section - YouTube Style */}
      <section id="videos" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              VIDEOS
            </h2>
            <p className="text-gray-400">Music videos and live performances</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Midnight Dreams (Official Video)', views: '2.5M', duration: '4:32', new: true },
              { title: 'Live at Electric Festival 2024', views: '890K', duration: '58:41', live: true },
              { title: 'Studio Session with EMMA AI', views: '450K', duration: '12:18' },
              { title: 'Behind The Scenes - Dawn', views: '320K', duration: '8:45' },
              { title: 'Electric Nights (Visualizer)', views: '1.1M', duration: '3:28' },
              { title: 'EMMA AI Tutorial', views: '780K', duration: '15:22' },
            ].map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl overflow-hidden">
                  {/* Thumbnail placeholder */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs">
                    {video.duration}
                  </div>

                  {/* Badges */}
                  {video.new && (
                    <div className="absolute top-2 left-2 px-2 py-1 bg-red-600 rounded text-xs font-semibold">
                      NEW
                    </div>
                  )}
                  {video.live && (
                    <div className="absolute top-2 left-2 px-2 py-1 bg-red-600 rounded text-xs font-semibold">
                      LIVE
                    </div>
                  )}

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mt-3 group-hover:text-purple-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-400">{video.views} views</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
            >
              <span>View all videos on YouTube</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Story Telling */}
      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ABOUT
            </h2>
            <p className="text-gray-400">The journey of sound and innovation</p>
          </div>

          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-gray-300">
              Electronic music producer and technology innovator,
              <span className="text-white font-semibold"> Folino </span>
              is reshaping the landscape of modern music production.
            </p>

            <p className="text-gray-400">
              With over <span className="text-purple-400 font-semibold">5 million streams</span> worldwide and performances
              at major festivals, Folino combines cutting-edge sound design with revolutionary technology.
            </p>

            <div className="py-8 my-8 border-y border-white/10">
              <p className="text-2xl font-light text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                "I don't just make music, I build the future tools for making it"
              </p>
            </div>

            <p className="text-gray-400">
              The creation of <span className="text-purple-400 font-semibold">EMMA AI</span> represents years of experience
              in music production combined with cutting-edge artificial intelligence, now empowering over
              <span className="text-purple-400 font-semibold"> 10,000 artists</span> globally.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            {[
              { number: '5M+', label: 'Streams' },
              { number: '100+', label: 'Live Shows' },
              { number: '10K+', label: 'EMMA Users', highlight: true },
              { number: '50+', label: 'Releases' },
            ].map((stat, index) => (
              <div key={index}>
                <div className={`text-4xl font-bold mb-2 ${
                  stat.highlight
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
                    : 'text-white'
                }`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/30 to-gray-950" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            GET IN TOUCH
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a
              href="mailto:management@folinomusic.com"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                Management
              </h3>
              <p className="text-gray-400">management@folinomusic.com</p>
            </a>

            <a
              href="mailto:bookings@folinomusic.com"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                Bookings
              </h3>
              <p className="text-gray-400">bookings@folinomusic.com</p>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {['Instagram', 'Twitter', 'Facebook', 'TikTok', 'Discord'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                <span className="text-xs">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                FOLINO
              </h3>
              <p className="text-xs text-gray-500 mt-1">Electronic Music Producer</p>
              <p className="text-xs text-purple-400">Creator of EMMA AI Studio</p>
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Press Kit</a>
              <a href="/emma" className="text-purple-400 hover:text-purple-300 transition-colors">EMMA AI</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-gray-600">
              © 2024 Folino Music. All rights reserved. EMMA AI™ is a registered trademark.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(10px) translateX(-10px); }
          75% { transform: translateY(-10px) translateX(20px); }
        }

        @keyframes scroll-down {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(5px); opacity: 0.5; }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}