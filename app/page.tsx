'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
                { name: 'Spotify', href: 'https://open.spotify.com/artist/7DM9leryznWCGSDZiSZGIY', path: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' },
                { name: 'Instagram', href: 'https://instagram.com/folinomusic', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z' },
                { name: 'Facebook', href: 'https://facebook.com/folinomusic', path: 'M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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

      {/* Hero Section - With Artist Image */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background with Artist Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-10" />

          {/* Artist Image Background */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://i.scdn.co/image/ab6761610000517458a1aebc4571b9dfd63775c8"
              alt="FOLINO"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden z-20">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-4000" />
          </div>

          {/* Particle effect */}
          <div className="absolute inset-0 z-20">
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
        <div className={`relative z-30 text-center px-6 max-w-5xl mx-auto transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Artist Profile Image */}
          <div className={`mb-8 flex justify-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              <Image
                src="https://i.scdn.co/image/ab6761610000517458a1aebc4571b9dfd63775c8"
                alt="FOLINO"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className={`mb-4 overflow-hidden transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-medium">
              Masked DJ • Electronic Music Producer • AI Pioneer
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
            Creating exciting electronic dance music
          </p>

          <p className={`text-base text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            LED Mask Performer • Developer of EMMA AI
          </p>

          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a
              href="https://open.spotify.com/artist/7DM9leryznWCGSDZiSZGIY"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 font-semibold text-white">LISTEN ON SPOTIFY</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#music"
              className="group relative px-8 py-4 border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 font-semibold">VIEW RELEASES</span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-30">
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
              { date: 'DEC 31', day: 'TUE', year: '2024', city: 'Miami, FL', venue: 'Space Miami', region: 'north-america', status: 'on-sale', soldOut: false },
              { date: 'JAN 18', day: 'SAT', year: '2025', city: 'Los Angeles, CA', venue: 'Exchange LA', region: 'north-america', status: 'on-sale', soldOut: false },
              { date: 'FEB 14', day: 'FRI', year: '2025', city: 'New York, NY', venue: 'Brooklyn Mirage', region: 'north-america', status: 'on-sale', soldOut: true },
              { date: 'MAR 08', day: 'SAT', year: '2025', city: 'London, UK', venue: 'Printworks', region: 'europe', status: 'coming-soon', soldOut: false },
              { date: 'MAR 22', day: 'SAT', year: '2025', city: 'Berlin, DE', venue: 'Sisyphos', region: 'europe', status: 'coming-soon', soldOut: false },
              { date: 'APR 05', day: 'SAT', year: '2025', city: 'Amsterdam, NL', venue: 'De School', region: 'europe', status: 'coming-soon', soldOut: false },
              { date: 'MAY 10', day: 'SAT', year: '2025', city: 'Tokyo, JP', venue: 'Contact Tokyo', region: 'asia', status: 'coming-soon', soldOut: false },
              { date: 'MAY 24', day: 'SAT', year: '2025', city: 'Seoul, KR', venue: 'Cakeshop', region: 'asia', status: 'coming-soon', soldOut: false },
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

      {/* Music Section - With Real Album Covers */}
      <section id="music" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/30 to-black" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              MUSIC
            </h2>
            <p className="text-gray-400">Latest releases on all platforms</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Peace of Mind',
                type: 'Single',
                year: '2025',
                featured: true,
                cover: 'https://i.scdn.co/image/ab67616d00004851a3876ef72e7c2ec79efe4b61',
                spotifyUrl: 'https://open.spotify.com/track/peacemind'
              },
              {
                title: 'Girl Next Door (Remix)',
                type: 'Remix',
                year: '2023',
                cover: 'https://i.scdn.co/image/ab67616d000048519ddd9676847e4c58c3f90f4e',
                spotifyUrl: 'https://open.spotify.com/track/girlnextdoor'
              },
              {
                title: 'Love of Yesterday',
                type: 'Single',
                year: '2022',
                cover: 'https://i.scdn.co/image/ab67616d000048513572e257a9da094a3fac8142',
                spotifyUrl: 'https://open.spotify.com/track/loveofyesterday'
              },
              {
                title: 'Memories We Make',
                type: 'Single',
                year: '2021',
                cover: 'https://i.scdn.co/image/ab67616d00004851e6f0e4a1fe41085f63033085',
                spotifyUrl: 'https://open.spotify.com/track/memorieswemake'
              },
              {
                title: 'Chasing Dreams',
                type: 'Single',
                year: '2020',
                cover: 'https://i.scdn.co/image/ab67616d000048513f76bb0c46f184b1ed0263ab',
                spotifyUrl: 'https://open.spotify.com/track/chasingdreams'
              },
              {
                title: 'EMMA AI Demo Track',
                type: 'AI Generated',
                year: '2024',
                cover: null,
                isEmma: true
              },
            ].map((release, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${
                  release.featured ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <a
                  href={release.spotifyUrl || '#'}
                  target={release.spotifyUrl ? '_blank' : undefined}
                  rel={release.spotifyUrl ? 'noopener noreferrer' : undefined}
                  className="block w-full h-full"
                >
                  <div className={`${
                    release.featured ? 'aspect-square md:aspect-video' : 'aspect-square'
                  } relative overflow-hidden bg-gradient-to-br from-purple-900/50 via-black to-blue-900/50`}>

                    {/* Album Cover */}
                    {release.cover ? (
                      <Image
                        src={release.cover}
                        alt={release.title}
                        fill
                        className="object-cover"
                        sizes={release.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                        <div className="text-6xl opacity-30">🎵</div>
                      </div>
                    )}

                    {/* Hover Play Button */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                        <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Release Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                      <h3 className="text-xl font-semibold mb-1">{release.title}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-300">{release.type} • {release.year}</p>
                        {release.isEmma && (
                          <p className="text-xs text-purple-400 font-semibold">✨ EMMA AI</p>
                        )}
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {release.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full text-xs font-semibold">
                        LATEST RELEASE
                      </div>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Streaming Platforms */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a
              href="https://open.spotify.com/artist/7DM9leryznWCGSDZiSZGIY"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 hover:border-green-600/50 rounded-full text-sm transition-all duration-300 hover:scale-105"
            >
              Spotify
            </a>
            <a
              href="https://music.apple.com/artist/folino"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-sm transition-all duration-300 hover:scale-105"
            >
              Apple Music
            </a>
            <a
              href="https://soundcloud.com/folinomusic"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-orange-600/20 hover:bg-orange-600/30 border border-orange-600/30 hover:border-orange-600/50 rounded-full text-sm transition-all duration-300 hover:scale-105"
            >
              SoundCloud
            </a>
            <a
              href="https://youtube.com/@folinomusic"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-600/30 hover:border-red-600/50 rounded-full text-sm transition-all duration-300 hover:scale-105"
            >
              YouTube
            </a>
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

      {/* Videos Section */}
      <section id="videos" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              VIDEOS
            </h2>
            <p className="text-gray-400">Live performances and music videos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Peace of Mind (Official Video)', views: 'Coming Soon', duration: '3:42', new: true },
              { title: 'LED Mask Performance Live', views: '1.2K', duration: '58:41', live: true },
              { title: 'Studio Session with EMMA AI', views: '450', duration: '12:18' },
              { title: 'Girl Next Door Remix (Visualizer)', views: '890', duration: '4:15' },
              { title: 'Love of Yesterday (Lyric Video)', views: '1.5K', duration: '3:28' },
              { title: 'EMMA AI Tutorial', views: '780', duration: '15:22' },
            ].map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl overflow-hidden">
                  {/* Thumbnail placeholder */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* LED Mask Visual for Live Videos */}
                  {video.live && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🎭</div>
                    </div>
                  )}

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs">
                    {video.duration}
                  </div>

                  {/* Badges */}
                  {video.new && (
                    <div className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded text-xs font-semibold">
                      COMING SOON
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
              href="https://youtube.com/@folinomusic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors group"
            >
              <span>View all videos on YouTube @folinomusic</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ABOUT
            </h2>
            <p className="text-gray-400">The masked DJ revolutionizing electronic music</p>
          </div>

          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-gray-300">
              <span className="text-white font-semibold">FOLINO</span> is a masked DJ and electronic music producer
              who brings cutting-edge technology to the dance floor.
            </p>

            <p className="text-gray-400">
              Performing with an innovative <span className="text-purple-400 font-semibold">LED mask</span> that syncs
              with the music, FOLINO creates immersive visual experiences that complement the exciting electronic dance music.
            </p>

            <div className="py-8 my-8 border-y border-white/10">
              <p className="text-2xl font-light text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                "I don't just make music, I build the future tools for making it"
              </p>
            </div>

            <p className="text-gray-400">
              Beyond the decks, FOLINO is the developer of <span className="text-purple-400 font-semibold">EMMA AI</span>,
              a revolutionary music production platform that democratizes professional music creation for artists worldwide.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            {[
              { number: '25', label: 'Followers' },
              { number: '5', label: 'Releases' },
              { number: '10K+', label: 'EMMA Users', highlight: true },
              { number: '∞', label: 'Passion' },
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
                Management & Bookings
              </h3>
              <p className="text-gray-400">management@folinomusic.com</p>
            </a>

            <a
              href="mailto:press@folinomusic.com"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                Press & Media
              </h3>
              <p className="text-gray-400">press@folinomusic.com</p>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {[
              { name: 'Instagram', href: 'https://instagram.com/folinomusic' },
              { name: 'Twitter', href: 'https://twitter.com/folinomusic' },
              { name: 'Facebook', href: 'https://facebook.com/folinomusic' },
              { name: 'TikTok', href: 'https://tiktok.com/@folinomusic' },
              { name: 'Discord', href: '#' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                <span className="text-xs">{social.name[0]}</span>
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
              <p className="text-xs text-gray-500 mt-1">Masked DJ • Electronic Music Producer</p>
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