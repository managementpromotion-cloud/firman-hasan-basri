import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Send, Sliders } from 'lucide-react';

interface NavbarProps {
  name: string;
  role: string;
  onOpenEditModal: () => void;
  onScrollToContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  name,
  onOpenEditModal,
  onScrollToContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Saya', href: '#tentang' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Keahlian', href: '#keahlian' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#beranda"
            className="flex items-center gap-2.5 group cursor-pointer text-decoration-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-display font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {name ? name.charAt(0).toUpperCase() : 'P'}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {name || 'Firmansyah'}
              </span>
              <span className="text-[11px] text-cyan-400 font-mono tracking-wide">
                firmanpad.ai.studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Customizer / Edit Profile button */}
            <button
              onClick={onOpenEditModal}
              title="Kustomisasi Nama, Profesi, dan Profil"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700/80 hover:border-blue-500/50 hover:text-white hover:bg-slate-800 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-blue-500/10"
            >
              <Sliders className="w-3.5 h-3.5 text-blue-400" />
              <span>Edit Profil</span>
            </button>

            {/* Hubungi Saya CTA */}
            <button
              onClick={onScrollToContact}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-500 active:scale-95 transition-all duration-200 cursor-pointer shadow-md shadow-blue-600/25 hover:shadow-blue-500/40"
            >
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              <span>Hubungi Saya</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenEditModal}
              title="Edit Profil"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              <Sliders className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-5 space-y-3 mt-2 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800"
            >
              <Sliders className="w-3.5 h-3.5 text-blue-400" />
              <span>Kustomisasi Profil (Nama & Profesi)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hubungi Saya</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
