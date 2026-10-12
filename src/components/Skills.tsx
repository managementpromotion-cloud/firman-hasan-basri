import React, { useState } from 'react';
import {
  Wrench,
  Palette,
  Layout,
  Code,
  Users,
  CheckCircle,
  Plus,
  Trash2,
  Sparkles,
} from 'lucide-react';
import { SkillItem } from '../types/portfolio';

interface SkillsProps {
  skills: SkillItem[];
  onAddSkill: (newSkill: SkillItem) => void;
  onRemoveSkill: (id: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({
  skills,
  onAddSkill,
  onRemoveSkill,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState<SkillItem['category']>('Tools & Software');
  const [newSkillLevel, setNewSkillLevel] = useState('Lanjutan');

  const categories = [
    'Semua',
    'Tools & Software',
    'Desain',
    'Web & Frontend',
    'Soft Skills',
  ];

  const filteredSkills =
    activeCategory === 'Semua'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    onAddSkill({
      id: `skill-${Date.now()}`,
      name: newSkillName.trim(),
      category: newSkillCategory,
      level: newSkillLevel,
    });

    setNewSkillName('');
    setShowAddModal(false);
  };

  // Helper function for icon based on category
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Tools & Software':
        return <Wrench className="w-4 h-4 text-cyan-400" />;
      case 'Desain':
        return <Palette className="w-4 h-4 text-purple-400" />;
      case 'Web & Frontend':
        return <Code className="w-4 h-4 text-blue-400" />;
      case 'Soft Skills':
        return <Users className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section
      id="keahlian"
      className="py-24 relative overflow-hidden bg-slate-900/30 border-y border-slate-800/60"
    >
      {/* Background ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Keahlian & Kemampuan Teknis</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Keahlian & Tools
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Daftar software, keahlian kreatif, dan teknologi yang saya gunakan sehari-hari dalam merancang solusi visual berkualitas tinggi.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Category Filter Chips & Quick Add */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/25 border border-indigo-500 scale-102'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900/90 border border-slate-700 hover:border-indigo-500/50 hover:text-white hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
          >
            <Plus className="w-3.5 h-3.5 text-indigo-400" />
            <span>Tambah Keahlian Baru</span>
          </button>
        </div>

        {/* Chips (Kotak-Kotak Kecil) Modern with Hover Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group relative p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-indigo-500/60 hover:bg-slate-850 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between gap-3 cursor-default"
            >
              {/* Header inside chip */}
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-xl bg-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {getCategoryIcon(skill.category)}
                </div>
                {skill.level && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800 group-hover:text-indigo-300 transition-colors">
                    {skill.level}
                  </span>
                )}
              </div>

              {/* Skill Name */}
              <div>
                <p className="font-semibold text-sm sm:text-base text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                  {skill.name}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                  {skill.category}
                </p>
              </div>

              {/* Hover delete button (discreet) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveSkill(skill.id);
                }}
                title="Hapus keahlian ini"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 rounded-md text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Highlights banner below chips */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-950/70 border border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Standar Industri</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Menggunakan alur kerja profesional dan toolset standar terkini.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Pembelajar Cepat</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Senantiasa mengasah keahlian dan beradaptasi dengan perkembangan teknologi desain.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Sentuhan Estetika Kuat</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Mengutamakan harmoni warna, proporsi bentuk, dan ketajaman pesan visual.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Tambah Keahlian */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-lg text-white">
                Tambah Keahlian Baru
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Nama Keahlian / Tool
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: After Effects, Blender, Copywriting"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Kategori
                </label>
                <select
                  value={newSkillCategory}
                  onChange={(e) =>
                    setNewSkillCategory(e.target.value as SkillItem['category'])
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                >
                  <option value="Tools & Software">Tools & Software</option>
                  <option value="Desain">Desain & Visual</option>
                  <option value="Web & Frontend">Web & Frontend</option>
                  <option value="Soft Skills">Soft Skills</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Tingkat Penguasaan
                </label>
                <select
                  value={newSkillLevel}
                  onChange={(e) => setNewSkillLevel(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                >
                  <option value="Lanjutan">Lanjutan (Advanced)</option>
                  <option value="Menengah">Menengah (Intermediate)</option>
                  <option value="Dasar">Dasar (Beginner)</option>
                  <option value="Ahli">Ahli (Expert)</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-slate-800"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-colors"
                >
                  Simpan Keahlian
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
