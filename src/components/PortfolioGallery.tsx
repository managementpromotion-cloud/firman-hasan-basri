import React, { useState } from 'react';
import {
  Briefcase,
  ExternalLink,
  Eye,
  Plus,
  Image as ImageIcon,
  Sparkles,
  ArrowUpRight,
  Filter,
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface PortfolioGalleryProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenEditProjectModal: (project?: Project) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  projects,
  onSelectProject,
  onOpenEditProjectModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  // Collect unique categories
  const categories = [
    'Semua',
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === 'Semua'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portofolio" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Karya & Portofolio Pilihan</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Galeri Proyek
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Kumpulan proyek desain grafis, visual branding, dan antarmuka digital yang dikerjakan dengan presisi dan dedikasi.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filter Bar & Quick Add/Edit Proyek Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 border border-blue-500 scale-102'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Quick Action: Tambah / Ganti Karya */}
          <button
            onClick={() => onOpenEditProjectModal()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
            title="Tambah proyek baru atau ganti gambar placeholder"
          >
            <Plus className="w-3.5 h-3.5 text-cyan-400" />
            <span>Kelola Proyek & Gambar</span>
          </button>
        </div>

        {/* Modern Grid (Kotak-Kotak) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-slate-900/85 border border-slate-800 hover:border-blue-500/50 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom & Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    title="Lihat Detail Proyek"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onOpenEditProjectModal(project)}
                    className="p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    title="Ganti Gambar / Edit Data Proyek"
                  >
                    <ImageIcon className="w-5 h-5 text-cyan-400" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors line-clamp-1 cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Skills/Tools Chips in Card */}
                <div className="space-y-4 pt-2 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] text-slate-400 bg-slate-950 border border-slate-800">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Bottom Actions with Hover Animation */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-400">
                      {project.year ? `Tahun ${project.year}` : 'Portofolio'}
                    </span>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-0.5 transition-all cursor-pointer"
                    >
                      <span>Lihat Detail</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notification tip for user */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
              <ImageIcon className="w-4 h-4" />
            </div>
            <p className="text-xs text-slate-300">
              <strong className="text-white">Tips Gambar Placeholder:</strong> Semua gambar proyek di atas menggunakan placeholder yang dapat Anda ganti kapan saja dengan tautan gambar karya Anda sendiri.
            </p>
          </div>
          <button
            onClick={() => onOpenEditProjectModal()}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 shrink-0 cursor-pointer"
          >
            Kelola Gambar Proyek Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};
