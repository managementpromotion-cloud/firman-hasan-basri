import React from 'react';
import {
  User,
  Heart,
  Compass,
  Lightbulb,
  Award,
  Sparkles,
  ArrowRight,
  Sliders,
} from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface AboutProps {
  profile: ProfileData;
  onOpenEditModal: () => void;
  onScrollToContact: () => void;
}

export const About: React.FC<AboutProps> = ({
  profile,
  onOpenEditModal,
  onScrollToContact,
}) => {
  return (
    <section id="tentang" className="py-24 relative overflow-hidden bg-slate-900/40 border-y border-slate-800/60">
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-indigo-600/10 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Mengenal Lebih Dekat</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tentang Saya
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Kolom Teks Singkat Latar Belakang & Minat */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-slate-900/80 p-8 sm:p-10 rounded-3xl border border-slate-800/80 backdrop-blur-sm shadow-xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Latar Belakang & Minat
                </span>
                <button
                  onClick={onOpenEditModal}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Sliders className="w-3.5 h-3.5 text-blue-400" />
                  <span>Edit Teks Ini</span>
                </button>
              </div>

              {/* Teks singkat perkenalan */}
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {profile.bioShort}
              </h3>

              {/* Paragraf Latar Belakang & Minat */}
              <p className="text-slate-300 text-base leading-relaxed">
                {profile.bioLong}
              </p>

              {/* Minat Spesifik */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-2.5 text-blue-400 font-semibold text-sm mb-1.5">
                    <Compass className="w-4 h-4" />
                    <span>Fokus & Minat Utama</span>
                  </div>
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    Brand identity, tipografi modern, UI/UX intuitif, dan eksplorasi konten kreatif visual multi-platform.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-sm mb-1.5">
                    <Heart className="w-4 h-4" />
                    <span>Filosofi Berkarya</span>
                  </div>
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    Setiap desain harus menyelesaikan masalah nyata, mudah dipahami, dan memberikan sentuhan emosi yang otentik.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">Siap berdiskusi untuk proyek berikutnya?</span>
              </div>
              <button
                onClick={onScrollToContact}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 hover:border-blue-500 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                <span>Ajak Diskusi</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Kolom Kartu Statistik & Keunggulan */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Grid Statistik Modern */}
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-850 hover:-translate-y-1 transition-all duration-300 shadow-md flex flex-col justify-center items-center text-center"
                >
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-400 mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Mini Card Komitmen Kualitas */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Lightbulb className="w-4 h-4" />
                <span>Prinsip Kerja & Kolaborasi</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Komunikasi transparan & pembaruan progres berkala</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Eksplorasi konsep orisinal disesuaikan dengan target audiens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Ketepatan waktu dan komitmen terhadap tenggat waktu (deadline)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
