import React, { useState, useEffect } from 'react';
import { X, Save, Image as ImageIcon, Plus, Trash2, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface EditProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectToEdit: Project | null;
  onSaveProject: (project: Project) => void;
  onDeleteProject?: (id: string) => void;
}

export const EditProjectModal: React.FC<EditProjectModalProps> = ({
  isOpen,
  onClose,
  projectToEdit,
  onSaveProject,
  onDeleteProject,
}) => {
  if (!isOpen) return null;

  const [form, setForm] = useState<Project>({
    id: projectToEdit ? projectToEdit.id : `proj-${Date.now()}`,
    title: projectToEdit ? projectToEdit.title : '',
    category: projectToEdit ? projectToEdit.category : 'Desain Grafis',
    description: projectToEdit ? projectToEdit.description : '',
    fullDescription: projectToEdit ? projectToEdit.fullDescription || '' : '',
    imageUrl: projectToEdit
      ? projectToEdit.imageUrl
      : 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=80',
    tags: projectToEdit ? projectToEdit.tags : ['Adobe Photoshop', 'Branding'],
    client: projectToEdit ? projectToEdit.client || '' : '',
    year: projectToEdit ? projectToEdit.year || '2024' : '2024',
    link: projectToEdit ? projectToEdit.link || '' : '',
  });

  const [tagInput, setTagInput] = useState('');

  // Sample curated high quality Unsplash placeholders for easy one-click swap
  const samplePlaceholders = [
    {
      label: 'Kopi & Kemasan',
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Mobile UI/UX',
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Sosial Media & Grafis',
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Poster & Tipografi',
      url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Web Design Minimalis',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Apparel & Streetwear',
      url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Editorial & Majalah',
      url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: '3D & Ilustrasi Digital',
      url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const handleAddTag = () => {
    if (tagInput.trim() && !form.tags.includes(tagInput.trim())) {
      setForm({ ...form, tags: [...form.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setForm({ ...form, tags: form.tags.filter((t) => t !== tagToRemove) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.imageUrl.trim()) return;

    onSaveProject(form);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {projectToEdit ? 'Edit Proyek & Ganti Gambar' : 'Tambah Proyek Baru'}
              </h3>
              <p className="text-xs text-slate-400">
                Sesuaikan gambar placeholder dan detail informasi karya portofolio Anda.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          {/* Judul & Kategori */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Judul Karya / Proyek <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Contoh: Identitas Visual Brand Kopi"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Kategori Proyek
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
              >
                <option value="Desain Grafis">Desain Grafis</option>
                <option value="Branding & Kemasan">Branding & Kemasan</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Konten Kreatif">Konten Kreatif</option>
                <option value="Web Design">Web Design</option>
                <option value="Tipografi">Tipografi</option>
              </select>
            </div>
          </div>

          {/* URL Gambar Placeholder */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              URL Gambar (Ganti Placeholder dengan Tautan Gambar Anda) <span className="text-rose-400">*</span>
            </label>
            <input
              type="url"
              required
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              placeholder="https://images.unsplash.com/... atau URL gambar karya Anda"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
            />

            {/* Image Preview */}
            {form.imageUrl && (
              <div className="mt-3 relative aspect-[16/8] rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src={form.imageUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/70 text-[11px] text-slate-300 backdrop-blur-sm">
                  Pratinjau Gambar
                </div>
              </div>
            )}

            {/* Quick Placeholder Selectors */}
            <div className="mt-3 space-y-1.5">
              <span className="text-[11px] text-slate-400 font-medium">
                Pilihan Cepat Gambar Placeholder Siap Pakai:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {samplePlaceholders.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setForm({ ...form, imageUrl: preset.url })}
                    className="px-2.5 py-1 rounded-lg text-[11px] bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Deskripsi Singkat */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Deskripsi Singkat Karya <span className="text-rose-400">*</span>
            </label>
            <textarea
              required
              rows={2}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Ringkasan 1-2 kalimat mengenai konsep karya ini..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none resize-none"
            />
          </div>

          {/* Klien & Tahun */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Klien / Nama Brand
              </label>
              <input
                type="text"
                value={form.client || ''}
                onChange={(e) => setForm({ ...form, client: e.target.value })}
                placeholder="Contoh: Kopi Rimba / Proyek Pribadi"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Tahun Pembuatan
              </label>
              <input
                type="text"
                value={form.year || '2024'}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
                placeholder="Contoh: 2024"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Tags / Tools */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Tag / Software yang Digunakan
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
                placeholder="Ketik nama tool (misal: Figma, Photoshop) lalu tekan Tambah"
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                Tambah
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {form.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-200 border border-slate-700"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-rose-400 ml-1"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            {projectToEdit && onDeleteProject ? (
              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Yakin ingin menghapus karya ini dari galeri?')) {
                    onDeleteProject(projectToEdit.id);
                    onClose();
                  }
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-rose-400 hover:bg-rose-500/10 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Hapus Proyek</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/25 transition-all cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Proyek</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
