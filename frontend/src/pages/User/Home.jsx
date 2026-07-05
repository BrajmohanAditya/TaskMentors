import React from "react";
import CourseSection from "@/components/userComponent/courseSection";
import HeroSection from "@/components/userComponent/heroSection";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import SuccessBoardDisplay from "./success.board";
import Footer from "@/components/userComponent/footer";
import QualifiedMentorsDisplay from "./qualifiedMentors.board";
import ExamCards from "./examCards";

const Home = () => {
  return (
    <div className="min-h-[88vh] bg-slate-50">
      <HeroSection />
      <ExamCards />
      {/* <CourseSection /> */}
      <QualifiedMentorsDisplay />
      <SuccessBoardDisplay />
      <Footer />

      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
