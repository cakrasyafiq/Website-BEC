import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const navItems = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Ketentuan', href: '#ketentuan' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Berkas', href: '#berkas' },
  { label: 'Dokumentasi', href: '#dokumentasi' },
  { label: 'Sponsorship', href: '#sponsorship' },
  { label: 'Kontak', href: '#kontak' },
];

const heroStats = [
  { value: '10+', label: 'Subtema Esai' },
  { value: '100+', label: 'Peserta Nasional' },
  { value: '6', label: 'Tahapan Utama' },
];

const requirementCards = [
  {
    icon: GraduationCap,
    title: 'Mahasiswa aktif',
    desc: 'D3, D4, atau S1 dari seluruh universitas di Indonesia.',
  },
  {
    icon: Users,
    title: 'Tim 2-3 orang',
    desc: 'Satu universitas, lintas jurusan diperbolehkan.',
  },
  {
    icon: BadgeCheck,
    title: 'Karya orisinal',
    desc: 'Belum pernah dilombakan, bebas plagiarisme, dan etis.',
  },
  {
    icon: FileText,
    title: 'Format resmi',
    desc: 'Mengikuti template, gaya sitasi, dan format penulisan.',
  },
  {
    icon: ShieldCheck,
    title: 'Etika akademik',
    desc: 'Tidak mengandung SARA, hoaks, atau unsur merugikan.',
  },
  {
    icon: BookOpen,
    title: 'Berbasis riset',
    desc: 'Solusi didukung data, referensi kredibel, dan analisis.',
  },
];

const timeline = [
  {
    date: '25 Mei - 15 Juni 2026',
    title: 'Pendaftaran & Pengumpulan Abstrak',
    desc: 'Daftar online dan unggah abstrak pertama.',
  },
  {
    date: '19 Juni 2026',
    title: 'Pengumuman Lolos Abstrak',
    desc: 'Seleksi abstrak dan pengumuman tahap lanjut.',
  },
  {
    date: 'Juni - Juli 2026',
    title: 'Pengumpulan Full Paper',
    desc: 'Submit full paper sesuai buku panduan.',
  },
  {
    date: '18 Agustus 2026',
    title: 'Pengumuman Finalis',
    desc: 'Tim finalis diumumkan secara resmi.',
  },
  {
    date: '5 September 2026',
    title: 'Grand Final',
    desc: 'Presentasi offline dan sesi tanya jawab.',
  },
  {
    date: '6 September 2026',
    title: 'Expo, Seminar & Awarding',
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
    href: '#kontak',
  },
  {
    icon: FileText,
    title: 'Buku Panduan',
    desc: 'Panduan resmi, format penulisan, dan rubric penilaian.',
    color: 'from-[#2dd4bf] to-[#fbbf24]',
    cta: 'Unduh Panduan',
    status: 'active',
    href: '#kontak',
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

const sponsors = [
  'Bank Partner',
  'Tech Partner',
  'Media Partner',
  'Education Partner',
  'Community Partner',
  'Startup Partner',
  'Research Partner',
  'Innovation Partner',
];

const socials = [
  { label: 'Instagram', value: '@bec2026' },
  { label: 'TikTok', value: '@bec2026' },
  { label: 'LinkedIn', value: 'BEC 2026' },
  { label: 'Email', value: 'bec2026@example.com' },
];

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
      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 pt-5">
          <nav
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
              isScrolled
                ? 'bg-white/85 shadow-[var(--shadow-soft)] backdrop-blur-xl'
                : 'bg-white/50 backdrop-blur-md'
            }`}
          >
            <a href="#hero" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-primary)] text-white">
                <Sparkles size={24} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[3px] text-[color:var(--color-secondary)]">
                  BEC 2026
                </p>
                <p className="text-lg font-semibold">Brawijaya Essay</p>
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
        className={`fixed inset-0 z-50 bg-[rgba(15,118,110,0.95)] backdrop-blur-xl transition duration-300 lg:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
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
          <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-[#2dd4bf]/35 blur-[120px] animate-[float_14s_ease-in-out_infinite]"></div>
          <div className="absolute left-0 top-16 h-[320px] w-[320px] rounded-full bg-[#fbbf24]/25 blur-[110px] animate-[float_12s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 right-16 h-[280px] w-[280px] rounded-full bg-[#0f766e]/25 blur-[110px] animate-[float_16s_ease-in-out_infinite]"></div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <FadeIn className="space-y-8">
            <div className="glass-pill inline-flex items-center gap-3 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-[color:var(--color-primary)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-accent)]"></span>
              Lomba Karya Tulis Ilmiah Nasional
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                Brawijaya Essay
                <span className="block text-gradient">Competition 2026</span>
              </h1>
              <p className="max-w-xl text-lg text-[color:var(--color-muted)] md:text-xl text-balance">
Empowering Young Changemakers to Break Boundaries and Create Impact through Innovation, Collaboration, and Visionary Thinking Towards Indonesia Emas 2045
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
                  href="#berkas"
                  className="rounded-full bg-[color:var(--color-accent)] px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
                >
                  Daftar Sekarang
                </a>
                <a
                  href="#berkas"
                  className="rounded-full border border-white/70 bg-white/60 px-5 py-2 text-sm font-semibold text-[color:var(--color-primary)] transition hover:-translate-y-0.5"
                >
                  Lihat Panduan
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item.label} className="glass-card rounded-2xl p-4">
                  <p className="text-2xl font-semibold text-[color:var(--color-primary)]">
                    {item.value}
                  </p>
                  <p className="text-sm text-[color:var(--color-muted)]">
                    {item.label}
                  </p>
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
                Brawijaya Essay Competition 2026 adalah kompetisi esai tingkat nasional yang diselenggarakan oleh Riset dan Karya Ilmiah Mahasiswa Universitas Brawijaya sebagai wadah kolaboratif bagi generasi muda Indonesia untuk menuangkan gagasan kritis, inovatif, dan solutif. Kompetisi ini bertujuan untuk mendorong mahasiswa untuk aktif menjadi pelopor inovasi dan penggerak transformasi sosial. Melalui ajang ini, peserta ditantang untuk mengembangkan kemampuan berpikir kritis, kreativitas, dan kompetensi ilmiah dalam menawarkan solusi berbasis ilmu pengetahuan dan teknologi demi menghadapi tantangan global sekaligus mendukung terwujudnya visi Indonesia Emas 2045.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Globe,
                title: 'Tema Besar',
                subtitle: 'Indonesia Emas 2045',
                color: 'from-[#0f766e] to-[#2dd4bf]',
              },
              {
                icon: FileCheck,
                title: 'Tahapan',
                subtitle: 'Seleksi abstrak, full paper, dan presentasi',
                color: 'from-[#2dd4bf] to-[#fbbf24]',
              },
              {
                icon: Trophy,
                title: 'Puncak Acara',
                subtitle: 'Expo karya dan awarding nasional',
                color: 'from-[#fbbf24] to-[#0f766e]',
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div className="glass-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-20" style={{backgroundImage: `linear-gradient(135deg, #2dd4bf, #fbbf24)`}}></div>
                    
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

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {requirementCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="glass-card group rounded-3xl p-6 transition hover:-translate-y-1"
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

          <div className="relative mt-12">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/70 lg:block"></div>
            <div className="grid gap-6 lg:grid-cols-6">
              {timeline.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.05}>
                  <div className="glass-card relative rounded-3xl p-5 pt-8">
                    <div className="absolute -top-4 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[2px] text-[color:var(--color-secondary)]">
                      {item.date}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="berkas" className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[color:var(--color-secondary)]">
                Berkas
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Akses Berkas & Pengumpulan
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
                    className={`glass-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 ${
                      isDisabled
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
                        className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition-all duration-300 ${
                          isDisabled ? '' : 'group-hover:scale-110'
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

      <section id="sponsorship" className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[color:var(--color-secondary)]">
                Sponsorship
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Bersama Mitra Terbaik
              </h2>
            </div>
            <p className="max-w-xl text-[color:var(--color-muted)]">
              Ruang kolaborasi strategis dengan institusi dan brand pendukung
              kompetisi.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((name) => (
              <div
                key={name}
                className="glass-card group flex items-center justify-center rounded-3xl p-6 text-center transition hover:-translate-y-1"
              >
                <span className="text-sm font-semibold uppercase tracking-[2px] text-slate-500 transition group-hover:text-[color:var(--color-primary)]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="kontak" className="bg-[color:var(--color-primary)] py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[3px] text-white/70">
                Narahubung
              </p>
              <h2 className="mt-4 text-2xl font-semibold">BEC 2026</h2>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                <p>WhatsApp PIC 1: +62 XXX XXX XXXX</p>
                <p>WhatsApp PIC 2: +62 XXX XXX XXXX</p>
                <p>Email: bec2026@example.com</p>
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
    </div>
  );
}
