import { Component, computed, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './interfaces/person.interface';
import { patchState, signalState } from '@ngrx/signals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  // This is a simple example of using signals in Angula
  // readonly person = signal<Person>({
  //   id: 1,
  //   name: 'Nihad Keric',
  //   address: {
  //     street: 'Bahnstraße 1',
  //     city: 'Zurich',
  //     state: 'Swiss',
  //   },
  // });

  // readonly personStreet = computed(() => this.person().address.street);

  // This is a example with signalState
  readonly person = signalState<Person>({
    id: 1,
    name: 'Christian Ronaldo',
    address: {
      street: 'Bahnstraße 1',
      city: 'Zurich',
      state: 'Swiss',
    },
  })

  // Address or Street is a DeepSignal of signalState
  readonly personStreet: Signal<string> = this.person.address.street;

  // Modify the signal
  updateStreet() {
    // If is a normal signal (set or update)
    // this.person.set({ ...this.person(), address: { ...this.person().address, street: 'Bahnhofstraße 2' } });
    // this.person.update((prev) => ({ ...prev, address: { ...prev.address, street: 'Bahnhofstraße 2' } }));

    // If is a signalState that use the utility function patchState

    // Change only the person name (only one property)
    patchState(this.person, {
      name: 'Thierry Henry',
    });

    // Change the id with the utility function patchState with a function
    patchState(this.person, (prev) => ({
      id: prev.id + 1,
    }));
  }
}
