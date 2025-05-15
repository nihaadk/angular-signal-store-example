import { PercentPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-done',
  imports: [PercentPipe],
  templateUrl: './done.component.html',
  styleUrl: './done.component.css',
})
export class DoneComponent {
  readonly correct = signal(3);

  readonly total = signal(8);

  readonly score = computed(() => this.correct() / this.total());
}
