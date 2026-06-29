import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Shield,
  User,
  BookOpen,
  LogOut,
  Loader2,
  LogIn,
  UserPlus,
  LayoutDashboard,
  Grid,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

import { userLogoutHook } from "../../hooks/User.hook";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/user.store";
import StudentIcon from "../icons/StudentIcon";
import SearchBar from "./searchBar";

const Navbar = () => {
  const queryClient = useQueryClient();
  const setUser = useUserStore((state) => state.setUser);
  
  const navigate = useNavigate();
  const { mutate, isPending } = userLogoutHook();
  const { user } = useUserStore();
  const [openCategory, setOpenCategory] = useState(false);

  const logoutHandler = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.removeQueries(["get-user"]);
        setUser(null); 
        navigate("/login"); 
      },
    });
  };

  let navItems = [];

  if (user) {
    if (user.role === "admin") {
      navItems.push({
        label: "Admin Panel",
        icon: Shield,
        onClick: () => navigate("/admindashboard"),
      });
    } else if (user.role === "teacher") {
      navItems.push({
        label: "Teacher Dashboard",
        icon: LayoutDashboard,
        onClick: () => navigate("/teacherdashboard"),
      });
    } else {
      navItems.push({
        label: "Student Dashboard",
        icon: LayoutDashboard,
        onClick: () => navigate("/studentdashboard"), 
      });
      navItems.push({
        label: "My Courses",
        icon: BookOpen,
        onClick: () => navigate("/yourAllPurchasedCourse"),
      });
    }

    navItems.push({
      label: "Profile",
      icon: User,
      onClick: () => navigate("/profile"),
    });

    navItems.push({
      label: "Logout",
      icon: LogOut,
      onClick: logoutHandler,
      loading: isPending,
    });
  } else {
    navItems = [
      {
        label: "Log in",
        icon: LogIn,
        onClick: () => navigate("/login"),
      },
      {
        label: "Sign up",
        icon: UserPlus,
        onClick: () => navigate("/register"), 
      },
    ];
  }

  const courseCategories = [
    { title: "School", items: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"] },
    { title: "Competitive Exams", items: ["Banking", "SSC", "Railways", "UPSC", "State PCS", "Defence"] }
  ];

  return (
    <div className="sticky top-0 z-50 bg-white min-h-[10vh] w-full flex flex-wrap items-center justify-between px-4 md:px-8 py-3 shadow-sm border-b border-slate-200 gap-y-3 transition-all duration-300">
      
      <div className="flex items-center gap-6 order-1">
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <h1
            className="text-2xl lg:text-3xl font-extrabold tracking-tight drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
            }}
          >
            <span className="text-slate-900">Task</span>
            <span className="text-indigo-600 ml-1">Mentors</span>
          </h1>
        </div>

        <div className="hidden lg:block">
          <Popover open={openCategory} onOpenChange={setOpenCategory}>
            <PopoverTrigger asChild>
              <button 
                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-semibold text-sm tracking-wide transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-indigo-50 outline-none"
                onMouseEnter={() => setOpenCategory(true)}
                onMouseLeave={() => setOpenCategory(false)}
              >
                <Grid className="w-4 h-4" />
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openCategory ? 'rotate-180' : ''}`} />
              </button>
            </PopoverTrigger>
            <PopoverContent 
              className="w-[450px] p-4 bg-white border border-slate-100 shadow-xl rounded-xl z-50"
              onMouseEnter={() => setOpenCategory(true)}
              onMouseLeave={() => setOpenCategory(false)}
            >
              <div className="grid grid-cols-2 gap-6">
                {courseCategories.map((cat, idx) => (
                  <div key={idx}>
                    <h3 className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-3 pb-2 border-b border-slate-100">
                      {cat.title}
                    </h3>
                    <ul className="space-y-1">
                      {cat.items.map((item, i) => (
                        <li key={i}>
                          <button 
                            className="w-full text-left flex items-center justify-between px-2 py-1.5 rounded-md text-slate-600 text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 group"
                            onClick={() => {
                              navigate(`/courses?category=${item}`);
                              setOpenCategory(false);
                            }}
                          >
                            <span>{item}</span>
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="w-full md:w-auto md:flex-1 flex justify-center order-3 md:order-2 px-0 lg:px-12">
        <div className="w-full max-w-xl group relative z-40">
          <SearchBar />
        </div>
      </div>

      <div className="order-2 md:order-3 flex items-center gap-4">
        <button 
          className="lg:hidden flex items-center gap-1 text-slate-600 hover:text-indigo-600"
          onClick={() => setOpenCategory(!openCategory)}
        >
          <Grid className="w-5 h-5" />
        </button>

        <Popover>
          <PopoverTrigger className="flex items-center gap-3 p-1.5 hover:bg-slate-50 rounded-full transition-all duration-300 group cursor-pointer border border-transparent hover:border-slate-200">
            <Avatar className="w-10 h-10 border-2 border-white shadow-sm group-hover:shadow-md transition-all duration-300 bg-slate-100">
              <AvatarImage
                src={user?.profilePhoto || ""}
                className="object-cover"
              />
              <AvatarFallback className="bg-indigo-100 w-full h-full text-indigo-700 flex items-center justify-center font-bold">
                {user?.name ? user.name.charAt(0).toUpperCase() : <StudentIcon />}
              </AvatarFallback>
            </Avatar>

            <div className="hidden md:block text-left pr-2">
              <p className="font-bold text-sm text-slate-800 tracking-wide capitalize">
                {user?.name ? user.name.slice(0, 12) + (user.name.length > 12 ? '...' : '') : "Guest"}
              </p>
            </div>
            
            <div className="hidden md:block pr-1">
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-y-0.5 transition-all" />
            </div>
          </PopoverTrigger>

          <PopoverContent className="w-64 p-2 mt-2 bg-white border border-slate-100 shadow-xl rounded-xl z-50">
            <div className="p-4 border-b border-slate-100 mb-2 bg-slate-50/50 rounded-t-lg">
              <p className="font-bold text-slate-900 text-sm tracking-tight capitalize">
                {user?.name || "Welcome Guest"}
              </p>
              <p className="text-xs text-indigo-600 font-semibold mt-1 uppercase tracking-wider">
                {user?.role ? user.role : "Free Account"}
              </p>
            </div>

            <div className="space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  disabled={item.loading}
                  className="group relative w-full flex items-center gap-3 px-4 py-2.5 text-left rounded-lg transition-all duration-200 hover:bg-indigo-50 text-sm font-semibold text-slate-600 hover:text-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <item.icon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0 transition-colors" />
                  <span className="tracking-wide">{item.label}</span>

                  {item.loading && (
                    <div className="absolute right-4">
                      <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
