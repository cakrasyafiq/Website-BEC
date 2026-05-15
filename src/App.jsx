export default function BEC2026Website() {
  const scienceThemes = [
    {
      title: 'Kesehatan',
      desc: 'Inovasi kesehatan digital, preventif, nutrisi, AI kesehatan, telemedicine, dan solusi kesehatan masyarakat.',
    },
    {
      title: 'Lingkungan',
      desc: 'Solusi perubahan iklim, pengolahan sampah, smart city hijau, ekonomi sirkular, dan konservasi lingkungan.',
    },
    {
      title: 'Energi Terbarukan',
      desc: 'Energi surya, biomassa, piezoelectric, hydrogen energy, dan teknologi energi masa depan.',
    },
    {
      title: 'Teknologi',
      desc: 'AI, IoT, smart system, blockchain, cybersecurity, dan teknologi transformasi digital.',
    },
    {
      title: 'Pangan',
      desc: 'Ketahanan pangan, pangan alternatif, urban farming, precision agriculture, dan food technology.',
    },
  ];

  const socialThemes = [
    {
      title: 'Psikologi',
      desc: 'Mental health, kesejahteraan generasi muda, kesehatan psikologis digital society.',
    },
    {
      title: 'Pendidikan',
      desc: 'Pendidikan adaptif, AI learning, pendidikan inklusif, transformasi pembelajaran.',
    },
    {
      title: 'Pariwisata',
      desc: 'Smart tourism, sustainable tourism, digital tourism, dan revitalisasi budaya lokal.',
    },
    {
      title: 'Ekonomi',
      desc: 'Ekonomi digital, UMKM, green economy, startup innovation, dan ekonomi berkelanjutan.',
    },
    {
      title: 'Politik',
      desc: 'Good governance, civic technology, transparansi digital, dan partisipasi generasi muda.',
    },
  ];

  const timeline = [
    {
      date: '25 Mei – 15 Juni 2026',
      title: 'Pendaftaran & Pengumpulan Abstrak',
    },
    {
      date: '19 Juni 2026',
      title: 'Pengumuman Lolos Abstrak',
    },
    {
      date: 'Juni – Juli 2026',
      title: 'Pengumpulan Full Paper',
    },
    {
      date: '18 Agustus 2026',
      title: 'Pengumuman Finalis',
    },
    {
      date: '5 September 2026',
      title: 'Grand Final',
    },
    {
      date: '6 September 2026',
      title: 'Expo, Seminar & Awarding',
    },
  ];

  const faq = [
    {
      q: 'Apakah lomba berbayar?',
      a: 'Abstrak gratis, full paper berbayar.',
    },
    {
      q: 'Apakah boleh beda jurusan?',
      a: 'Boleh, selama satu universitas.',
    },
    {
      q: 'Apakah final dilakukan online?',
      a: 'Tidak. Final dilakukan secara offline.',
    },
    {
      q: 'Berapa jumlah anggota?',
      a: '2–3 orang per tim.',
    },
    {
      q: 'Apakah karya harus orisinal?',
      a: 'Ya, wajib orisinal dan bebas plagiarisme.',
    },
  ];

  const registrationSteps = [
    'Follow Instagram & TikTok BEC',
    'Sebarkan poster ke minimal 3 grup',
    'Upload twibbon di Instagram',
    'Isi formulir pendaftaran',
    'Upload abstrak dan berkas',
    'Konfirmasi ke narahubung',
  ];

  return (
    <div className="bg-gradient-to-b from-[#DFF2EA] to-[#F1F6ED] text-[#374151] min-h-screen overflow-x-hidden scroll-smooth">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .glass {
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.3);
        }

        .glow {
          box-shadow: 0 0 40px rgba(82,198,164,0.35);
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#52C6A4] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#2A7ABF] rounded-full blur-3xl"></div>
      </div>

      <nav className="sticky top-0 z-50 px-6 py-5">
        <div className="max-w-7xl mx-auto glass rounded-full px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#52C6A4] flex items-center justify-center text-white font-bold text-xl glow">
              ✦
            </div>
            <h1 className="font-black text-2xl text-[#00635D]">BEC 2026</h1>
          </div>

          <div className="hidden md:flex gap-8 text-lg">
            {['Home', 'About', 'Theme', 'Timeline', 'Guidelines', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#00635D] transition-all duration-300 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="bg-[#00635D] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all glow">
            Register
          </button>
        </div>
      </nav>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="absolute inset-0 grid-bg"></div>

        <div className="relative z-10 max-w-6xl text-center">
          <div className="inline-block bg-[#CAE7DC] px-6 py-3 rounded-full text-[#52C6A4] font-bold tracking-[4px] uppercase mb-8">
            Lomba Karya Tulis Ilmiah Nasional
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 text-[#00635D]">
            Brawijaya Essay
            <br />
            <span className="bg-gradient-to-r from-[#2A7ABF] to-[#52C6A4] bg-clip-text text-transparent">
              Competition
            </span>
          </h1>

          <p className="max-w-4xl mx-auto text-xl md:text-3xl leading-relaxed mb-12 text-[#374151]">
            “Empowering Young Changemakers to Break Boundaries and Create
            Impact through Innovation, Collaboration, and Visionary Thinking
            Towards Indonesia Emas 2045”
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-[#52C6A4] text-white px-10 py-5 rounded-3xl text-xl font-bold glow hover:scale-105 transition-all">
              Register Now
            </button>

            <button className="glass px-10 py-5 rounded-3xl text-xl font-bold hover:scale-105 transition-all">
              Download Guidebook
            </button>

            <button className="border-2 border-[#00635D] text-[#00635D] px-10 py-5 rounded-3xl text-xl font-bold hover:bg-[#00635D] hover:text-white transition-all">
              Explore Themes
            </button>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-8">
            {[
              'Innovation.',
              'Collaboration.',
              'Visionary Thinking.',
            ].map((item) => (
              <div
                key={item}
                className="glass px-8 py-5 rounded-2xl text-2xl font-bold text-[#00635D]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#52C6A4] font-bold uppercase tracking-[4px] mb-4">
              About BEC
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-[#00635D] mb-6">
              About Competition
            </h2>
            <p className="max-w-5xl mx-auto text-xl leading-relaxed">
              Brawijaya Essay Competition (BEC) 2026 merupakan lomba dalam
              bentuk kompetisi esai berskala nasional yang diselenggarakan oleh
              Riset dan Karya Ilmiah Universitas Brawijaya (RKIM UB).
              Kompetisi ini menjadi wadah bagi mahasiswa untuk menciptakan
              inovasi dan solusi nyata menuju Indonesia Emas 2045.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-20">
            {[
              'Mengembangkan pola pikir kritis',
              'Mendorong inovasi mahasiswa',
              'Menyelesaikan masalah nasional',
              'Ruang kontribusi generasi muda',
              'Indonesia Emas 2045',
            ].map((item) => (
              <div
                key={item}
                className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#52C6A4] mb-6"></div>
                <h3 className="font-bold text-xl text-[#00635D]">{item}</h3>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ['National Scale', 'Indonesia'],
              ['10 Finalists', 'Best Teams'],
              ['10 Subthemes', 'Innovative Ideas'],
              ['100+', 'Participants'],
            ].map(([title, sub]) => (
              <div key={title} className="glass rounded-3xl p-10 text-center glow">
                <h3 className="text-4xl font-black text-[#00635D] mb-3">
                  {title}
                </h3>
                <p className="text-lg text-[#374151]">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="theme" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#00635D] mb-8">
              Theme & Subtheme
            </h2>

            <div className="glass rounded-[40px] p-10 max-w-5xl mx-auto">
              <p className="text-2xl leading-relaxed font-semibold bg-gradient-to-r from-[#2A7ABF] to-[#52C6A4] bg-clip-text text-transparent">
                “Empowering Young Changemakers to Break Boundaries and Create
                Impact through Innovation, Collaboration, and Visionary Thinking
                Towards Indonesia Emas 2045”
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-4xl font-black text-[#00635D] mb-10">
              Sains & Teknologi
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scienceThemes.map((item) => (
                <div
                  key={item.title}
                  className="glass rounded-[32px] p-8 hover:-translate-y-3 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#2A7ABF] to-[#52C6A4] mb-6"></div>
                  <h4 className="text-3xl font-black text-[#00635D] mb-4">
                    {item.title}
                  </h4>
                  <p className="leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-black text-[#00635D] mb-10">
              Sosial & Humaniora
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialThemes.map((item) => (
                <div
                  key={item.title}
                  className="glass rounded-[32px] p-8 hover:-translate-y-3 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#52C6A4] mb-6"></div>
                  <h4 className="text-3xl font-black text-[#00635D] mb-4">
                    {item.title}
                  </h4>
                  <p className="leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#00635D] mb-6">
              Competition Timeline
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Jangan sampai terlewat deadline penting BEC 2026.
            </p>
          </div>

          <div className="glass rounded-[40px] p-10 mb-16 text-center glow">
            <p className="uppercase tracking-[4px] text-[#52C6A4] font-bold mb-4">
              Countdown To Deadline
            </p>
            <h3 className="text-6xl font-black text-[#00635D]">24 Days</h3>
          </div>

          <div className="overflow-x-auto">
            <div className="flex gap-8 min-w-max pb-4">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-[32px] p-8 w-[320px] flex-shrink-0 hover:-translate-y-2 transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-[#52C6A4] text-white flex items-center justify-center text-2xl font-black mb-6">
                    {index + 1}
                  </div>

                  <p className="text-[#2A7ABF] font-bold mb-3">{item.date}</p>
                  <h4 className="text-2xl font-black text-[#00635D] leading-snug">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="guidelines" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#00635D] mb-6">
              Registration Flow
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {registrationSteps.map((item, index) => (
              <div
                key={item}
                className="glass rounded-[32px] p-8 relative overflow-hidden"
              >
                <div className="absolute -top-5 -right-5 text-[120px] font-black text-[#CAE7DC]">
                  {index + 1}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#00635D] mb-6"></div>
                  <h3 className="text-2xl font-black text-[#00635D]">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="glass rounded-[40px] p-10">
              <h3 className="text-4xl font-black text-[#00635D] mb-8">
                Ketentuan Umum
              </h3>

              <ul className="space-y-5 text-xl">
                {[
                  'Orisinal',
                  'Tidak plagiarisme',
                  'Tidak mengandung SARA',
                  'Belum pernah dilombakan',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-[#52C6A4]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-[40px] p-10 overflow-x-auto">
              <h3 className="text-4xl font-black text-[#00635D] mb-8">
                Penilaian
              </h3>

              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#CAE7DC]">
                    <th className="py-4 text-xl">Aspek</th>
                    <th className="py-4 text-xl">Bobot</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Gagasan', '40%'],
                    ['Format Penulisan', '20%'],
                    ['Data & Sumber', '20%'],
                    ['Orisinalitas', '20%'],
                  ].map(([a, b]) => (
                    <tr key={a} className="border-b border-[#CAE7DC]">
                      <td className="py-5 text-lg">{a}</td>
                      <td className="py-5 text-lg font-bold text-[#00635D]">
                        {b}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#00635D] mb-6">
              Final Stage
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Grand Final',
                desc: 'Presentasi offline, 8 menit presentasi, 10 menit tanya jawab.',
              },
              {
                title: 'Poster Competition',
                desc: 'Poster ukuran A3, format PNG & PDF, upload poster dan PPT.',
              },
              {
                title: 'Expo',
                desc: 'Booth exhibition, presentasi karya, prototipe dan media digital.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass rounded-[40px] p-10 glow hover:-translate-y-2 transition-all"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-[#2A7ABF] to-[#52C6A4] mb-8"></div>
                <h3 className="text-4xl font-black text-[#00635D] mb-5">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#00635D] mb-6">
              Prize & Benefits
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="glass rounded-[40px] p-10">
              <h3 className="text-4xl font-black text-[#00635D] mb-8">
                Awards
              </h3>

              <div className="space-y-4">
                {[
                  'Juara 1',
                  'Juara 2',
                  'Juara 3',
                  'Harapan 1 & 2',
                  'Best Presentation',
                  'Best Essay',
                  'Favorite Poster',
                  'Favorite Booth',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white/50 rounded-2xl px-6 py-5 font-semibold text-lg"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-[40px] p-10">
              <h3 className="text-4xl font-black text-[#00635D] mb-8">
                Benefits
              </h3>

              <div className="grid grid-cols-2 gap-5">
                {[
                  'Sertifikat nasional',
                  'Relasi nasional',
                  'Exposure karya',
                  'Pengalaman kompetisi',
                  'Portofolio prestisius',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-gradient-to-r from-[#2A7ABF] to-[#52C6A4] text-white rounded-3xl p-6 font-bold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#00635D] mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faq.map((item) => (
              <div key={item.q} className="glass rounded-[32px] p-8">
                <h3 className="text-2xl font-black text-[#00635D] mb-4">
                  {item.q}
                </h3>
                <p className="text-lg">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#00635D] mb-6">
              Gallery
            </h2>
          </div>

          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="glass rounded-[32px] p-6 break-inside-avoid"
              >
                <div className="h-64 rounded-3xl bg-gradient-to-br from-[#2A7ABF] to-[#52C6A4] mb-5"></div>
                <h3 className="text-2xl font-black text-[#00635D] mb-2">
                  BEC Documentation
                </h3>
                <p>Final presentation, awarding, expo booth, dan seminar.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[50px] p-14 text-center glow">
            <h2 className="text-5xl md:text-7xl font-black text-[#00635D] mb-8">
              Be The Next Changemaker
            </h2>

            <p className="max-w-4xl mx-auto text-2xl leading-relaxed mb-10">
              Join Brawijaya Essay Competition 2026 dan jadilah bagian dari
              generasi inovator Indonesia menuju Indonesia Emas 2045.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <button className="bg-[#00635D] text-white px-10 py-5 rounded-3xl text-xl font-bold glow hover:scale-105 transition-all">
                Join Competition
              </button>

              <button className="bg-[#52C6A4] text-white px-10 py-5 rounded-3xl text-xl font-bold hover:scale-105 transition-all">
                Submit Your Idea
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-6 pb-10">
        <div className="max-w-7xl mx-auto glass rounded-[40px] p-12">
          <div className="grid lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-3xl font-black text-[#00635D] mb-5">
                BEC 2026
              </h3>

              <p className="leading-relaxed">
                National Essay Competition by RKIM Universitas Brawijaya.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-black text-[#00635D] mb-5">
                Quick Links
              </h4>

              <ul className="space-y-3">
                {['Home', 'Theme', 'Timeline', 'FAQ'].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-black text-[#00635D] mb-5">
                Contact Person
              </h4>

              <div className="space-y-4">
                <div>
                  <p className="font-bold">Fahri</p>
                  <p>Sains & Teknologi</p>
                </div>

                <div>
                  <p className="font-bold">Dera</p>
                  <p>Sosial & Humaniora</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-black text-[#00635D] mb-5">
                Location
              </h4>

              <p>
                Gedung Widyaloka
                <br />
                Universitas Brawijaya
                <br />
                Malang
              </p>
            </div>
          </div>

          <div className="border-t border-[#CAE7DC] mt-10 pt-8 text-center">
            <p>© RKIM UB 2026 — Brawijaya Essay Competition</p>
          </div>
        </div>
      </footer>
    </div>
  );
}