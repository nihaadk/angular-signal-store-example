import { PartialStateUpdater } from '@ngrx/signals';
import { QuizState } from './quiz.slice';

export function addAnswerUpdater(
  index: number
): PartialStateUpdater<QuizState> {
  return (state) => ({
    answers: [...state.answers, index],
  });
}

export function resetQuizUpdater(): PartialStateUpdater<QuizState> {
  return _ => ({
    answers: [],
  });
}

