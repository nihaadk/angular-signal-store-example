import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DoneComponent } from './components/done/done.component';
import { ProgressComponent } from '../../components/progress/progress.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { QuizStore } from './store/quiz.store';


@Component({
  selector: 'app-quiz',
  imports: [
    MatToolbarModule,
    MatIconModule,
    DoneComponent,
    ProgressComponent,
    QuestionPresenterComponent,
    ToolbarComponent,
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export default class QuizComponent {
  readonly store = inject(QuizStore);
}
