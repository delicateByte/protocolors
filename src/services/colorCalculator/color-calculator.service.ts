import {Injectable} from '@angular/core';
import * as chroma from 'chroma.ts';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorCalculatorService {

  subjects: any;

  constructor() {
    this.subjects = {};
    this.subjects.primary = new Subject<string>();
    this.subjects.primaryDark = new Subject<string>();
    this.subjects.primaryDarker = new Subject<string>();
    this.subjects.primaryDarkest = new Subject<string>();
    this.subjects.primaryLight = new Subject<string>();
    this.subjects.primaryLighter = new Subject<string>();
    this.subjects.primaryLightest = new Subject<string>();
    this.subjects.offGray = new Subject<string>();
    this.subjects.offWhite = new Subject<string>();
    this.subjects.complementary = new Subject<string>();
    this.subjects.triadicLeft = new Subject<string>();
    this.subjects.triadicRight = new Subject<string>();
    this.subjects.analogousLeft = new Subject<string>();
    this.subjects.analogousRight = new Subject<string>();
  }

  generateColorPalette(originalColor: string): void {
    this.calculateComplementary(originalColor);
    this.calculateShadeOfGray(originalColor);
    this.calculateWhiteWithTint(originalColor);
    this.calculateMultipleDarkerShades(3, originalColor);
    this.calculateMultipleLighterShades(3, originalColor);
    this.calculateTriadic(originalColor);
    this.calculateAnalogous(originalColor);
    this.subjects.primary.next(originalColor);
  }

  getSubject(identifier: string): Subject<string> {
    return this.subjects[identifier];
  }

  calculateShadeOfGray(originalColor): void {
    let grayColor = '';
    /*let lastColor = '';
    for (let i = 0; i < 10; i++) {
      const currentColor = chroma.color(originalColor).desaturate(i).hex();
      if (currentColor === lastColor && lastColor !== '') {
        grayColor = chroma.color(originalColor).desaturate(i - 2).hex();
        break;
      } else {
        lastColor = currentColor;
      }
    }*/
    const hslColor = chroma.color(originalColor).hsl();
    hslColor[1] = 0.05;
    hslColor[2] = 0.5;
    grayColor = chroma.color(hslColor, 'hsl').hex('rgb');
    this.subjects.offGray.next(grayColor);
  }

  calculateWhiteWithTint(originalColor): void {
    const hslOriginalColor = chroma.color(originalColor).hsl();
    hslOriginalColor[1] = 0.2;
    hslOriginalColor[2] = 0.9;
    this.subjects.offWhite.next(chroma.color(hslOriginalColor, 'hsl').hex('rgb'));
  }

  calculateComplementary(originalColor): void {
    const hslOriginalColor = chroma.color(originalColor).hsl();
    hslOriginalColor[0] = hslOriginalColor[0] + 180.0;
    this.subjects.complementary.next(chroma.color(hslOriginalColor, 'hsl').hex('rgb'));
  }

  calculateMultipleLighterShades(numberOfShades, originalColor): void {
    const hslOriginalColor = chroma.color(originalColor);
    const lighterColors = [];
    for (let i = 0; i < numberOfShades; i++) {
      const lighterColor = hslOriginalColor.brighter(i + 1);
      lighterColors.push(chroma.color(lighterColor).hex('rgb'));
    }
    this.subjects.primaryLight.next(lighterColors[0]);
    this.subjects.primaryLighter.next(lighterColors[1]);
    this.subjects.primaryLightest.next(lighterColors[2]);
  }

  calculateMultipleDarkerShades(numberOfShades, originalColor): void {
    const hslOriginalColor = chroma.color(originalColor);
    const darkerColors = [];
    for (let i = 0; i < numberOfShades; i++) {
      const darkerColor = hslOriginalColor.darker(i + 1);
      darkerColors.push(chroma.color(darkerColor).hex('rgb'));
    }
    this.subjects.primaryDark.next(darkerColors[0]);
    this.subjects.primaryDarker.next(darkerColors[1]);
    this.subjects.primaryDarkest.next(darkerColors[2]);
  }

  calculateTriadic(originalColor): void {
    const triadicLeft = chroma.color(originalColor).hsl();
    const triadicRight = chroma.color(originalColor).hsl();
    triadicLeft[0] = triadicLeft[0] - 120;
    triadicRight[0] = triadicRight[0] + 120;
    this.subjects.triadicLeft.next(chroma.color(triadicLeft, 'hsl').hex('rgb'));
    this.subjects.triadicRight.next(chroma.color(triadicRight, 'hsl').hex('rgb'));
  }

  calculateAnalogous(originalColor): void {
    const analogousLeft = chroma.color(originalColor).hsl();
    const analogousRight = chroma.color(originalColor).hsl();
    const spacing = 45;
    analogousLeft[0] = analogousLeft[0] - spacing;
    analogousRight[0] = analogousRight[0] + spacing;
    this.subjects.analogousLeft.next(chroma.color(analogousLeft, 'hsl').hex('rgb'));
    this.subjects.analogousRight.next(chroma.color(analogousRight, 'hsl').hex('rgb'));
  }
}
