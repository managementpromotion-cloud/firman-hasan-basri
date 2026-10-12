import React, { useState } from 'react';
import {
  Mail,
  ArrowUp,
  Instagram,
  Linkedin,
  Github,
  Dribbble,
  Youtube,
  Send,
  Heart,
  Copy,
  Check,
  Globe,
} from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialItems = [
    {
      name: 'Instagram',
      url: profile.socials.instagram || 'https://instagram.com',
      icon: <Instagram className="w-5 h-5" />,
      colorHover: 'hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10',
    },
    {
      name: 'LinkedIn',
      url: profile.socials.linkedin || 'https://linkedin.com',
      icon: <Linkedin className="w-5 h-5" />,
      colorHover: 'hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10',
    },
    {
      name: 'GitHub',
      url: profile.socials.github || 'https://github.com',
      icon: <Github className="w-5 h-5" />,
      colorHover: 'hover:text-slate-100 hover:border-slate-500/50 hover:bg-slate-700/20',
    },
    {
      name: 'Dribbble',
      url: profile.socials.dribbble || 'https://dribbble.com',
      icon: <Dribbble className="w-5 h-5" />,
      colorHover: 'hover:text-rose-400 hover:border-rose-500/50 hover:bg-rose-500/10',
    },
    {
      name: 'YouTube',
      url: profile.socials.youtube || 'https://youtube.com',
      icon: <Youtube className="w-5 h-5" />,
      colorHover: 'hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gradient-to-t from-blue-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1.5px] shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    {profile.name ? profile.name.charAt(0).toUpperCase() : 'P'}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  {profile.name || '[Nama Anda]'}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {profile.role || '[Profesi Anda]'}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Mewujudkan karya visual yang estetis, fungsional, dan memberikan dampak positif bagi setiap brand dan proyek.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#beranda" className="hover:text-blue-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-blue-400 transition-colors">
                  Tentang Saya
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-blue-400 transition-colors">
                  Galeri Portofolio
                </a>
              </li>
              <li>
                <a href="#keahlian" className="hover:text-blue-400 transition-colors">
                  Daftar Keahlian & Tools
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-blue-400 transition-colors">
                  Hubungi Saya
                </a>
              </li>
            </ul>
          </div>

          {/* Email & Social Media Icons with Hover Animations */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Terhubung & Media Sosial
            </h4>

            {/* Website Domain Card */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href="https://firmanpad.ai.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-300 hover:text-white truncate"
                >
                  firmanpad.ai.studio
                </a>
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                Resmi
              </span>
            </div>

            {/* Email Bar with copy */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${profile.email}`}
                  className="text-xs text-slate-300 hover:text-white truncate"
                >
                  {profile.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Salin Email"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Social Media Icons with Hover Animations */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {socialItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className={`p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 ${item.colorHover} hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} {profile.name || 'Firmansyah'} • firmanpad.ai.studio. Seluruh Hak Cipta Dilindungi.</span>
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400">Dibuat dengan dedikasi & kode bersih</span>
            <button
              onClick={scrollToTop}
              className="group p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer ml-2"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
