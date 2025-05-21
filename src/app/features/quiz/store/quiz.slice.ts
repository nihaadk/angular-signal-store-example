import { QUESTIONS } from "../../../data/questions";
import { Question } from "../../../interfaces/questions.interface";

export interface QuizState {
  readonly questions: Question[];
  readonly answers: number[];
}

export const initialQuizSlice: QuizState = {
    questions: QUESTIONS,
    answers: [],
}
