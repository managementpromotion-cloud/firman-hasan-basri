/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Skills } from './components/Skills';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { EditProfileModal } from './components/EditProfileModal';
import { EditProjectModal } from './components/EditProjectModal';
import {
  initialProfileData,
  initialProjects,
  initialSkills,
} from './data/initialData';
import { ProfileData, Project, SkillItem } from './types/portfolio';
import { CheckCircle2, Sparkles, Sliders } from 'lucide-react';

export default function App() {
  // Profile state with localStorage persistence
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('portfolio_profile_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name === 'Rizky Pratama') {
          parsed.name = 'Firmansyah';
        }
        if (
          !parsed.email ||
          parsed.email === 'rizky.pratama.design@gmail.com' ||
          parsed.email === 'firmansyah.design@gmail.com'
        ) {
          parsed.email = 'firmansyahhasanbasri@gmail.com';
        }
        if (!parsed.whatsapp || parsed.whatsapp === '6281234567890') {
          parsed.whatsapp = '6281919205382';
          parsed.phone = '+62 819-1920-5382';
        }
        if (
          !parsed.avatarUrl ||
          parsed.avatarUrl.includes('unsplash.com/photo-1534528741775') ||
          parsed.avatarUrl.includes('firmansyah_portrait_1791687605701')
        ) {
          parsed.avatarUrl = '/profile.jpg';
        }
        parsed.website = 'https://firmanpad.ai.studio';
        return parsed;
      }
    } catch (e) {
      console.warn('Gagal membaca profile dari localStorage', e);
    }
    return initialProfileData;
  });

  // Projects state with localStorage persistence
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_projects_data');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Gagal membaca projects dari localStorage', e);
    }
    return initialProjects;
  });

  // Skills state with localStorage persistence
  const [skills, setSkills] = useState<SkillItem[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_skills_data');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Gagal membaca skills dari localStorage', e);
    }
    return initialSkills;
  });

  // Modal states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isEditProjectOpen, setIsEditProjectOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('portfolio_profile_data', JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_projects_data', JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_skills_data', JSON.stringify(skills));
    } catch (e) {
      console.error(e);
    }
  }, [skills]);

  // Handler for scrolling to contact section smoothly
  const handleScrollToContact = () => {
    const el = document.getElementById('kontak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Profile save & reset handlers
  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    showToast('Profil Anda berhasil diperbarui!');
  };

  const handleResetProfile = () => {
    setProfile(initialProfileData);
    setProjects(initialProjects);
    setSkills(initialSkills);
    localStorage.removeItem('portfolio_profile_data');
    localStorage.removeItem('portfolio_projects_data');
    localStorage.removeItem('portfolio_skills_data');
    showToast('Semua data portofolio dikembalikan ke default.');
  };

  // Project handlers
  const handleOpenEditProject = (proj?: Project) => {
    setProjectToEdit(proj || null);
    setIsEditProjectOpen(true);
  };

  const handleSaveProject = (savedProj: Project) => {
    const exists = projects.some((p) => p.id === savedProj.id);
    if (exists) {
      setProjects(projects.map((p) => (p.id === savedProj.id ? savedProj : p)));
      showToast(`Proyek "${savedProj.title}" berhasil diperbarui!`);
    } else {
      setProjects([savedProj, ...projects]);
      showToast(`Proyek baru "${savedProj.title}" berhasil ditambahkan!`);
    }
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
    showToast('Proyek berhasil dihapus dari galeri.');
  };

  // Skill handlers
  const handleAddSkill = (newSkill: SkillItem) => {
    setSkills([...skills, newSkill]);
    showToast(`Keahlian "${newSkill.name}" ditambahkan!`);
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter((s) => s.id !== id));
    showToast('Keahlian dihapus.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900/95 border border-blue-500/50 text-white shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-3 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Floating Quick Customizer Button */}
      <button
        onClick={() => setIsEditProfileOpen(true)}
        className="fixed bottom-6 left-6 z-40 group flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-blue-500/60 shadow-xl hover:shadow-blue-500/20 backdrop-blur-md transition-all duration-300 cursor-pointer"
        title="Klik untuk mengubah nama, profesi, deskripsi, atau foto"
      >
        <Sliders className="w-4 h-4 text-blue-400 group-hover:rotate-45 transition-transform duration-300" />
        <span className="text-xs font-semibold">Kustomisasi Profil</span>
      </button>

      {/* Navigation Bar */}
      <Navbar
        name={profile.name}
        role={profile.role}
        onOpenEditModal={() => setIsEditProfileOpen(true)}
        onScrollToContact={handleScrollToContact}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Header/Hero Section */}
        <Hero
          profile={profile}
          onScrollToContact={handleScrollToContact}
          onOpenEditModal={() => setIsEditProfileOpen(true)}
          onUploadAvatar={(newUrl) => {
            setProfile({ ...profile, avatarUrl: newUrl });
            showToast('Foto profil berhasil diperbarui!');
          }}
        />

        {/* 2. Tentang Saya (About Me) */}
        <About
          profile={profile}
          onOpenEditModal={() => setIsEditProfileOpen(true)}
          onScrollToContact={handleScrollToContact}
        />

        {/* 3. Galeri Portofolio/Proyek */}
        <PortfolioGallery
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenEditProjectModal={handleOpenEditProject}
        />

        {/* 4. Keahlian (Skills) */}
        <Skills
          skills={skills}
          onAddSkill={handleAddSkill}
          onRemoveSkill={handleRemoveSkill}
        />

        {/* 5. Bagian Kontak Interaktif */}
        <ContactSection profile={profile} />
      </main>

      {/* 6. Footer */}
      <Footer profile={profile} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onScrollToContact={handleScrollToContact}
      />

      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetDefault={handleResetProfile}
      />

      <EditProjectModal
        isOpen={isEditProjectOpen}
        onClose={() => {
          setIsEditProjectOpen(false);
          setProjectToEdit(null);
        }}
        projectToEdit={projectToEdit}
        onSaveProject={handleSaveProject}
        onDeleteProject={handleDeleteProject}
      />
    </div>
  );
}
