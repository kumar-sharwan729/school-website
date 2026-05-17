import { useEffect, useState } from 'react';

export default function SchoolWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let count = Number(localStorage.getItem('schoolVisitors') || 0);

    if (!sessionStorage.getItem('visited')) {
      count += 1;
      localStorage.setItem('schoolVisitors', count);
      sessionStorage.setItem('visited', 'true');
    }

    setVisitorCount(count);
  }, []);

  const events = [
    {
      title: 'Annual Function',
      image:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Science Fair',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Sports Day',
      image:
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Art Competition',
      image:
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <div
      className={`${
        darkMode
          ? 'bg-black text-white'
          : 'bg-gray-100 text-black'
      } min-h-screen overflow-x-hidden transition-all duration-500`}
    >
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-violet-950 to-blue-950" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center text-3xl shadow-2xl">
              🎓
            </div>

            <div>
              <h1 className="text-2xl font-black">Noida Future School</h1>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} `}>Future Begins Here</p>
            </div>
          </div>

          <ul className="hidden lg:flex gap-8 font-medium">
            <li><a href="#home" className="hover:text-violet-400">Home</a></li>
            <li><a href="#about" className="hover:text-violet-400">About</a></li>
            <li><a href="#events" className="hover:text-violet-400">Events</a></li>
            <li><a href="#gallery" className="hover:text-violet-400">Gallery</a></li>
            <li><a href="#admission" className="hover:text-violet-400">Admission</a></li>
            <li><a href="#contact" className="hover:text-violet-400">Contact</a></li>
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-5">
            <a href="#home" className="block">Home</a>
            <a href="#about" className="block">About</a>
            <a href="#events" className="block">Events</a>
            <a href="#gallery" className="block">Gallery</a>
            <a href="#admission" className="block">Admission</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 mb-7">
            ✨ India's Modern Smart School
          </div>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            Build Your Child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Bright Future</span>
          </h2>

          <p className={`text-lg leading-8 mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Premium education experience with innovation, sports, creativity and advanced digital learning.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 hover:scale-105 transition-all shadow-2xl flex items-center gap-2">
              Explore Campus ➜
            </button>

            <button className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all">
              Admission Open
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-violet-500 blur-3xl opacity-20 rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1400&auto=format&fit=crop"
            alt="school"
            className="rounded-[40px] border border-white/10 shadow-2xl hover:scale-105 duration-500"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-2xl rounded-[45px] p-8 lg:p-14 border border-white/10 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 mb-6">
              🏫 About Our School
            </div>

            <h3 className="text-4xl lg:text-6xl font-black leading-tight mb-8">
              Inspiring Young Minds For A <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Better Tomorrow</span>
            </h3>

            <p className={`text-lg leading-9 mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Noida Future School is one of the leading modern educational institutions dedicated to academic excellence, innovation, creativity and holistic student development. We believe education is not only about books, but also about building confidence, leadership and strong values.
            </p>

            <p className={`text-lg leading-9 mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Our campus features smart classrooms, advanced science and computer labs, sports facilities, digital learning systems and experienced teachers who help students achieve success in academics as well as extracurricular activities.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center hover:scale-105 transition-all duration-300">
                <h4 className="text-4xl font-black text-violet-400 mb-2">15+</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Years Experience</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center hover:scale-105 transition-all duration-300">
                <h4 className="text-4xl font-black text-cyan-400 mb-2">5000+</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Happy Students</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center hover:scale-105 transition-all duration-300">
                <h4 className="text-4xl font-black text-pink-400 mb-2">100%</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Modern Learning</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative group overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=100"
                alt="about-school"
                className="w-full h-[650px] object-cover group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-4 w-fit">
                  ✨ Modern Smart Campus
                </div>

                <h4 className="text-4xl font-black mb-3 leading-tight">
                  Smart Education Campus
                </h4>
                <p className="text-gray-200 leading-8 text-lg max-w-lg">
                  Building future leaders with innovation, discipline and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20 overflow-hidden">
        <div className="text-center mb-14">
          <h3 className="text-5xl font-black mb-4">Premium School Events</h3>
          <p className="text-gray-400">Interactive school activities and celebrations</p>
        </div>

        <div className="flex gap-8 animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused] px-6 w-max">
          {[...events, ...events].map((event, index) => (
            <div
              key={index}
              className="min-w-[340px] rounded-[35px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl hover:-translate-y-4 hover:scale-105 transition-all duration-500 shadow-2xl"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h4 className="text-3xl font-bold">{event.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h3 className="text-5xl font-black mb-4">School Gallery</h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Beautiful campus memories</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {gallery.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[30px] border border-white/10 shadow-2xl group"
            >
              <img
                src={img}
                alt="gallery"
                className="h-80 w-full object-cover group-hover:scale-110 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Admission Form */}
      <section id="admission" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-5xl font-black mb-6">Admission Form</h3>
            <p className={`text-lg leading-8 mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Fill the admission form for new student enrollment.
            </p>

            <div className="space-y-5 text-lg">
              <div className="flex items-center gap-4">
                <span className="text-violet-400 text-2xl">📞</span>
                +91 9876543210
              </div>

              <div className="flex items-center gap-4">
                <span className="text-violet-400 text-2xl">✉️</span>
                info@noidafutureschool.com
              </div>

              <div className="flex items-center gap-4">
                <span className="text-violet-400 text-2xl">📍</span>
                Sector 62, Noida
              </div>
            </div>
          </div>

          <form className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl space-y-6">
            <input type="text" placeholder="Student Name" className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none" />
            <input type="text" placeholder="Parent Name" className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none" />
            <input type="text" placeholder="Mobile Number" className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none" />
            <textarea rows="5" placeholder="Message" className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none"></textarea>

            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 text-lg font-bold hover:scale-[1.02] transition-all shadow-2xl">
              Submit Admission Form
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-2xl p-10 shadow-2xl">
          <div className="flex flex-wrap justify-between gap-8 items-center">
            <div>
              <h3 className="text-5xl font-black mb-4">Connect With Us</h3>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Contact us on social platforms anytime.
              </p>
            </div>

            <div className="flex gap-5">
              <a href="#" className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition-all shadow-2xl">
                <span className="text-2xl font-bold">💬</span>
              </a>

              <a href="#" className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center hover:scale-110 transition-all shadow-2xl">
                <span className="text-2xl font-bold">📸</span>
              </a>

              <a href="#" className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center hover:scale-110 transition-all shadow-2xl">
                <span className="text-2xl font-bold">📘</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            title="Noida Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.355%2C28.610%2C77.385%2C28.640&layer=mapnik&marker=28.627%2C77.370"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-black/50 backdrop-blur-2xl">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mb-14">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center text-4xl shadow-2xl">
                  🎓
                </div>

                <div>
                  <h4 className="text-3xl font-black">Noida Future School</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                    Future Begins Here
                  </p>
                </div>
              </div>

              <p className={`leading-8 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Empowering students with modern education, smart technology, innovation and leadership skills for a brighter tomorrow.
              </p>

              <div className="flex gap-4 mt-8">
                <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:scale-110 hover:bg-green-500 transition-all duration-300 shadow-xl">
                  💬
                </a>

                <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:scale-110 hover:bg-pink-500 transition-all duration-300 shadow-xl">
                  📸
                </a>

                <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:scale-110 hover:bg-blue-500 transition-all duration-300 shadow-xl">
                  📘
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-2xl font-black mb-6">Quick Links</h5>

              <div className="space-y-4">
                {['Home', 'About', 'Events', 'Gallery', 'Admission', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`block text-lg hover:text-violet-400 hover:translate-x-2 transition-all duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    ➜ {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-2xl font-black mb-6">Contact Info</h5>

              <div className="space-y-5 text-lg">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Sector 62, Noida, Uttar Pradesh
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-2xl">📞</span>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    +91 9876543210
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-2xl">✉️</span>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    info@noidafutureschool.com
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-2xl font-black mb-6">Live Analytics</h5>

              <div className="bg-gradient-to-br from-violet-500/20 to-cyan-500/10 border border-white/10 rounded-[35px] p-8 shadow-2xl backdrop-blur-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xl font-semibold">👀 Visitors</p>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                    Live
                  </span>
                </div>

                <h6 className="text-6xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  {visitorCount}
                </h6>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Students and parents exploring our school website daily.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} text-center md:text-left`}>
              © 2026 Noida Future School • All Rights Reserved
            </p>

            <div className="flex items-center gap-3 text-center">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                Designed By Sharwan Kumar ❤️
              </span>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
