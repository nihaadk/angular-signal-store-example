import { PercentPipe } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { QuizStore } from '../../store/quiz.store';

@Component({
  selector: 'app-done',
  imports: [PercentPipe],
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss',
})
export class DoneComponent {
  readonly store = inject(QuizStore);

  readonly correct = this.store.currentCount;

  readonly total = this.store.questionsCount;

  readonly score = computed(() => this.correct() / this.total());
}
