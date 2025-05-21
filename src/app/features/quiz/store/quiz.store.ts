import {
  signalStore,
  withState,
  withComputed,
  withMethods,
  patchState,
  withHooks,
  getState,
} from '@ngrx/signals';
import { initialQuizSlice, QuizState } from './quiz.slice';
import { computed, effect } from '@angular/core';
import { addAnswerUpdater, resetQuizUpdater } from './quiz.updaters';
import { getCurrentCount } from './quiz.helper';

// signalStore is a meta function and return a new type
// the state inside the signalStore is wrapped in a signal
export const QuizStore = signalStore(
  withState(initialQuizSlice),
  // for accessing reusable computed create a object with methods and return it
  withComputed(store => {
    const currentQuestionIndex = computed(() => store.answers().length);
    const isDone = computed(
      () => currentQuestionIndex() === store.questions().length
    );
    const currentQuestion = computed(
      () => store.questions()[currentQuestionIndex()]
    );

    const questionsCount = computed(() => store.questions().length);

    const currentCount = computed(() =>
      getCurrentCount(store.answers(), store.questions())
    );

    return {
      currentQuestionIndex,
      isDone,
      currentQuestion,
      questionsCount,
      currentCount,
    };
  }),
  withMethods(store => ({
    addAnswer: (index: number) => {
      patchState(store, addAnswerUpdater(index));
    },
    resetQuiz: () => {
      patchState(store, resetQuizUpdater());
    },
  })),
  withHooks(store => ({
    // this is a hook that will be called when the store is created
    onInit: () => {
      console.log('QuizStore initialized');

      const localStorageQuiz = localStorage.getItem('quiz');
      if (localStorageQuiz) {
        const state = JSON.parse(localStorageQuiz) as QuizState;
        patchState(store, state);
      }

      effect(() => {
        const state = getState(store);
        const stateJson = JSON.stringify(state);
        localStorage.setItem('quiz', stateJson);
      });
    },
    onDestroy: () => {
      console.log('QuizStore destroyed');
    },
  }))
);
