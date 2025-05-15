import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DoneComponent } from './components/done/done.component';
import { ProgressComponent } from './components/progress/progress.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatIconModule,
    DoneComponent,
    ProgressComponent,
    QuestionPresenterComponent,
    ToolbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
