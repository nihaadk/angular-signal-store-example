import { Question } from "../../../interfaces/questions.interface";

export function getCurrentCount(
  answers: number[],
  questions: Question[]
): number {
  let res = 0;

  for (let i = 0; i < answers.length; i++) {
    if (questions.length > i && answers[i] === questions[i].correctIndex) {
      res++;
    }
  }

  return res;
}
