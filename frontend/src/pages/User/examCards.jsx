import React, { useState } from "react";
import {
  Landmark,
  ShieldCheck,
  Train,
  Award,
  Shield,
  GraduationCap,
  FileCheck,
  ArrowRight,
  Sparkles,
  Search,
  BookOpen,
  Trophy,
} from "lucide-react";

const examCategories = [
  {
    id: "banking",
    title: "Banking Exams",
    subtitle: "Navigate the world of finance & banking",
    icon: Landmark,
    exams: ["SBI PO", "IBPS Clerk", "RBI Grade B", "IBPS SO"],
    coursesCount: 24,
    testsCount: 180,
    accentGradient: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-500/10 to-teal-500/5",
    shadow: "hover:shadow-emerald-500/20",
    borderColor: "border-emerald-100",
    hoverBorderColor: "group-hover:border-emerald-400",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    textColor: "text-emerald-700",
    examBadge: "text-emerald-700 bg-emerald-50/60 border-emerald-100 hover:bg-emerald-100/80 hover:border-emerald-200",
    btnColor: "bg-emerald-600 group-hover:bg-emerald-700 shadow-emerald-100",
    badge: "Hot Choice",
    badgeColor: "from-emerald-500 to-teal-600 text-white",
    level: "Central",
  },
  {
    id: "ssc",
    title: "SSC Exams",
    subtitle: "Gateway to central government departments",
    icon: ShieldCheck,
    exams: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC CPO"],
    coursesCount: 38,
    testsCount: 250,
    accentGradient: "from-indigo-500 to-purple-500",
    gradient: "from-indigo-500/10 to-purple-500/5",
    shadow: "hover:shadow-indigo-500/20",
    borderColor: "border-indigo-100",
    hoverBorderColor: "group-hover:border-indigo-400",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    textColor: "text-indigo-700",
    examBadge: "text-indigo-700 bg-indigo-50/60 border-indigo-100 hover:bg-indigo-100/80 hover:border-indigo-200",
    btnColor: "bg-indigo-600 group-hover:bg-indigo-700 shadow-indigo-100",
    badge: "Trending",
    badgeColor: "from-indigo-500 to-purple-600 text-white",
    level: "Central",
  },
  {
    id: "railways",
    title: "Railways",
    subtitle: "Steer your career in Indian Railways",
    icon: Train,
    exams: ["RRB NTPC", "RRB Group D", "RRB ALP", "RRB JE"],
    coursesCount: 18,
    testsCount: 120,
    accentGradient: "from-amber-500 to-orange-500",
    gradient: "from-amber-500/10 to-orange-500/5",
    shadow: "hover:shadow-amber-500/20",
    borderColor: "border-amber-100",
    hoverBorderColor: "group-hover:border-amber-400",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    textColor: "text-amber-700",
    examBadge: "text-amber-700 bg-amber-50/60 border-amber-100 hover:bg-amber-100/80 hover:border-amber-200",
    btnColor: "bg-amber-600 group-hover:bg-amber-700 shadow-amber-100",
    badge: "Popular",
    badgeColor: "from-amber-500 to-orange-600 text-white",
    level: "Central",
  },
  {
    id: "upsc",
    title: "UPSC / Civil Services",
    subtitle: "Serve the nation at the highest level",
    icon: Award,
    exams: ["UPSC CSE", "NDA", "CDS", "UPSC CAPF"],
    coursesCount: 15,
    testsCount: 90,
    accentGradient: "from-rose-500 to-pink-500",
    gradient: "from-rose-500/10 to-pink-500/5",
    shadow: "hover:shadow-rose-500/20",
    borderColor: "border-rose-100",
    hoverBorderColor: "group-hover:border-rose-400",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    textColor: "text-rose-700",
    examBadge: "text-rose-700 bg-rose-50/60 border-rose-100 hover:bg-rose-100/80 hover:border-rose-200",
    btnColor: "bg-rose-600 group-hover:bg-rose-700 shadow-rose-100",
    badge: "Elite",
    badgeColor: "from-rose-500 to-pink-600 text-white",
    level: "Central",
  },
  {
    id: "pcs",
    title: "State PCS",
    subtitle: "Prestige and leadership in state administration",
    icon: Trophy,
    exams: ["UPPSC", "BPSC", "RAS", "MPPSC", "MPSC"],
    coursesCount: 22,
    testsCount: 140,
    accentGradient: "from-cyan-500 to-blue-500",
    gradient: "from-cyan-500/10 to-blue-500/5",
    shadow: "hover:shadow-cyan-500/20",
    borderColor: "border-cyan-100",
    hoverBorderColor: "group-hover:border-cyan-400",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    textColor: "text-cyan-700",
    examBadge: "text-cyan-700 bg-cyan-50/60 border-cyan-100 hover:bg-cyan-100/80 hover:border-cyan-200",
    btnColor: "bg-cyan-600 group-hover:bg-cyan-700 shadow-cyan-100",
    badge: "State Level",
    badgeColor: "from-cyan-500 to-blue-600 text-white",
    level: "State",
  },
  {
    id: "defence",
    title: "Defence Exams",
    subtitle: "Honor and courage in guarding our borders",
    icon: Shield,
    exams: ["Airforce XY", "Navy SSR", "Army Clerk", "Coast Guard"],
    coursesCount: 16,
    testsCount: 85,
    accentGradient: "from-blue-600 to-sky-500",
    gradient: "from-blue-600/10 to-sky-500/5",
    shadow: "hover:shadow-blue-500/20",
    borderColor: "border-blue-100",
    hoverBorderColor: "group-hover:border-blue-400",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    textColor: "text-blue-700",
    examBadge: "text-blue-700 bg-blue-50/60 border-blue-100 hover:bg-blue-100/80 hover:border-blue-200",
    btnColor: "bg-blue-600 group-hover:bg-blue-700 shadow-blue-100",
    badge: "Active",
    badgeColor: "from-blue-600 to-sky-600 text-white",
    level: "Central",
  },
  {
    id: "teaching",
    title: "Teaching Exams",
    subtitle: "Inspire, educate and shape future generations",
    icon: GraduationCap,
    exams: ["CTET", "UPTET", "UGC NET", "KVS", "NVS"],
    coursesCount: 20,
    testsCount: 110,
    accentGradient: "from-purple-500 to-fuchsia-500",
    gradient: "from-purple-500/10 to-fuchsia-500/5",
    shadow: "hover:shadow-purple-500/20",
    borderColor: "border-purple-100",
    hoverBorderColor: "group-hover:border-purple-400",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    textColor: "text-purple-700",
    examBadge: "text-purple-700 bg-purple-50/60 border-purple-100 hover:bg-purple-100/80 hover:border-purple-200",
    btnColor: "bg-purple-600 group-hover:bg-purple-700 shadow-purple-100",
    badge: "New Batches",
    badgeColor: "from-purple-500 to-fuchsia-600 text-white",
    level: "State",
  },
  {
    id: "insurance",
    title: "Insurance Exams",
    subtitle: "Secure and lucrative careers in insurance giants",
    icon: FileCheck,
    exams: ["LIC AAO", "LIC ADO", "NIACL AO", "GIC Re"],
    coursesCount: 12,
    testsCount: 75,
    accentGradient: "from-teal-500 to-emerald-500",
    gradient: "from-teal-500/10 to-emerald-500/5",
    shadow: "hover:shadow-teal-500/20",
    borderColor: "border-teal-100",
    hoverBorderColor: "group-hover:border-teal-400",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    textColor: "text-teal-700",
    examBadge: "text-teal-700 bg-teal-50/60 border-teal-100 hover:bg-teal-100/80 hover:border-teal-200",
    btnColor: "bg-teal-600 group-hover:bg-teal-700 shadow-teal-100",
    badge: "Specialized",
    badgeColor: "from-teal-500 to-emerald-600 text-white",
    level: "Central",
  },
];

const ExamCards = ({ onSelectCategory }) => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = examCategories.filter((category) => {
    const matchesFilter =
      filter === "All" ||
      (filter === "Central" && category.level === "Central") ||
      (filter === "State" && category.level === "State");

    const matchesSearch =
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.exams.some((exam) =>
        exam.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-20 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 fill-indigo-200" />
            <span>Select Your Target Category</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight sm:text-5xl">
            Prepare For Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dream Exam
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            Explore our meticulously curated categories, live online batches, comprehensive test series, and top-tier mentorship.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          {/* Tabs */}
          <div className="flex bg-slate-100/80 p-1 rounded-xl border border-slate-200 w-full md:w-auto">
            {["All", "Central", "State"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-250 cursor-pointer ${
                  filter === type
                    ? "bg-white text-indigo-600 shadow-sm border border-slate-200/50"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {type === "All" ? "All Categories" : `${type} Exams`}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-450" />
            <input
              type="text"
              placeholder="Search exam category (e.g. SBI, SSC, UPSC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-indigo-400 transition-all font-medium"
            />
          </div>
        </div>

        {/* Cards Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  onClick={() => onSelectCategory && onSelectCategory(category.id)}
                  className={`group relative flex flex-col justify-between h-full bg-white border ${category.borderColor} ${category.hoverBorderColor} rounded-2xl p-6 shadow-sm ${category.shadow} hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden`}
                >
                  {/* Top Color Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.accentGradient}`} />

                  {/* Soft Background Gradient Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}
                  />

                  {/* Top-Right Soft Glowing Orb */}
                  <div
                    className={`absolute -right-10 -top-10 w-36 h-36 rounded-full bg-gradient-to-br ${category.accentGradient} blur-2xl opacity-10 group-hover:opacity-45 transition-opacity duration-500 z-0`}
                  />

                  {/* Content (Z-indexed above backgrounds) */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top Section: Icon & Vibrant Badge */}
                    <div className="flex justify-between items-start mb-6">
                      <div
                        className={`w-13 h-13 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-xs ${category.iconBg} ${category.iconColor}`}
                      >
                        <IconComponent className="w-6.5 h-6.5" />
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r shadow-xs ${category.badgeColor}`}
                      >
                        {category.badge}
                      </span>
                    </div>

                    {/* Title and Subtitle */}
                    <h3 className="font-black text-xl text-slate-900 mb-2.5 leading-tight group-hover:text-slate-800 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-semibold mb-6 leading-relaxed">
                      {category.subtitle}
                    </p>

                    {/* Popular Exams Tags */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {category.exams.map((exam, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all duration-200 ${category.examBadge}`}
                          >
                            {exam}
                          </span>
                        ))}
                      </div>

                      {/* Course statistics */}
                      <div className="flex justify-between items-center text-xs font-bold border-t border-slate-100 pt-4">
                        <div className={`flex items-center gap-1.5 ${category.textColor}`}>
                          <BookOpen className="w-4 h-4 opacity-80" />
                          <span>{category.coursesCount} Courses</span>
                        </div>
                        <div className={`flex items-center gap-1.5 ${category.textColor}`}>
                          <Trophy className="w-4 h-4 opacity-80" />
                          <span>{category.testsCount} Mocks</span>
                        </div>
                      </div>

                      {/* Explore Button Section */}
                      <div className="mt-5 pt-3 border-t border-dashed border-slate-100 flex items-center justify-between text-xs font-bold">
                        <span className={`transition-colors duration-300 font-extrabold ${category.textColor}`}>
                          Explore Batches
                        </span>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-white shadow-sm transition-all duration-300 group-hover:translate-x-1 ${category.btnColor}`}
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-150 rounded-3xl shadow-sm max-w-xl mx-auto">
            <Search className="w-12 h-12 text-slate-350 mx-auto mb-4" />
            <p className="text-lg text-slate-500 font-bold">
              No categories found matching your search.
            </p>
            <p className="text-sm text-slate-400 mt-1 font-medium">
              Try searching with another keyword or clearing filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamCards;
