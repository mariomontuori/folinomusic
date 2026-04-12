'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EmmaAI() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "The Future of Music Creation";

  useEffect(() => {
    setIsVisible(true);

    // Typing animation
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    // Feature rotation
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(featureInterval);
    };
  }, []);

  const features = [
    {
      title: "AI-Powered Composition",
      description: "Generate unique melodies, harmonies, and beats with advanced neural networks",
      icon: "🎵",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-Time Collaboration",
      description: "Work with EMMA AI in real-time to enhance your creative workflow",
      icon: "🤝",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Style Transfer",
      description: "Apply the essence of any genre or artist to your compositions",
      icon: "🎨",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Smart Mixing & Mastering",
      description: "Professional-grade audio processing powered by machine learning",
      icon: "🎛️",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    { name: "Melody Generation", percentage: 95 },
    { name: "Rhythm Creation", percentage: 90 },
    { name: "Harmonic Analysis", percentage: 88 },
    { name: "Sound Design", percentage: 92 },
    { name: "Mixing Assistance", percentage: 85 },
    { name: "Style Adaptation", percentage: 93 }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  EMMA AI
                </span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#demo" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Demo
                </a>
                <a href="#capabilities" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Capabilities
                </a>
                <a href="#access" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Get Access
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Back to Folino
              </Link>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                Try EMMA AI
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Neural network visualization */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 50% 100%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)`
            }} />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-500 rounded-full animate-float opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${30 + Math.random() * 30}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-6 max-w-6xl mx-auto transition-all duration-[2000ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Developed by Folino
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              EMMA AI
            </span>
          </h1>

          <div className="h-12 mb-8">
            <p className="text-2xl md:text-3xl text-gray-300">
              {typedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </p>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            An advanced artificial intelligence system designed to revolutionize music production.
            EMMA AI understands music theory, composition, and production techniques to help artists
            create their next masterpiece.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105">
              Start Creating
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-sm text-gray-400">Tracks Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-gray-400">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to create professional music with AI assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${
                  activeFeature === index ? 'scale-105 border-blue-500/50' : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 px-6 bg-gradient-to-b from-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                See EMMA in Action
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Experience the power of AI-assisted music creation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-4">Create a Beat</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">Genre:</span>
                    <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-1">
                      <option>Electronic</option>
                      <option>Hip Hop</option>
                      <option>House</option>
                      <option>Trap</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">BPM:</span>
                    <input
                      type="range"
                      min="60"
                      max="180"
                      defaultValue="128"
                      className="flex-1"
                    />
                    <span>128</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">Mood:</span>
                    <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-1">
                      <option>Energetic</option>
                      <option>Chill</option>
                      <option>Dark</option>
                      <option>Uplifting</option>
                    </select>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                  Generate Beat
                </button>
              </div>

              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Generated Output</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Kick Pattern</span>
                    <span className="text-green-400">✓ Generated</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Hi-Hat Sequence</span>
                    <span className="text-green-400">✓ Generated</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Bass Line</span>
                    <span className="text-green-400">✓ Generated</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-400">Melody</span>
                    <span className="text-blue-400 animate-pulse">Generating...</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                {/* Waveform Visualization */}
                <div className="h-64 flex items-end justify-around space-x-1">
                  {[...Array(50)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t animate-pulse"
                      style={{
                        height: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.05}s`
                      }}
                    />
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </button>
                  <div className="flex-1 mx-4 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                  </div>
                  <span className="text-sm text-gray-400">0:45 / 2:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                AI Capabilities
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Advanced machine learning models trained on millions of tracks
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{capability.name}</span>
                    <span className="text-gray-400">{capability.percentage}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000"
                      style={{ width: `${capability.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-gray-300">Neural Architecture: Transformer-based</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-gray-300">Training Data: 10M+ professional tracks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-gray-300">Response Time: &lt;100ms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-gray-300">API Integration: REST & WebSocket</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-gray-300">Format Support: WAV, MP3, FLAC, MIDI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-gray-300">DAW Integration: VST3, AU, AAX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get Started with EMMA AI
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Choose the plan that fits your creative needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gradient-to-b from-white/5 to-white/0 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-2xl font-semibold mb-2">Explorer</h3>
              <p className="text-gray-400 mb-6">Perfect for trying out EMMA AI</p>
              <div className="text-4xl font-bold mb-6">
                $0<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">5 generations per day</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Basic styles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Community support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400">×</span>
                  <span className="text-gray-500">Commercial use</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all">
                Start Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border-2 border-blue-500/50 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-semibold mb-2">Producer</h3>
              <p className="text-gray-400 mb-6">For serious music creators</p>
              <div className="text-4xl font-bold mb-6">
                $29<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Unlimited generations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">All styles & genres</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Commercial use</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">DAW integration</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                Get Producer
              </button>
            </div>

            {/* Studio Plan */}
            <div className="bg-gradient-to-b from-white/5 to-white/0 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-2xl font-semibold mb-2">Studio</h3>
              <p className="text-gray-400 mb-6">For teams and studios</p>
              <div className="text-4xl font-bold mb-6">
                $99<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Everything in Producer</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Team collaboration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Custom models</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">API access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Dedicated support</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Music?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join thousands of artists already creating with EMMA AI
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105">
              Start Creating Now
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EMMA AI
              </h3>
              <p className="text-sm text-gray-400">
                Advanced AI for music creation, developed by Folino.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Folino Music</Link></li>
                <li><a href="https://shop.folinomusic.com" className="hover:text-white transition-colors">Shop</a></li>
                <li><a href="https://instagram.com/folinomusic" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://twitter.com/folinomusic" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© 2024 EMMA AI by Folino. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(4px) translateX(-4px); }
          75% { transform: translateY(-4px) translateX(8px); }
        }

        .animate-float {
          animation: float 30s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}