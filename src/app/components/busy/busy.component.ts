import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-busy',
  imports: [MatProgressSpinnerModule],
  templateUrl: './busy.component.html',
  styleUrl: './busy.component.css'
})
export class BusyComponent {

}
