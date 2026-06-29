import React from 'react';
import { Mail, Phone, MapPin, Globe, Clock, ArrowRight, BookOpen, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'All Courses', to: '/courses' },
    { label: 'Free Quizzes', to: '/quizeDetail?type=Free' },
    { label: 'Premium Tests', to: '/quizeDetail?type=Paid' },
    { label: 'Success Stories', to: '/success-board' },
  ];

  const examLinks = [
    { label: 'Class 6 - 12', href: '/courses?category=School' },
    { label: 'Banking Exams', href: '/courses?category=Banking' },
    { label: 'SSC Exams', href: '/courses?category=SSC' },
    { label: 'Railways', href: '/courses?category=Railways' },
    { label: 'UPSC', href: '/courses?category=UPSC' },
    { label: 'State PCS', href: '/courses?category=State PCS' },
    { label: 'Defence', href: '/courses?category=Defence' },
  ];

  const socialLinks = [
    {
      label: 'Facebook',
      href: '#',
      icon: (
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      ),
    },
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5.838a4.162 4.162 0 1 0 0 8.324 4.162 4.162 0 0 0 0-8.324zm0 6.915a2.753 2.753 0 1 1 0-5.506 2.753 2.753 0 0 1 0 5.506zm5.222-6.52a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z" />
      ),
    },
    {
      label: 'YouTube',
      href: '#',
      icon: (
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      ),
    },
    {
      label: 'Twitter',
      href: '#',
      icon: (
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      ),
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      {/* ── Newsletter CTA Strip ── */}
      <div className="bg-indigo-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={20} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">
                Start Learning
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-sm text-slate-600 max-w-md">
              Subscribe for daily study tips, exam notifications, and career guidance delivered straight to your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto shadow-sm rounded-lg overflow-hidden border border-slate-200 bg-white"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 w-full md:w-64 text-sm outline-none text-slate-900 placeholder-slate-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-bold text-sm flex items-center gap-2 whitespace-nowrap hover:bg-indigo-700 transition-colors"
            >
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* ── Brand Column ── */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center shadow-sm">
                <GraduationCap size={24} className="text-indigo-600" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900 leading-tight">
                  Task <span className="text-indigo-600">Mentors</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              India's premier learning platform. We shape future leaders with expert faculty, comprehensive interactive courses, and mock tests.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all shadow-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-5 pb-3 border-b border-slate-200">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    <ChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Exam Prep ── */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-5 pb-3 border-b border-slate-200">
              Categories
            </h3>
            <ul className="flex flex-col gap-3">
              {examLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    <ChevronRight size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact & Hours ── */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-5 pb-3 border-b border-slate-200">
              Contact Us
            </h3>

            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-indigo-600" />
                </div>
                <span className="text-sm text-slate-600 leading-relaxed">
                  Innovation Hub, Level 4<br />
                  Tech Park, Main Road<br />
                  New Delhi, 110001
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-indigo-600" />
                </div>
                <a href="tel:9024009907" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                  +91 9024009907
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-indigo-600" />
                </div>
                <a href="mailto:taskmentorshub@gmail.com" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors break-all">
                  taskmentorshub@gmail.com
                </a>
              </li>
            </ul>

            {/* Working Hours Card */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-indigo-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-slate-900">
                  Support Hours
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-slate-500">Mon – Sat</span>
                <span className="text-xs font-bold text-slate-700">9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Sunday</span>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded uppercase tracking-wider">
                  Closed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright Bar ── */}
      <div className="bg-slate-900 py-5 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-xs text-slate-400 m-0">
              &copy; {new Date().getFullYear()} Task Mentors. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 m-0">
              Designed & Developed securely for the next generation of learners.
            </p>
          </div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
