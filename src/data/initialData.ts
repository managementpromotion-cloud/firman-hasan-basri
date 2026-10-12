import { ProfileData, Project, SkillItem } from '../types/portfolio';

export const initialProfileData: ProfileData = {
  name: 'Firmansyah',
  role: 'Graphic Designer & Creative Creator',
  secondaryRole: 'UI/UX Enthusiast • Mahasiswa Kreatif',
  bioHeadline: 'Mengubah ide kompleks menjadi karya visual yang memikat, fungsional, dan bernilai tinggi.',
  bioShort:
    'Saya adalah seorang Graphic Designer dan Content Creator berdedikasi dengan ketertarikan mendalam pada identitas visual, branding, dan desain digital yang berorientasi pada kepuasan pengguna.',
  bioLong:
    'Memulai perjalanan dari rasa penasaran terhadap seni visual dan teknologi, saya telah membantu berbagai merek, UMKM, dan proyek kampus menciptakan identitas grafis yang kuat. Saya mengutamakan keseimbangan antara estetika yang elegan dan fungsionalitas pesan. Selalu bersemangat untuk mengeksplorasi tren desain terbaru, tipografi, dan pengalaman visual yang berkesan.',
  location: 'Jakarta, Indonesia',
  status: 'Tersedia untuk Proyek Baru & Freelance',
  email: 'firmansyahhasanbasri@gmail.com',
  phone: '+62 819-1920-5382',
  whatsapp: '6281919205382',
  website: 'https://firmanpad.ai.studio',
  avatarUrl: '/profile.jpg',
  stats: [
    { label: 'Proyek Selesai', value: '45+' },
    { label: 'Klien Puas', value: '30+' },
    { label: 'Tahun Pengalaman', value: '3+' },
    { label: 'Penghargaan / Desain Unggulan', value: '8' },
  ],
  socials: {
    instagram: 'https://instagram.com/firmansyah.design',
    linkedin: 'https://linkedin.com/in/firmansyah',
    github: 'https://github.com/firmansyah',
    dribbble: 'https://dribbble.com',
    behance: 'https://behance.net',
    youtube: 'https://youtube.com',
  },
};

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Brand Identity & Kemasan Kopi Nusantara',
    category: 'Branding & Kemasan',
    description:
      'Perancangan identitas visual lengkap, tipografi khas, dan konsep kemasan ramah lingkungan untuk produk kopi artisan lokal.',
    fullDescription:
      'Proyek ini melibatkan eksplorasi palet warna bumi, perancangan logo berbasis ornamen nusantara minimalis, serta perancangan kemasan pouch dan cup kopi yang menarik minat generasi muda.',
    imageUrl:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
    tags: ['Adobe Illustrator', 'Photoshop', 'Packaging Design', 'Brand Identity'],
    client: 'Kopi Seduh Rimba',
    year: '2024',
    link: 'https://behance.net',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Desain Antarmuka Aplikasi Edukasi Mobile',
    category: 'UI/UX Design',
    description:
      'Desain aplikasi pembelajaran interaktif untuk mahasiswa dengan alur belajar terstruktur dan micro-interactions yang mulus.',
    fullDescription:
      'Riset persona pengguna, pembuatan wireframe, design system, dan prototipe interaktif high-fidelity yang meningkatkan engagement pengguna sebesar 40%.',
    imageUrl:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80',
    tags: ['Figma', 'UI/UX', 'Design System', 'Mobile App'],
    client: 'EduSmart Academy',
    year: '2024',
    link: 'https://dribbble.com',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Social Media Campaign & Feed Carousel',
    category: 'Konten Kreatif',
    description:
      'Rangkaian visual kampanye peluncuran produk kosmetik organik dengan engagement rate tinggi di Instagram dan TikTok.',
    fullDescription:
      'Memproduksi lebih dari 30 aset visual termasuk template feed grid, story interaktif, banner promosi e-commerce, dan guideline konten visual brand.',
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    tags: ['Canva Pro', 'Photoshop', 'Social Media', 'Content Strategy'],
    client: 'GlowFlora Botanics',
    year: '2023',
    link: 'https://instagram.com',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Poster Eksperimental & Tipografi Digital',
    category: 'Desain Grafis',
    description:
      'Eksplorasi poster tipografi ekspresif dan tata letak editorial modern untuk festival seni & musik kampus tahunan.',
    fullDescription:
      'Menggabungkan unsur visual retro-futuristik dengan grid asimetris, efek halftone, dan komposisi warna kontras tinggi yang eye-catching.',
    imageUrl:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    tags: ['Illustrator', 'Editorial', 'Typography', 'Print Design'],
    client: 'Festival Seni Visual 2023',
    year: '2023',
    link: 'https://behance.net',
  },
  {
    id: 'proj-5',
    title: 'Landing Page Portofolio Fotografer Kreatif',
    category: 'Web Design',
    description:
      'Konsep website portofolio interaktif dengan animasi transisi elegan, galeri masonry, dan mode gelap minimalis.',
    fullDescription:
      'Perancangan visual landing page responsif lengkap dengan micro-interactions, navigasi intuitif, dan optimasi tata letak visual.',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    tags: ['Figma', 'Web Design', 'Responsive UI', 'Tailwind CSS'],
    client: 'Studio Lensa Kreatif',
    year: '2024',
    link: 'https://github.com',
  },
  {
    id: 'proj-6',
    title: 'Merchandise & Ilustrasi Apparel Custom',
    category: 'Desain Grafis',
    description:
      'Koleksi desain sablon t-shirt dan merchandise bergaya neo-vintage untuk komunitas streetwear lokal.',
    fullDescription:
      'Pembuatan ilustrasi vektor detail, separasi warna untuk cetak sablon manual & DTF, serta mockup presentasi produk 3D.',
    imageUrl:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
    tags: ['Vector Art', 'T-Shirt Design', 'Illustrator', 'Merchandise'],
    client: 'Outlaw Urban Wear',
    year: '2023',
    link: 'https://behance.net',
  },
];

export const initialSkills: SkillItem[] = [
  // Desain & Visual
  { id: 'sk-1', name: 'Adobe Photoshop', category: 'Tools & Software', level: 'Lanjutan' },
  { id: 'sk-2', name: 'Adobe Illustrator', category: 'Tools & Software', level: 'Lanjutan' },
  { id: 'sk-3', name: 'Figma', category: 'Tools & Software', level: 'Lanjutan' },
  { id: 'sk-4', name: 'Adobe Premiere Pro', category: 'Tools & Software', level: 'Menengah' },
  { id: 'sk-5', name: 'Canva Pro', category: 'Tools & Software', level: 'Lanjutan' },
  { id: 'sk-6', name: 'Procreate', category: 'Tools & Software', level: 'Menengah' },

  // Disiplin Desain
  { id: 'sk-7', name: 'Brand Identity', category: 'Desain', level: 'Lanjutan' },
  { id: 'sk-8', name: 'UI / UX Design', category: 'Desain', level: 'Lanjutan' },
  { id: 'sk-9', name: 'Tipografi & Layout', category: 'Desain', level: 'Lanjutan' },
  { id: 'sk-10', name: 'Desain Kemasan (Packaging)', category: 'Desain', level: 'Menengah' },
  { id: 'sk-11', name: 'Social Media Feed & Banner', category: 'Desain', level: 'Lanjutan' },
  { id: 'sk-12', name: 'Vektor & Ilustrasi', category: 'Desain', level: 'Lanjutan' },

  // Web & Frontend
  { id: 'sk-13', name: 'HTML5 & CSS3', category: 'Web & Frontend', level: 'Lanjutan' },
  { id: 'sk-14', name: 'Tailwind CSS', category: 'Web & Frontend', level: 'Lanjutan' },
  { id: 'sk-15', name: 'Responsive Web Design', category: 'Web & Frontend', level: 'Lanjutan' },
  { id: 'sk-16', name: 'WordPress & Elementor', category: 'Web & Frontend', level: 'Menengah' },
  { id: 'sk-17', name: 'Basic React', category: 'Web & Frontend', level: 'Menengah' },

  // Soft Skills
  { id: 'sk-18', name: 'Creative Problem Solving', category: 'Soft Skills', level: 'Keahlian' },
  { id: 'sk-19', name: 'Komunikasi Visual', category: 'Soft Skills', level: 'Keahlian' },
  { id: 'sk-20', name: 'Manajemen Waktu & Deadline', category: 'Soft Skills', level: 'Keahlian' },
  { id: 'sk-21', name: 'Kolaborasi Tim', category: 'Soft Skills', level: 'Keahlian' },
];
