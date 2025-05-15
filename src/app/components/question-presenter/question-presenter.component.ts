import { Component, signal } from '@angular/core';
import { Question } from '../../interfaces/questions.interface';
import { ColorNamePipe } from "../../pipe/color-name.pipe";

@Component({
  selector: 'app-question-presenter',
  imports: [ColorNamePipe],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.css'
})
export class QuestionPresenterComponent {
 readonly question = signal<Question>({
    caption: ['Red', 'Green'],
    answers: ['Red', 'Green', 'Blue', 'Yellow'],
    correctIndex: 3
  });
}
