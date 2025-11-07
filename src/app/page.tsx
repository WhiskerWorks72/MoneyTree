"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Channel statistics - update these as needed
const CHANNEL_STATS = {
  views: "20.8K",
  viewsPeriod: "28 days",
  subscribers: 67,
  newSubscribers: 42,
  newSubsPeriod: "this month",
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl sm:text-3xl font-bold font-playfair text-amber-500">
                WhiskerWorks
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://www.youtube.com/@PawfectlyWhiskered"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200"
              >
                Watch on YouTube
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-700"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="https://www.youtube.com/@PawfectlyWhiskered"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold text-center transition-colors duration-200"
              >
                Watch on YouTube
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to WhiskerWorks 🐶✨
            </h2>
            <p className="text-2xl sm:text-3xl text-gray-300 mb-4">
              Home of Archie, Rocco, Des & Pete
            </p>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              DIY pet tech • Shorts • Future merch & SaaS
            </p>
            <button
              onClick={() => scrollToSection("pets")}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-3 rounded-full text-lg transition-colors duration-200"
            >
              See the Pets
            </button>
          </motion.div>
        </div>
      </section>

      {/* Channel Description Section */}
      <section id="about" className="py-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/80 rounded-2xl p-8 backdrop-blur-sm border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-amber-500 mb-4">About Our Channel</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We make 60-second pet chaos with Archie (Golden), Rocco (Corgi), Des (Siamese) & Pete (Bombay). 
              {CHANNEL_STATS.views} views last {CHANNEL_STATS.viewsPeriod} • {CHANNEL_STATS.subscribers} subs • {CHANNEL_STATS.newSubscribers} new {CHANNEL_STATS.newSubsPeriod}. 
              Soon: auto-feeders, 3D-print files, SaaS wait-list.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pets Grid Section */}
      <section id="pets" className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
          >
            Meet Our Stars
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pet Card 1 - Archie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500 transition-colors duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-6xl">🐕</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-amber-500 mb-2">Archie</h4>
                <p className="text-gray-400 mb-2">Golden Retriever</p>
                <p className="text-gray-300 text-sm">
                  The gentle giant who loves everyone and everything. Always ready for an adventure!
                </p>
              </div>
            </motion.div>

            {/* Pet Card 2 - Rocco */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500 transition-colors duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-6xl">🐶</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-amber-500 mb-2">Rocco</h4>
                <p className="text-gray-400 mb-2">Corgi</p>
                <p className="text-gray-300 text-sm">
                  Short legs, big personality! This little guy rules the house with his adorable waddle.
                </p>
              </div>
            </motion.div>

            {/* Pet Card 3 - Des */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500 transition-colors duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">🐱</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-amber-500 mb-2">Des</h4>
                <p className="text-gray-400 mb-2">Siamese</p>
                <p className="text-gray-300 text-sm">
                  The chatty one who has opinions about everything. Vocal, elegant, and absolutely stunning!
                </p>
              </div>
            </motion.div>

            {/* Pet Card 4 - Pete */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500 transition-colors duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <span className="text-6xl">🐈‍⬛</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-amber-500 mb-2">Pete</h4>
                <p className="text-gray-400 mb-2">Bombay</p>
                <p className="text-gray-300 text-sm">
                  The mysterious shadow who appears and disappears at will. Silent but always watching!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 WhiskerWorks. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
