import express from "express";
import {
  createQuizQuestion,
  getQuizQuestions,
} from "../../controllers/quiz/quiz.question.controller.js";

const router = express.Router();

router.post("/create", createQuizQuestion);
router.get("/get/:quizId", getQuizQuestions);

export default router;
