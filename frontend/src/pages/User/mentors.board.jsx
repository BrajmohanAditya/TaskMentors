import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetQualifiedMentorsHook } from "../../hooks/qualifiedMentors.hook.js";
import { GraduationCap, Briefcase, BookOpen, User, Search, Filter, RefreshCw } from "lucide-react";

const MentorsBoard = () => {
  const { data: mentorsResp, isLoading, refetch, isRefetching } = useGetQualifiedMentorsHook();
  const mentors = mentorsResp?.mentors || [];

  const location = useLocation();
  const defaultExam = location.state?.defaultExam || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExam, setSelectedExam] = useState(defaultExam);

  // Helper to get high-quality, perfectly cropped square images from Cloudinary
  const optimizeImageUrl = (url) => {
    if (!url) return "";
    if (url.includes("ui-avatars")) return url;
    if (url.includes("cloudinary.com") && url.includes("/upload/")) {
      if (!url.includes("/upload/c_")) {
        return url.replace(
          "/upload/",
          "/upload/c_thumb,g_face,z_0.7,h_400,w_400,q_auto:best,f_auto/"
        );
      }
    }
    return url;
  };

  // Helper to format qualifications text into a nice point-wise list
  const formatTextToList = (text) => {
    if (!text) return null;

    if (text.includes("\n")) {
      return text.split("\n").map((line, i) => {
        const t = line.trim();
        return t ? (
          <div key={i} className="mb-1.5 last:mb-0">
            {t}
          </div>
        ) : null;
      });
    }

    try {
      const parts = text.split(/(?=\p{Extended_Pictographic})/gu);
      if (parts.length > 1) {
        return parts.map((part, i) => {
          const t = part.trim();
          return t ? (
            <div key={i} className="mb-2 last:mb-0 flex items-start gap-2">
              <span>{t}</span>
            </div>
          ) : null;
        });
      }
    } catch (e) {}

    if (text.includes(",")) {
      let prefix = "";
      let mainText = text;

      const colonIdx = text.indexOf(":");
      if (colonIdx > -1 && colonIdx < text.indexOf(",")) {
        prefix = text.substring(0, colonIdx + 1);
        mainText = text.substring(colonIdx + 1);
      }

      const items = mainText
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean);

      if (items.length > 1) {
        return (
          <div>
            {prefix && (
              <div className="mb-1.5 font-bold text-slate-800">{prefix}</div>
            )}
            <ul className="space-y-1">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-blue-500 mt-1 flex-shrink-0 text-[10px]">
                    ■
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }
    }

    return <div>{text}</div>;
  };

  // Filter Logic
  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.subject.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesExam = selectedExam === "All" || mentor.examName === selectedExam;

    return matchesSearch && matchesExam;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our Expert <span className="text-blue-600">Mentors</span>
          </h1>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg">
            Connect with highly qualified faculty members dedicated to helping you clear your target exams.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search mentor by name or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 bg-slate-50 hover:bg-slate-100/50 transition-all font-medium"
            />
          </div>

          <div className="flex flex-wrap w-full md:w-auto items-center gap-3">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
              <Filter className="w-4 h-4" /> Filter by Exam:
            </div>
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-700 font-semibold cursor-pointer min-w-[150px]"
            >
              <option value="All">All Exams</option>
              <option value="SSC">SSC</option>
              <option value="Railway">Railway</option>
              <option value="Bank">Bank</option>
              <option value="UPSC">UPSC</option>
              <option value="State PCS">State PCS</option>
              <option value="Defence">Defence</option>
            </select>

            <button
              onClick={() => refetch()}
              disabled={isLoading || isRefetching}
              className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 rounded-xl transition-all cursor-pointer bg-white"
              title="Refresh List"
            >
              <RefreshCw className={`w-5 h-5 ${isRefetching || (isLoading && "animate-spin")}`} />
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="py-24 flex flex-col items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 font-medium">Loading mentors from database...</p>
          </div>
        ) : filteredMentors.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-2xl shadow-sm border border-dashed border-slate-300 p-12 text-center max-w-lg mx-auto">
            <User className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No Mentors Found</h3>
            <p className="text-slate-500 text-sm">
              We couldn't find any mentors matching your filters or search query.
            </p>
          </div>
        ) : (
          /* Mentors Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col relative"
              >
                {/* Header Gradient */}
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-blue-50/80 to-transparent"></div>

                {/* Profile Image Section */}
                <div className="relative pt-6 pb-2 px-4 flex flex-col items-center">
                  <div className="w-24 h-24 shrink-0 rounded-full ring-4 ring-white shadow-md overflow-hidden bg-slate-50 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                    {mentor.imageUrl ? (
                      <img
                        src={optimizeImageUrl(mentor.imageUrl)}
                        alt={mentor.name}
                        className="w-full h-full aspect-square shrink-0 object-cover object-top"
                      />
                    ) : (
                      <User className="w-8 h-8 text-slate-400" />
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900 tracking-tight text-center relative z-10">
                    {mentor.name}
                  </h3>

                  {/* Subject Badge */}
                  <div className="mt-2 relative z-10">
                    <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 shadow-sm">
                      <BookOpen className="w-3.5 h-3.5" />
                      {mentor.subject}
                    </span>
                  </div>
                </div>

                <div className="px-4">
                  <div className="h-px w-full bg-slate-100 mt-2 mb-4"></div>
                </div>

                {/* Qualifications & Details Card Body */}
                <div className="px-4 pb-6 flex-1 flex flex-col gap-3">
                  {/* Target Exam */}
                  {mentor.examName && (
                    <div className="bg-indigo-50/40 p-3 rounded-xl border border-indigo-100/60 shadow-sm">
                      <h4 className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest mb-0.5">
                        Target Exam
                      </h4>
                      <div className="text-[12.5px] font-extrabold text-indigo-700">
                        {mentor.examName}
                      </div>
                    </div>
                  )}

                  {/* Qualifications */}
                  {mentor.qualifications && (
                    <div className="bg-blue-50/40 p-3 rounded-xl border border-blue-100/60 shadow-sm">
                      <h4 className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                        Qualifications
                      </h4>
                      <div className="text-[12.5px] font-semibold text-slate-700 leading-normal">
                        {formatTextToList(mentor.qualifications)}
                      </div>
                    </div>
                  )}

                  {/* Experience */}
                  {mentor.experience && (
                    <div className="bg-amber-50/40 p-3 rounded-xl border border-amber-100/60 shadow-sm">
                      <h4 className="text-[9px] font-bold text-amber-600 uppercase tracking-widest mb-1">
                        Experience
                      </h4>
                      <div className="text-[12.5px] font-semibold text-slate-700 leading-normal">
                        {formatTextToList(mentor.experience)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorsBoard;
