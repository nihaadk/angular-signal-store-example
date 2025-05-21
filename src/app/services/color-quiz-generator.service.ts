import { inject, Injectable } from '@angular/core';
import { ColorService } from './color.service';
import { delay, map, Observable, of } from 'rxjs';
import { Question } from '../interfaces/questions.interface';

@Injectable({
  providedIn: 'root',
})
export class ColorQuizGeneratorService {
  readonly #colorService = inject(ColorService);

  createRandomQuiz(): Observable<Question[]> {
    return of(1).pipe(
      map(_ => this.#colorService.randomColorQuiz()),
      delay(2000)
    );
  }
}
