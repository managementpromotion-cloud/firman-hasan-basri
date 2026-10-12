import React from 'react';
import { X, ExternalLink, Calendar, User, Tag, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onScrollToContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onScrollToContact,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
          aria-label="Tutup Detail Proyek"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Banner */}
        <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
          <div className="absolute bottom-4 left-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/90 text-white backdrop-blur-md shadow-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Project Details Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
            {project.client && (
              <div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-0.5">
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  <span>Klien / Brand</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white">{project.client}</p>
              </div>
            )}
            {project.year && (
              <div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-0.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tahun Pembuatan</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white">{project.year}</p>
              </div>
            )}
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Status Proyek</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400">Selesai & Dirilis</p>
            </div>
          </div>

          {/* Tags & Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-blue-400" />
              <span>Tools & Keahlian Terkait:</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Tertarik dengan hasil desain serupa?
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onScrollToContact();
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer"
              >
                Pesan Desain Serupa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
