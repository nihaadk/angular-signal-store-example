import { Injectable } from '@angular/core';
import { keyword, KEYWORD, rgb, RGB } from 'color-convert/conversions';
import { Question } from '../interfaces/questions.interface';
import namer from 'color-namer';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private KNOWN_COLORS: KEYWORD[] = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'magenta',
    'cyan',
    'gray',
    'brown',
    'teal',
    'gold',
    'lime',
    'tomato',
  ];

  randomNumber(min: number, max: number, includeMax = false): number {
    const range = includeMax ? max - min + 1 : max - min;
    return Math.floor(Math.random() * range) + min;
  }

  randomItem<T>(items: T[]): T {
    const index = this.randomNumber(0, items.length);
    return items[index];
  }

  randomItems<T>(items: T[], count: number): T[] {
    const res: T[] = [];

    while (res.length < count) {
      const newItem = this.randomItem(items);
      items = items.filter(i => i !== newItem);
      res.push(newItem);
    }

    return res;
  }

  addRgb(...rgbs: RGB[]): RGB {
    const res: RGB = [0, 0, 0];

    for (let index = 0; index < 3; index++) {
      const sum = rgbs.reduce((acc, c) => acc + c[index], 0);
      res[index] = Math.min(sum, 255);
    }

    return res;
  }

  randomColorQuestion() {
    const twoOrThree = this.randomNumber(2, 3, true);
    const colors = this.randomItems([...this.KNOWN_COLORS], twoOrThree) as
      | [KEYWORD, KEYWORD]
      | [KEYWORD, KEYWORD, KEYWORD];
    const rgbs = colors.map(clr => keyword.rgb(clr));
    const added = this.addRgb(...rgbs);
    const addedHex = rgb.hex(added);

    const htmlCols = namer(addedHex).html;
    const names = htmlCols.map(n => n.name);
    const name = names[0];

    const answers = [names[25], names[50], names[75], names[100]];
    const correctIndex = this.randomNumber(0, 4);
    answers[correctIndex] = name;

    const question: Question = {
      caption: colors,
      answers,
      correctIndex,
    };
    return question;
  }

  randomColorQuiz() {
    return Array.from({
      length: this.randomNumber(6, 20),
    }).map(_ => this.randomColorQuestion());
  }

  splitCamelCase(str: string) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  getColorDisplayNameMap() {
    const htmlColors = [
      'AliceBlue',
      'AntiqueWhite',
      'Aqua',
      'Aquamarine',
      'Azure',
      'Beige',
      'Bisque',
      'Black',
      'BlanchedAlmond',
      'Blue',
      'BlueViolet',
      'Brown',
      'BurlyWood',
      'CadetBlue',
      'Chartreuse',
      'Chocolate',
      'Coral',
      'CornflowerBlue',
      'Cornsilk',
      'Crimson',
      'Cyan',
      'DarkBlue',
      'DarkCyan',
      'DarkGoldenRod',
      'DarkGray',
      'DarkGrey',
      'DarkGreen',
      'DarkKhaki',
      'DarkMagenta',
      'DarkOliveGreen',
      'Darkorange',
      'DarkOrchid',
      'DarkRed',
      'DarkSalmon',
      'DarkSeaGreen',
      'DarkSlateBlue',
      'DarkSlateGray',
      'DarkSlateGrey',
      'DarkTurquoise',
      'DarkViolet',
      'DeepPink',
      'DeepSkyBlue',
      'DimGray',
      'DimGrey',
      'DodgerBlue',
      'FireBrick',
      'FloralWhite',
      'ForestGreen',
      'Fuchsia',
      'Gainsboro',
      'GhostWhite',
      'Gold',
      'GoldenRod',
      'Gray',
      'Grey',
      'Green',
      'GreenYellow',
      'HoneyDew',
      'HotPink',
      'IndianRed',
      'Indigo',
      'Ivory',
      'Khaki',
      'Lavender',
      'LavenderBlush',
      'LawnGreen',
      'LemonChiffon',
      'LightBlue',
      'LightCoral',
      'LightCyan',
      'LightGoldenRodYellow',
      'LightGray',
      'LightGrey',
      'LightGreen',
      'LightPink',
      'LightSalmon',
      'LightSeaGreen',
      'LightSkyBlue',
      'LightSlateGray',
      'LightSlateGrey',
      'LightSteelBlue',
      'LightYellow',
      'Lime',
      'LimeGreen',
      'Linen',
      'Magenta',
      'Maroon',
      'MediumAquaMarine',
      'MediumBlue',
      'MediumOrchid',
      'MediumPurple',
      'MediumSeaGreen',
      'MediumSlateBlue',
      'MediumSpringGreen',
      'MediumTurquoise',
      'MediumVioletRed',
      'MidnightBlue',
      'MintCream',
      'MistyRose',
      'Moccasin',
      'NavajoWhite',
      'Navy',
      'OldLace',
      'Olive',
      'OliveDrab',
      'Orange',
      'OrangeRed',
      'Orchid',
      'PaleGoldenRod',
      'PaleGreen',
      'PaleTurquoise',
      'PaleVioletRed',
      'PapayaWhip',
      'PeachPuff',
      'Peru',
      'Pink',
      'Plum',
      'PowderBlue',
      'Purple',
      'RebeccaPurple',
      'Red',
      'RosyBrown',
      'RoyalBlue',
      'SaddleBrown',
      'Salmon',
      'SandyBrown',
      'SeaGreen',
      'SeaShell',
      'Sienna',
      'Silver',
      'SkyBlue',
      'SlateBlue',
      'SlateGray',
      'SlateGrey',
      'Snow',
      'SpringGreen',
      'SteelBlue',
      'Tan',
      'Teal',
      'Thistle',
      'Tomato',
      'Turquoise',
      'Violet',
      'Wheat',
      'White',
      'WhiteSmoke',
      'Yellow',
      'YellowGreen',
    ];

    return Object.fromEntries(
      htmlColors.map(clr => [clr.toLowerCase(), this.splitCamelCase(clr)])
    );
  }

  displayNameOfColor(color: string) {
    const COLOR_DISPLAY_NAMES = this.getColorDisplayNameMap();

    return COLOR_DISPLAY_NAMES[color.toLowerCase()];
  }
}
