import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetMyQuizResultsHook } from "@/hooks/quiz/quizResult.hook.js";
import { useGetQuizByIdHook } from "@/hooks/quiz/quiz.hook";
import PageLoader from "@/components/ui/PageLoader";
import { CheckCircle, XCircle, MinusCircle, Trophy } from "lucide-react";

const QuizResult = () => {
  const { id } = useParams(); // quiz ID from URL
  const navigate = useNavigate();

  // Fetch the saved result for this quiz
  const {
    data: resultData,
    isLoading: isResultLoading,
    isError: isResultError,
  } = useGetMyQuizResultsHook(id);

  // Fetch the quiz info (name, totalMarks, etc.)
  const {
    data: quizData,
    isLoading: isQuizLoading,
    isError: isQuizError,
  } = useGetQuizByIdHook(id);

  const loading = isResultLoading || isQuizLoading;
  const isError = isResultError || isQuizError;

  // The saved result from DB
  const result = resultData?.results?.[0];
  const quiz = quizData?.quiz;

  return (
    <PageLoader
      isLoading={loading}
      isError={isError}
      errorMessage="Failed to load your result."
    >
      <div className="min-h-[calc(100vh-80px)] bg-[#f8f9fa] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 w-full max-w-md p-6 text-center">
          {/* Trophy Icon */}
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-[#e6f7f8] flex items-center justify-center">
              <Trophy className="w-6 h-6 text-[#158993]" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-xl font-bold text-slate-800 mb-0.5">
            {quiz?.nameOfExam}
          </h1>
          <p className="text-slate-400 text-xs mb-5">
            Your result has been saved
          </p>

          {/* Score Card */}
          <div className="bg-[#158993] rounded-xl p-4 mb-5 text-white">
            <p className="text-xs font-medium opacity-80 mb-1">Your Score</p>
            <p className="text-4xl font-extrabold">
              {result?.totalScore ?? "—"}
            </p>
            <p className="text-xs opacity-70 mt-1">
              out of {quiz?.totalMarks ?? "—"} marks
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {/* Correct */}
            <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex flex-col items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-lg font-bold text-green-600">
                {result?.correctCount ?? "—"}
              </span>
              <span className="text-[10px] text-green-700 font-medium uppercase tracking-wider">
                Correct
              </span>
            </div>

            {/* Wrong */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-3 flex flex-col items-center gap-1">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-lg font-bold text-red-500">
                {result?.wrongCount ?? "—"}
              </span>
              <span className="text-[10px] text-red-700 font-medium uppercase tracking-wider">
                Wrong
              </span>
            </div>

            {/* Unattempted */}
            <div className="bg-slate-100 border border-slate-200 rounded-xl p-3 flex flex-col items-center gap-1">
              <MinusCircle className="w-4 h-4 text-slate-400" />
              <span className="text-lg font-bold text-slate-500">
                {result?.unattemptedCount ?? "—"}
              </span>
              <span className="text-[10px] text-slate-600 font-medium uppercase tracking-wider">
                Skipped
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate(`/quizeInterface/${id}`)}
              className="flex-1 py-2.5 rounded-lg bg-[#158993] text-white text-sm font-semibold hover:bg-teal-700 transition-colors shadow-sm"
            >
              View Solutions
            </button>
          </div>
        </div>
      </div>
    </PageLoader>
  );
};

export default QuizResult;
