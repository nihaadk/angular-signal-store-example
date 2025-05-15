import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-progress',
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
  readonly value = signal(4);

  readonly max = signal(9);

  readonly ratio = computed(() => this.value() / this.max());

}
