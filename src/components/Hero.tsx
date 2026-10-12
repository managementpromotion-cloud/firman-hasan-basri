import React, { useRef } from 'react';
import {
  Send,
  ArrowDown,
  Sparkles,
  Palette,
  Layers,
  Code2,
  FileText,
  MapPin,
  CheckCircle2,
  Camera,
  Upload,
} from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface HeroProps {
  profile: ProfileData;
  onScrollToContact: () => void;
  onOpenEditModal: () => void;
  onUploadAvatar?: (newUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onScrollToContact,
  onOpenEditModal,
  onUploadAvatar,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUploadAvatar) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onUploadAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambient Glows & Subtle Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Greeting, Role & Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill & Domain */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium text-slate-300">{profile.status}</span>
                <button
                  onClick={onOpenEditModal}
                  className="text-[10px] uppercase font-bold text-blue-400 hover:text-blue-300 ml-1 underline decoration-dotted"
                  title="Klik untuk mengubah status / profil"
                >
                  Ubah
                </button>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-sm">
                <span className="text-[10px]">🌐</span>
                <span>firmanpad.ai.studio</span>
              </div>
            </div>

            {/* Sapaan Besar Sesuai Permintaan: Halo, Saya [Nama Anda] */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.15] mb-4">
              Halo, Saya{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 hover:brightness-110 transition-all">
                {profile.name || '[Nama Anda]'}
              </span>
            </h1>

            {/* Profesi Sesuai Permintaan: Profesi saya sebagai [Profesi Anda] */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300">
                Profesi saya sebagai
              </span>
              <span className="inline-block px-3.5 py-1 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 text-blue-300 font-semibold text-lg sm:text-xl md:text-2xl shadow-sm">
                {profile.role || '[Profesi Anda, misal: Graphic Designer / Mahasiswa / Content Creator]'}
              </span>
            </div>

            {/* Headline & Deskripsi Ringkas */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8 font-normal">
              {profile.bioHeadline ||
                'Mengubah ide kompleks menjadi karya visual yang memikat, fungsional, dan bernilai tinggi.'}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 mb-8">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{profile.location}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Kreatif, Cepat & Berorientasi Detail</span>
              </div>
            </div>

            {/* Tombol Aksi dengan Animasi Hover */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Tombol Utama: Hubungi Saya */}
              <button
                onClick={onScrollToContact}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-500 shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                <span>Hubungi Saya</span>
              </button>

              {/* Tombol Sekunder: Jelajahi Portofolio */}
              <a
                href="#portofolio"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 hover:text-white hover:bg-slate-800 shadow-sm hover:shadow-slate-700/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer text-decoration-none"
              >
                <span>Lihat Portofolio</span>
                <ArrowDown className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>

              {/* Tombol Kustomisasi Profil Langsung */}
              <button
                onClick={onOpenEditModal}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-200 border border-dashed border-slate-800 hover:border-slate-600 transition-colors"
                title="Edit Nama, Profesi, dan Profil Langsung"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Ganti Data Profil</span>
              </button>
            </div>
          </div>

          {/* Right Column: Creative Avatar Card & Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Gradient Border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 shadow-2xl shadow-indigo-500/20 group hover:shadow-indigo-500/35 transition-all duration-500">
                <div className="relative rounded-[22px] bg-slate-950 overflow-hidden">
                  {/* Photo / Avatar Placeholder */}
                  <div className="aspect-[4/4.5] overflow-hidden relative">
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Hidden file input */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {/* Quick Edit / Upload Overlay buttons */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        title="Unggah foto langsung dari perangkat (HP/Komputer)"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-black/75 hover:bg-blue-600 text-[11px] font-medium text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Unggah Foto</span>
                      </button>
                      <button
                        onClick={onOpenEditModal}
                        title="Pengaturan Profil & Foto"
                        className="p-1.5 rounded-lg bg-black/60 hover:bg-black/85 text-white/90 backdrop-blur-md border border-white/20 transition-colors cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom Caption in Avatar Card */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-slate-400 font-medium">Spesialisasi</p>
                            <p className="text-sm font-bold text-white">Visual & Digital Design</p>
                          </div>
                          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
                            <CheckCircle2 className="w-3 h-3" />
                            Terverifikasi
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Badge 1: Desain Kreatif */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 shadow-xl shadow-black/40 flex items-center gap-2.5 animate-bounce-slow hover:scale-105 transition-transform">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Fokus</p>
                  <p className="text-xs font-bold text-white">Creative Design</p>
                </div>
              </div>

              {/* Floating Accent Badge 2: Proyek Selesai */}
              <div className="absolute -bottom-4 -right-4 sm:-right-4 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 shadow-xl shadow-black/40 flex items-center gap-2.5 hover:scale-105 transition-transform">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Portofolio</p>
                  <p className="text-xs font-bold text-white">Siap Kerja & Kolaborasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
