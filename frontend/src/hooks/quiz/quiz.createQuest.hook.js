import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  createQuizQuestionApi,
  getQuizQuestionsApi,
} from "../../api/quiz.createQuest.api.js";

export const useCreateQuizQuestionHook = () => {
  return useMutation({
    mutationFn: createQuizQuestionApi,
    onSuccess: (data) => {
      toast.success(data?.message || "Question created successfully");
    },
    onError: (err) => {
      const errorMessage =
        err.response?.data?.message || "Failed to create question";
      toast.error(errorMessage);
      console.log("Error creating quiz question:", err);
    },
  });
};

export const useGetQuizQuestionsHook = (quizId) => {
  return useQuery({
    queryKey: ["quizQuestions", quizId],
    queryFn: () => getQuizQuestionsApi(quizId),
    enabled: !!quizId, // Only fetch if quizId is provided
    onError: (err) => {
      console.log("Error fetching quiz questions:", err);
    },
  });
};
