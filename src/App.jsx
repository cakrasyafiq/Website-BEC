import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {
  BadgeCheck,
  BookOpen,
  CalendarClock,
  FileText,
  FileCheck,
  Globe,
  GraduationCap,
  Handshake,
  Menu,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  X,
} from 'lucide-react';
import docOne from '../images/documentation/IMG_5373.JPG';
import docTwo from '../images/documentation/IMG_5408.JPG';
import docThree from '../images/documentation/_MG_5484.JPG';
import docFour from '../images/documentation/_MG_5498.JPG';
import bgImage from '../images/background/bg.jpg';
import temaIcon from '../images/icons/tema.png';
import pesertaIcon from '../images/icons/peserta.png';
import tahapanIcon from '../images/icons/tahapan.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const WEB_CONFIG = {
  links: {
    pendaftaran: 'https://bit.ly/Pendaftaran-BEC2026',
    bukuPanduan: 'https://bit.ly/BukuPanduanBEC2026',
    submitFullPaper: 'https://bit.ly/SubmitFullPaper-BEC2026',
    submitPosterPPT: 'https://bit.ly/SubmitPosterPPT-BEC2026',
    posterCaption: 'https://bit.ly/PosterBEC2026',
    twibbon: 'https://bit.ly/TwibbonPesertaBEC2026',
    proposalSponsorship: 'https://drive.google.com/file/d/1ZMijYVGwNPgqVyjZKClb5dzQJOKkj2aH/view?usp=drivesdk', // Ganti dengan link PDF proposal
  },
  info: {
    email: 'becrkim2@gmail.com',
    instagram: '@bec_rkimub',
    tiktok: '@bec_rkimub',
  }
};

const navItems = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Ketentuan', href: '#ketentuan' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Pendaftaran', href: '#pendaftaran' },
  { label: 'Dokumentasi', href: '#dokumentasi' },
  { label: 'Sponsorship', href: '#sponsorship' },
  { label: 'Kontak', href: '#kontak' },
];

const heroStats = [
  { value: '10+', label: 'Subtema Esai', icon: temaIcon },
  { value: '100+', label: 'Peserta Nasional', icon: pesertaIcon },
  { value: '6', label: 'Tahapan Utama', icon: tahapanIcon },
];

const requirementCards = [
  {
    icon: GraduationCap,
    title: 'Mahasiswa aktif',
    desc: 'Peserta merupakan mahasiswa aktif D3/D4/S1 se-Indonesia dibuktikan dengan scan Kartu Tanda Mahasiswa (KTM) atau surat keterangan aktif mahasiswa.',
  },
  {
    icon: Users,
    title: 'Tim 2-3 orang',
    desc: 'Kompetisi esai merupakan kompetisi tim yang terdiri dari 2 atau 3 mahasiswa, di mana satu mahasiswa sebagai ketua dan yang lainnya sebagai anggota tim. Anggota tim boleh berbeda fakultas, tetapi masih dalam satu perguruan tinggi yang sama.',
  },
  {
    icon: BadgeCheck,
    title: 'Beretika akademik',
    desc: 'Karya esai yang diikutsertakan dalam lomba tidak mengandung unsur SARA, pornografi, dan apa pun yang bertentangan dengan hukum di Indonesia.',
  },
  {
    icon: BookOpen,
    title: 'Karya Orisinal',
    desc: 'Karya esai yang dikirimkan harus orisinal dan belum pernah diikutsertakan/tidak sedang diikutsertakan dalam lomba lain, serta tidak menjadi finalis/telah memenangkan kompetisi esai sebelumnya di tempat lain',
  },
  {
    icon: FileText,
    title: 'Format Essay Ilmiah',
    desc: 'Mengikuti template, gaya sitasi, dan format penulisan. Solusi didukung data, referensi kredibel, dan analisis.',
  },
];

const timeline = [
  {
    date: '20 Mei s.d. 15 Juni 2026',
    title: 'Pendaftaran dan Pengumpulan Abstrak',
    desc: 'Daftar online dan unggah abstrak pertama.',
  },
  {
    date: '19 Juni 2026',
    title: 'Pengumuman Lolos Abstrak',
    desc: 'Seleksi abstrak dan pengumuman tahap lanjut.',
  },
  {
    date: '20 Juni s.d. 8 Juli 2026',
    title: 'Pengumpulan Full-Paper Gelombang 1',
    desc: 'Pengumpulan full paper gelombang pertama.',
  },
  {
    date: '9 s.d. 16 Juli 2026',
    title: 'Pengumpulan Full-Paper Gelombang 2',
    desc: 'Pengumpulan full paper gelombang kedua.',
  },
  {
    date: '17 s.d. 24 Juli 2026',
    title: 'Pengumpulan Full-Paper Gelombang 3',
    desc: 'Pengumpulan full paper gelombang ketiga.',
  },
  {
    date: '4 Juli s.d. 16 Juli 2026',
    title: 'Mentoring Karya',
    desc: 'Sesi mentoring untuk penyempurnaan karya.',
  },
  {
    date: '18 Juli s.d. 16 Agustus 2026',
    title: 'Penilaian Full-Paper',
    desc: 'Proses penilaian karya oleh dewan juri.',
  },
  {
    date: '18 Agustus 2026',
    title: 'Pengumuman Finalis',
    desc: 'Tim finalis diumumkan secara resmi.',
  },
  {
    date: '23 Agustus 2026',
    title: 'Technical Meeting',
    desc: 'Pengarahan teknis untuk para finalis.',
  },
  {
    date: '2 s.d. 3 September 2026',
    title: 'Pengumpulan poster dan PPT finalis',
    desc: 'Batas akhir pengumpulan poster dan bahan presentasi.',
  },
  {
    date: '4 s.d. 5 September 2026',
    title: 'Voting Poster Favorit di Instagram @bec_rkimub',
    desc: 'Dukung poster favoritmu melalui Instagram.',
  },
  {
    date: '5 September 2026',
    title: 'Grand Final',
    desc: 'Presentasi offline dan sesi tanya jawab.',
  },
  {
    date: '6 September 2026',
    title: 'Expo, Seminar, dan Awarding',
    desc: 'Pameran karya, seminar, dan awarding.',
  },
];

const resources = [
  {
    icon: CalendarClock,
    title: 'Pendaftaran & Pengumpulan Abstrak',
    desc: 'Formulir pendaftaran untuk tim baru dan unggah abstrak.',
    color: 'from-[#0f766e] to-[#2dd4bf]',
    cta: 'Daftar Sekarang',
    status: 'active',
    href: WEB_CONFIG.links.pendaftaran,
  },
  {
    icon: FileText,
    title: 'Buku Panduan',
    desc: 'Panduan resmi, format penulisan, dan rubrik penilaian.',
    color: 'from-[#2dd4bf] to-[#fbbf24]',
    cta: 'Unduh Panduan',
    status: 'active',
    href: WEB_CONFIG.links.bukuPanduan,
  },
  {
    icon: FileCheck,
    title: 'Pengumpulan Full Paper',
    desc: 'Tautan pengumpulan dokumen full paper esai.',
    color: 'from-[#fbbf24] to-[#f59e0b]',
    cta: 'Kumpulkan Paper',
    status: 'active',
    href: WEB_CONFIG.links.submitFullPaper,
  },
  {
    icon: BookOpen,
    title: 'Pengumpulan Poster & PPT',
    desc: 'Tautan pengumpulan poster dan presentasi (khusus finalis).',
    color: 'from-[#f59e0b] to-[#ea580c]',
    cta: 'Kumpulkan Berkas',
    status: 'active',
    href: WEB_CONFIG.links.submitPosterPPT,
  },
  {
    icon: Sparkles,
    title: 'Poster & Caption BEC 2026',
    desc: 'Unduh poster resmi dan panduan caption BEC 2026.',
    color: 'from-[#ea580c] to-[#e11d48]',
    cta: 'Akses Poster',
    status: 'active',
    href: WEB_CONFIG.links.posterCaption,
  },
  {
    icon: Users,
    title: 'Twibbon Peserta',
    desc: 'Unduh dan gunakan twibbon resmi peserta BEC 2026.',
    color: 'from-[#e11d48] to-[#9f1239]',
    cta: 'Unduh Twibbon',
    status: 'active',
    href: WEB_CONFIG.links.twibbon,
  },
];

const gallery = [
  {
    src: docOne,
    title: 'Presentasi Finalis',
  },
  {
    src: docTwo,
    title: 'Sesi Tanya Jawab',
  },
  {
    src: docThree,
    title: 'Booth Expo Karya',
  },
  {
    src: docFour,
    title: 'Awarding Night',
  },
];


const socials = [
  { label: 'Instagram', value: WEB_CONFIG.info.instagram },
  { label: 'TikTok', value: WEB_CONFIG.info.tiktok },
  { label: 'Email', value: WEB_CONFIG.info.email },
];

const contactGroups = [
  {
    title: 'Teknis Perlombaan',
    contacts: [
      {
        label: 'Bidang Ilmu Sains dan Teknologi',
        name: 'Fahri',
        phone: '+62 877 9611 8826',
      },
      {
        label: 'Bidang Ilmu Sosial dan Humaniora',
        name: 'Dera',
        phone: '+62 819 9045 7943',
      },
    ],
  },
  {
    title: 'Media Partnership',
    contacts: [
      { name: 'Melody', phone: '+62 859-1755-20793' },
      { name: 'Rachel', phone: '+62 821-6169-4570' },
    ],
  },
  {
    title: 'Sponsorship',
    contacts: [
      { name: 'Dipta', phone: '+62 858-2035-1336' },
      { name: 'Kayy', phone: '+62 822-4562-1328' },
    ],
  },
];

const formatContact = (contact) =>
  contact.label
    ? `${contact.label} | ${contact.phone} | ${contact.name}`
    : `${contact.name} | ${contact.phone}`;

const sponsorshipContacts =
  contactGroups.find((group) => group.title === 'Sponsorship')?.contacts ?? [];

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="relative text-[color:var(--color-ink)]">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 pt-5">
          <nav
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${isScrolled
              ? 'bg-white/85 shadow-[var(--shadow-soft)] backdrop-blur-xl'
              : 'bg-white/50 backdrop-blur-md'
              }`}
          >
            <a href="#hero" className="flex items-center gap-3">
              <img src="/Logo.png" alt="Logo BEC" className="h-11 w-auto object-contain" />
              <div>
                <p className="text-xs uppercase tracking-[3px] text-[color:var(--color-secondary)]">
                  RKIM UB
                </p>
                <p className="text-lg font-semibold">BEC 2026</p>
              </div>
            </a>

            <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[2px] lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-[color:var(--color-primary)]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/80 text-[color:var(--color-primary)] lg:hidden"
              aria-label="Buka menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-[rgba(15,118,110,0.95)] backdrop-blur-xl transition duration-300 lg:hidden ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-8 text-white">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">Menu</p>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30"
              aria-label="Tutup menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-6 text-2xl font-semibold">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-[color:var(--color-accent)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat opacity-90"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundPosition: '60% center',
              maskImage: 'linear-gradient(to right, transparent 0%, transparent 30%, black 75%), linear-gradient(to top, transparent 0%, black 20%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 30%, black 75%), linear-gradient(to top, transparent 0%, black 20%)',
              WebkitMaskComposite: 'source-in',
              maskComposite: 'intersect'
            }}
          ></div>
          <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-[#2dd4bf]/35 blur-[120px] animate-[float_14s_ease-in-out_infinite]"></div>
          <div className="absolute left-0 top-16 h-[320px] w-[320px] rounded-full bg-[#fbbf24]/25 blur-[110px] animate-[float_12s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 right-16 h-[280px] w-[280px] rounded-full bg-[#0f766e]/25 blur-[110px] animate-[float_16s_ease-in-out_infinite]"></div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-36 pb-24 md:pt-48 md:pb-32">
          <FadeIn className="space-y-8">
            <div className="glass-pill inline-flex items-center gap-3 px-4 py-2 text-xs font-bold tracking-[3px] text-[color:var(--color-primary)] rounded-3xl">
              Riset dan Karya Ilmiah Mahasiswa Universitas Brawijaya Presents
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                Brawijaya Essay
                <span className="block bg-gradient-to-r from-[#008585] to-[#bba100] bg-clip-text text-transparent">Competition 2026</span>
              </h1>
              <p className="max-w-xl text-lg text-[color:var(--color-muted)] md:text-xl text-balance">
                Empowering Young Changemakers to Break Boundaries and Create Impact through Innovation, Collaboration, and Visionary Thinking Towards Indonesia Emas 2045.
              </p>
            </div>

            <div className="glass-card flex flex-col gap-4 rounded-3xl p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[3px] text-[color:var(--color-secondary)]">
                  Call for Papers
                </p>
                <p className="text-lg font-semibold">
                  Buka pendaftaran abstrak dan full paper
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WEB_CONFIG.links.pendaftaran}
                  className="rounded-full bg-[color:var(--color-accent)] px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
                >
                  Daftar Sekarang
                </a>
                <a
                  href={WEB_CONFIG.links.bukuPanduan}
                  className="rounded-full border border-white/70 bg-white/60 px-5 py-2 text-sm font-semibold text-[color:var(--color-primary)] transition hover:-translate-y-0.5"
                >
                  Lihat Panduan
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item.label} className="glass-card flex items-center justify-between overflow-hidden rounded-2xl p-5 group hover:-translate-y-1 transition-all duration-300">
                  <div className="relative z-10 flex flex-col justify-center">
                    <p className="text-3xl font-bold text-[color:var(--color-primary)]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[color:var(--color-muted)]">
                      {item.label}
                    </p>
                  </div>
                  {item.icon && (
                    <div className="h-16 w-16 shrink-0 transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20">
                      <img src={item.icon} alt={item.label} className="h-full w-full object-contain drop-shadow-sm" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>

      <section id="tentang" className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[color:var(--color-secondary)]">
              Tentang BEC
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Kompetisi Esai Nasional yang Menggerakkan Inovasi
            </h2>
            <p className="mt-4 text-lg text-[color:var(--color-muted)] text-balance">
              Brawijaya Essay Competition 2026 adalah kompetisi esai tingkat nasional yang diselenggarakan oleh Riset dan Karya Ilmiah Mahasiswa Universitas Brawijaya sebagai wadah kolaboratif bagi generasi muda Indonesia untuk menuangkan gagasan kritis, inovatif, dan solutif. Melalui ajang ini, peserta ditantang untuk mengembangkan kemampuan berpikir kritis, kreativitas, dan kompetensi ilmiah dalam menawarkan solusi berbasis ilmu pengetahuan dan teknologi demi menghadapi tantangan global sekaligus mendukung terwujudnya visi Indonesia Emas 2045.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Globe,
                title: 'Tema Besar',
                subtitle: 'Empowering Young Changemakers to Break Boundaries and Create Impact through Innovation, Collaboration, and Visionary Thinking Towards Indonesia Emas 2045',
                color: 'from-[#0f766e] to-[#2dd4bf]',
              },
              {
                icon: FileCheck,
                title: 'Tahapan',
                subtitle: 'Seleksi abstrak, seleksi full paper, presentasi, dan tanya jawab',
                color: 'from-[#2dd4bf] to-[#fbbf24]',
              },
              {
                icon: Trophy,
                title: 'Puncak Acara',
                subtitle: 'Poster exhibition, seminar, dan awarding',
                color: 'from-[#fbbf24] to-[#0f766e]',
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div className="glass-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-20" style={{ backgroundImage: `linear-gradient(135deg, #2dd4bf, #fbbf24)` }}></div>

                    <div className="relative z-10 space-y-4">
                      <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        <Icon size={28} />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--color-secondary)]/30 text-xs font-bold text-[color:var(--color-primary)]">
                            {index + 1}
                          </span>
                          <span className="h-0.5 flex-1 bg-gradient-to-r from-[color:var(--color-secondary)] to-transparent rounded-full"></span>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-[color:var(--color-ink)]">
                            {item.title}
                          </p>
                          <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ketentuan" className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[color:var(--color-secondary)]">
                Ketentuan Peserta
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Siapakah yang Bisa Berpartisipasi?
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {requirementCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="glass-card group rounded-3xl p-6 transition hover:-translate-y-1 w-full md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2dd4bf]/20 text-[color:var(--color-primary)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="timeline" className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[color:var(--color-secondary)]">
              Timeline
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Tahapan BEC 2026
            </h2>
            <p className="mt-4 text-[color:var(--color-muted)]">
              Catat tanggal penting agar tidak terlewat setiap fase kompetisi.
            </p>
          </FadeIn>

          <div className="relative mt-16 mx-auto max-w-4xl">
            {/* The vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-accent)] md:-translate-x-1/2 rounded-full opacity-30"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <FadeIn key={item.title} delay={index * 0.1}>
                    <div className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8`}>

                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-4 border-[color:var(--color-primary)] shadow-[0_0_15px_rgba(15,118,110,0.5)] z-10 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[color:var(--color-accent)]"></div>
                      </div>

                      {/* Content Card */}
                      <div className={`pl-16 pr-2 md:pl-0 md:pr-0 md:w-1/2 flex ${isEven ? 'md:justify-start' : 'md:justify-end'} w-full`}>
                        <div className={`glass-card relative rounded-3xl p-5 md:p-8 w-full md:max-w-[400px] group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl`}>
                          <div className="absolute -top-4 right-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-secondary)] text-lg font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110 md:-top-5 md:right-8 md:h-12 md:w-12">
                            {index + 1}
                          </div>

                          <p className="text-xs font-bold uppercase tracking-[2px] text-[color:var(--color-secondary)] mb-2">
                            {item.date}
                          </p>
                          <h3 className="text-xl font-bold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-primary)] transition-colors">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm text-[color:var(--color-muted)] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Empty space for the other half on desktop */}
                      <div className="hidden md:block md:w-1/2"></div>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="pendaftaran" className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[color:var(--color-secondary)]">
                Pendaftaran
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Tautan Penting
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {resources.map((item, index) => {
              const Icon = item.icon;
              const isDisabled = item.status === 'disabled';

              return (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div
                    className={`glass-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 ${isDisabled
                      ? 'opacity-60'
                      : 'hover:-translate-y-2 hover:shadow-xl'
                      }`}
                  >
                    <div
                      className="absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                      style={{
                        backgroundImage:
                          'linear-gradient(135deg, #2dd4bf, #fbbf24)',
                      }}
                    ></div>

                    <div className="relative z-10 space-y-4">
                      <div
                        className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition-all duration-300 ${isDisabled ? '' : 'group-hover:scale-110'
                          }`}
                      >
                        <Icon size={28} />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--color-secondary)]/30 text-xs font-bold text-[color:var(--color-primary)]">
                            {index + 1}
                          </span>
                          <span className="h-0.5 flex-1 rounded-full bg-gradient-to-r from-[color:var(--color-secondary)] to-transparent"></span>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-[color:var(--color-ink)]">
                            {item.title}
                          </p>
                          <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {isDisabled ? (
                        <span className="inline-flex w-full items-center justify-center rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold text-[color:var(--color-muted)]">
                          {item.cta}
                        </span>
                      ) : (
                        <a
                          href={item.href}
                          className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--color-secondary)]"
                        >
                          {item.cta}
                        </a>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="dokumentasi" className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[color:var(--color-secondary)]">
              Dokumentasi
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Suasana BEC Sebelumnya
            </h2>
            <p className="mt-4 text-[color:var(--color-muted)]">
              Highlight dari presentasi, expo, hingga awarding night.
            </p>
          </FadeIn>

          <div className="mt-12">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.6 },
              }}
            >
              {gallery.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="group relative overflow-hidden rounded-[32px]">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"></div>
                    <div className="absolute bottom-5 left-5">
                      <p className="text-sm uppercase tracking-[2px] text-white/70">
                        BEC Documentation
                      </p>
                      <p className="text-lg font-semibold text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section id="sponsorship" className="relative py-24 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-12 h-64 w-64 rounded-full bg-[#2dd4bf]/25 blur-[120px]"></div>
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-[#fbbf24]/20 blur-[120px]"></div>
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="flex flex-col-reverse gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[color:var(--color-secondary)]">
                Sponsorship
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Bersama Mewujudkan Indonesia Emas 2045
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-12 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="glass-card relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#2dd4bf]/40 to-[#fbbf24]/30 blur-2xl"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f766e] to-[#2dd4bf] text-white shadow-lg">
                    <Handshake size={26} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-[color:var(--color-secondary)]">
                      Kontak Sponsorship
                    </p>
                    <h3 className="text-2xl font-semibold">Tim Sponsorship BEC 2026</h3>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {sponsorshipContacts.map((contact) => (
                    <div
                      key={`sponsorship-${contact.name}`}
                      className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm"
                    >
                      <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                        {contact.name}
                      </p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[2px] text-[color:var(--color-secondary)]">
                        WhatsApp
                      </p>
                      <p className="text-sm text-[color:var(--color-muted)]">
                        {contact.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#0f766e]/30 to-[#2dd4bf]/20 blur-2xl"></div>
              <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-[color:var(--color-secondary)]">
                      Proposal
                    </p>
                    <h3 className="text-2xl font-semibold">Sponsorship Kit 2026</h3>
                    <p className="text-sm text-[color:var(--color-muted)]">
                      Detail paket kemitraan, benefit, dan peluang kolaborasi untuk BEC 2026.
                    </p>
                  </div>
                </div>
                <a
                  href={WEB_CONFIG.links.proposalSponsorship}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-primary)] px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--color-secondary)]"
                >
                  Lihat Proposal
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer id="kontak" className="bg-[color:var(--color-primary)] py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[3px] text-white/70">
                Contact Person
              </p>
              <h2 className="mt-4 text-2xl font-semibold">BEC 2026</h2>
              <div className="mt-6 space-y-6 text-sm text-white/80">
                {contactGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs uppercase tracking-[2px] text-white/60">
                      {group.title}
                    </p>
                    <div className="mt-2 space-y-2">
                      {group.contacts.map((contact) => (
                        <p key={`${group.title}-${contact.name}`}>{formatContact(contact)}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[3px] text-white/70">
                Sosial Media
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                {socials.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--color-accent)]"></span>
                    <span>
                      {item.label}: {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/20 pt-6 text-sm text-white/60">
            <p>© 2026 RKIM Universitas Brawijaya - Brawijaya Essay Competition.</p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
