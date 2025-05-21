import { Component, inject, signal } from '@angular/core';
import { ColorNamePipe } from '../../../../pipe/color-name.pipe';
import { QuizStore } from '../../store/quiz.store';

@Component({
  selector: 'app-question-presenter',
  imports: [ColorNamePipe],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.scss',
})
export class QuestionPresenterComponent {
  readonly store = inject(QuizStore);

  readonly question = this.store.currentQuestion;
}
