'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation - Premium Glass Effect */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[20px] font-light tracking-[0.3em] hover:tracking-[0.4em] transition-all duration-300">
                FOLINO
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a href="#music" className="text-[11px] tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 relative group">
                MUSIC
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-[11px] tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 relative group">
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#shows" className="text-[11px] tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 relative group">
                SHOWS
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/emma" className="text-[11px] tracking-[0.2em] text-purple-400/70 hover:text-purple-400 transition-all duration-300 relative group">
                EMMA AI
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-[11px] tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 relative group">
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="https://open.spotify.com/artist/folino" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a href="https://music.apple.com/artist/folino" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.07 1.632-.23 2.389-.63 1.417-.75 2.344-1.936 2.812-3.46.127-.426.21-.864.264-1.307.08-.668.087-1.337.087-2.007-.002-5.714.002-11.43-.007-17.144zm-6.573 11.203c-.007 2.233-.657 3.265-2.197 3.495-1.024.154-1.931-.257-2.191-1.158-.087-.3-.132-.606-.133-.916 0-1.853.002-3.707-.004-5.56a.389.389 0 00-.11-.283c-.09-.08-.208-.091-.322-.058l-4.142 1.224c-.043.013-.086.026-.128.042-.226.086-.337.232-.337.473 0 2.002-.005 4.004.003 6.007.004.902-.184 1.747-.815 2.37-.777.77-1.867.931-2.922.427-1.084-.52-1.602-1.428-1.449-2.546.18-1.308 1.425-2.21 2.913-2.114.318.02.64.069.952.156.146.04.221-.011.224-.17.01-1.947.008-3.895.011-5.843 0-.18.018-.36.072-.528.11-.342.374-.507.714-.574a269.2 269.2 0 015.407-1.61l.433-.126c.508-.147.569-.09.57.456l.002 8.817z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_50%)]" />
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className={`relative z-10 text-center px-8 transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6 overflow-hidden">
            <p className={`text-[13px] tracking-[0.4em] text-white/40 transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}>
              ELECTRONIC MUSIC PRODUCER
            </p>
          </div>

          <div className="overflow-hidden mb-8">
            <h1 className={`text-[80px] md:text-[120px] lg:text-[160px] font-thin tracking-[0.2em] leading-none transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}>
              FOLINO
            </h1>
          </div>

          <div className="overflow-hidden mb-12">
            <p className={`text-[16px] md:text-[18px] text-white/50 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}>
              Producer & AI Developer
            </p>
            <p className={`text-[14px] text-purple-400/60 mt-3 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              Creator of EMMA AI - Now Available for All Artists
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a href="#music"
               className="group relative px-10 py-4 overflow-hidden">
              <span className="relative z-10 text-[11px] tracking-[0.3em]">LISTEN NOW</span>
              <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center text-[11px] tracking-[0.3em] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LISTEN NOW
              </span>
            </a>

            <a href="https://open.spotify.com/artist/folino" target="_blank" rel="noopener noreferrer"
               className="group relative px-10 py-4 bg-white text-black overflow-hidden">
              <span className="relative z-10 text-[11px] tracking-[0.3em] transition-colors duration-300 group-hover:text-white">
                SPOTIFY
              </span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] text-white/30">SCROLL</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* EMMA AI - Apple Style Clean Section */}
      <section className="py-24 px-5 bg-white text-black">
        <div className="mx-auto max-w-[980px]">
          <div className="text-center mb-16">
            <p className="text-[17px] text-gray-500 mb-6">Introducing</p>
            <h2 className="text-[56px] font-semibold tracking-tight mb-6">
              EMMA AI Studio
            </h2>
            <p className="text-[21px] text-gray-600 max-w-[600px] mx-auto mb-10">
              Revolutionary AI-powered music production platform.
              Developed by Folino. Now available for all artists.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-[21px] font-medium mb-2">Sound Design</h3>
              <p className="text-[14px] text-gray-600">
                AI-generated presets for Serum & Sylenth
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </div>
              <h3 className="text-[21px] font-medium mb-2">Stem Extraction</h3>
              <p className="text-[14px] text-gray-600">
                Isolate vocals, drums, bass instantly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-[21px] font-medium mb-2">Smart Composition</h3>
              <p className="text-[14px] text-gray-600">
                Professional chord progressions & melodies
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/emma"
               className="inline-block bg-black text-white px-8 py-4 rounded-full text-[17px] hover:bg-gray-900 transition-colors">
              Try EMMA AI
            </a>
            <p className="text-[14px] text-gray-500 mt-4">
              Start creating with AI. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Release Section - Premium Layout */}
      <section id="music" className="relative py-32 px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-[11px] tracking-[0.5em] text-white/30 mb-4">LATEST RELEASE</h2>
            <div className="w-20 h-[0.5px] bg-white/20 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Album Cover with hover effect */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-purple-900/30 to-blue-900/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/50" />
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[60px] font-thin text-white/10 tracking-[0.3em]">MIDNIGHT</span>
                </div>
                {/* Vinyl effect on hover */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-48 h-48 rounded-full border-[20px] border-gray-900 bg-black relative">
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-black" />
                    <div className="absolute inset-8 rounded-full bg-red-900" />
                    <div className="absolute inset-[50%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full" />
                  </div>
                </div>
              </div>

              {/* Play button overlay */}
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm bg-black/30">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </button>
            </div>

            {/* Album Info */}
            <div>
              <div className="mb-8">
                <h3 className="text-[48px] font-thin mb-2">Midnight Dreams</h3>
                <p className="text-[14px] text-white/40 tracking-[0.2em]">RELEASED NOVEMBER 2024</p>
                <p className="text-[14px] text-white/40 tracking-[0.2em]">12 TRACKS · 57 MINUTES</p>
                <p className="text-[12px] text-white/30 tracking-[0.2em] mt-2">
                  PRODUCED USING MY OWN <span className="text-purple-400/60">EMMA AI</span> TECHNOLOGY
                </p>
              </div>

              {/* Track list with hover effects */}
              <div className="space-y-1 mb-10">
                {[
                  { num: '01', name: 'Awakening', time: '3:24' },
                  { num: '02', name: 'Midnight Dreams', time: '4:12' },
                  { num: '03', name: 'Electric Nights', time: '5:03' },
                  { num: '04', name: 'Dawn', time: '3:47' },
                  { num: '05', name: 'Ethereal', time: '4:33' },
                ].map((track) => (
                  <div key={track.num} className="group flex items-center justify-between py-3 px-4 hover:bg-white/5 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-6">
                      <span className="text-[11px] text-white/30 group-hover:text-white/50 transition-colors">{track.num}</span>
                      <span className="text-[14px] group-hover:text-white transition-colors">{track.name}</span>
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <span className="text-[11px] text-white/30">{track.time}</span>
                  </div>
                ))}
              </div>

              {/* Streaming links */}
              <div className="flex flex-wrap gap-4">
                {['SPOTIFY', 'APPLE MUSIC', 'YOUTUBE', 'SOUNDCLOUD'].map((platform) => (
                  <a key={platform} href="#"
                     className="text-[10px] tracking-[0.2em] px-6 py-3 border border-white/10 hover:bg-white hover:text-black transition-all duration-300">
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Elegant */}
      <section id="about" className="relative py-32 px-8">
        <div className="absolute inset-0 bg-black" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-20">
            <h2 className="text-[11px] tracking-[0.5em] text-white/30 mb-4">ABOUT</h2>
            <div className="w-20 h-[0.5px] bg-white/20 mx-auto" />
          </div>

          <div className="space-y-8">
            <p className="text-[28px] md:text-[32px] font-thin leading-relaxed text-white/90">
              Electronic Producer & AI Technology Pioneer
            </p>

            <p className="text-[16px] md:text-[18px] leading-loose text-white/50 max-w-3xl mx-auto">
              Beyond creating immersive electronic soundscapes, Folino has developed EMMA AI -
              a revolutionary music production platform that empowers artists worldwide.
              This cutting-edge technology represents years of experience in both music production
              and artificial intelligence development.
            </p>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[16px] text-white/50 mb-2">
                Latest Innovation
              </p>
              <p className="text-[20px] font-light">
                <a href="/emma" className="text-white/70 hover:text-white transition-colors bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 rounded-full inline-block">
                  EMMA AI Studio
                </a>
              </p>
              <p className="text-[12px] text-white/30 mt-2">
                Revolutionary AI music production platform developed by Folino
              </p>
              <a href="/emma" className="mt-4 inline-block text-[11px] tracking-[0.2em] px-6 py-3 border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                GET EMMA AI FOR YOUR STUDIO
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16">
              <div>
                <p className="text-[36px] font-thin text-white/80">5M+</p>
                <p className="text-[10px] tracking-[0.3em] text-white/30">STREAMS</p>
              </div>
              <div>
                <p className="text-[36px] font-thin text-white/80">50+</p>
                <p className="text-[10px] tracking-[0.3em] text-white/30">RELEASES</p>
              </div>
              <div>
                <p className="text-[36px] font-thin text-white/80">100+</p>
                <p className="text-[10px] tracking-[0.3em] text-white/30">SHOWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shows Section - Modern */}
      <section id="shows" className="relative py-32 px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-[11px] tracking-[0.5em] text-white/30 mb-4">UPCOMING SHOWS</h2>
            <div className="w-20 h-[0.5px] bg-white/20 mx-auto" />
          </div>

          <div className="space-y-2">
            {[
              { city: 'Los Angeles', venue: 'The Echo', date: 'DEC 15', year: '2024', status: 'ON SALE' },
              { city: 'San Francisco', venue: 'The Independent', date: 'DEC 22', year: '2024', status: 'ON SALE' },
              { city: 'New York', venue: 'Brooklyn Steel', date: 'JAN 10', year: '2025', status: 'COMING SOON' },
              { city: 'London', venue: 'Fabric', date: 'JAN 25', year: '2025', status: 'COMING SOON' },
              { city: 'Berlin', venue: 'Berghain', date: 'FEB 08', year: '2025', status: 'COMING SOON' },
            ].map((show, index) => (
              <div key={index}
                   className="group relative overflow-hidden border-b border-white/5 hover:bg-white/5 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-8 px-4">
                  <div className="flex items-start lg:items-center gap-8 mb-4 lg:mb-0">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-white/30 mb-1">{show.date}</p>
                      <p className="text-[10px] tracking-[0.3em] text-white/30">{show.year}</p>
                    </div>
                    <div>
                      <h3 className="text-[24px] font-light mb-1 group-hover:translate-x-2 transition-transform duration-300">
                        {show.city}
                      </h3>
                      <p className="text-[12px] text-white/40 tracking-[0.2em]">{show.venue}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] tracking-[0.2em] px-3 py-1 border ${
                      show.status === 'ON SALE'
                        ? 'border-green-500/50 text-green-500'
                        : 'border-white/20 text-white/40'
                    }`}>
                      {show.status}
                    </span>
                    <a href="#" className="text-[10px] tracking-[0.2em] px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                      TICKETS
                    </a>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="absolute left-0 top-0 w-1 h-full bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-block text-[10px] tracking-[0.3em] text-white/40 hover:text-white transition-colors duration-300">
              VIEW ALL DATES →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal */}
      <section id="contact" className="relative py-32 px-8">
        <div className="absolute inset-0 bg-black" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-20">
            <h2 className="text-[11px] tracking-[0.5em] text-white/30 mb-4">CONTACT</h2>
            <div className="w-20 h-[0.5px] bg-white/20 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-white/30 mb-3">MANAGEMENT</p>
              <a href="mailto:management@folinomusic.com"
                 className="text-[18px] font-light hover:text-white/70 transition-colors duration-300">
                management@folinomusic.com
              </a>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.3em] text-white/30 mb-3">BOOKINGS</p>
              <a href="mailto:bookings@folinomusic.com"
                 className="text-[18px] font-light hover:text-white/70 transition-colors duration-300">
                bookings@folinomusic.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {[
              { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07...' },
              { name: 'Twitter', icon: 'M8.29 20.251c7.547 0 11.675-6.253...' },
              { name: 'Facebook', icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.991...' },
              { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136...' },
            ].map((social) => (
              <a key={social.name} href="#"
                 className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                <span className="sr-only">{social.name}</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {social.name === 'Instagram' && (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  )}
                  {social.name === 'Twitter' && (
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  )}
                  {social.name === 'Facebook' && (
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                  )}
                  {social.name === 'YouTube' && (
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Ultra Minimal */}
      <footer className="py-12 px-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.2em] text-white/20">
            © 2024 FOLINO MUSIC · DEVELOPER OF <a href="/emma" className="text-purple-400/40 hover:text-purple-400/60 transition-colors">EMMA AI STUDIO</a>
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] tracking-[0.2em] text-white/20 hover:text-white/40 transition-colors">
              PRIVACY
            </a>
            <a href="#" className="text-[10px] tracking-[0.2em] text-white/20 hover:text-white/40 transition-colors">
              TERMS
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.5); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(10px) translateX(-10px); }
          75% { transform: translateY(-10px) translateX(20px); }
        }

        .animate-gradient {
          animation: gradient 20s ease infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}