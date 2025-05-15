import { inject, Pipe, PipeTransform } from '@angular/core';
import { ColorService } from '../services/color.service';

@Pipe({
  name: 'colorName',
})
export class ColorNamePipe implements PipeTransform {
  readonly #colorService = inject(ColorService);

  transform(value: string): string {
    return this.#colorService.displayNameOfColor(value);
  }
}
